import type { NextPage } from 'next';
import withAuth from '../../utils/withAuth';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Radio,
  RadioGroup,
  Text,
} from '@chakra-ui/react';
import { memo, useState } from 'react';
import {
  FormItem,
  FormItemType,
  initCheckboxFormItem,
  initRadioFormItem,
  initSelectFormItem,
  initTextareaFormItem,
  initTextFormItem,
} from '../../types/Form';
import { FormEditor } from '../../components/organisms/formEditor/FormEditor';
import { FormPreview } from '../../components/organisms/formPreview/FormPreview';
import { FormInput } from '../../components/molecules/form/FormInput';
import { FormTextarea } from '../../components/molecules/form/FormTextarea';
import { set } from '../../api/forms';
import { v4 } from 'uuid';
import { useAuth } from '../../hooks/useAuth';

const FormCreate: NextPage = memo(() => {
  const [forms, setForms] = useState<FormItem[]>([]);
  const [formType, setFormType] = useState<FormItemType>('text');
  const [formTitle, setFormTitle] = useState('');
  const [formDescription, setFormDescription] = useState('');

  const { currentUser } = useAuth();

  const onChangeFormTypeRadio = (value: string) => {
    if (
      value === 'text' ||
      value === 'checkbox' ||
      value === 'radio' ||
      value === 'select' ||
      value === 'textarea'
    ) {
      setFormType(value);
    }
  };

  const onClickAddInput = () => {
    switch (formType) {
      case 'text':
        setForms([...forms, initTextFormItem()]);
        break;
      case 'checkbox':
        setForms([...forms, initCheckboxFormItem()]);
        break;
      case 'radio':
        setForms([...forms, initRadioFormItem()]);
        break;
      case 'select':
        setForms([...forms, initSelectFormItem()]);
        break;
      case 'textarea':
        setForms([...forms, initTextareaFormItem()]);
        break;
    }
  };

  const onChangeFormEditor = (value: FormItem) => {
    const newForms = [...forms];
    const index = forms.findIndex((form) => form.uid === value.uid);
    newForms.splice(index, 1, value);
    setForms(newForms);
  };

  const onDeleteFormEditor = (index: number) => {
    const newForms = [...forms];
    newForms.splice(index, 1);
    setForms(newForms);
  };

  const onClickSave = async () => {
    await set({
      title: formTitle,
      description: formDescription,
      uid: v4(),
      items: forms,
      userId: currentUser!.uid,
      type: 'form',
    });
  };

  return (
    <>
      <h1>FormCreate</h1>

      <Flex p={4}>
        <Box width={'50%'} p={2}>
          <h2>編集</h2>

          <FormInput
            label={'フォームタイトル'}
            value={formTitle}
            onChange={setFormTitle}
          />
          <FormTextarea
            label={'説明'}
            value={formDescription}
            onChange={setFormDescription}
          />

          <FormControl>
            <FormLabel>入力項目の種類</FormLabel>
            <RadioGroup value={formType} onChange={onChangeFormTypeRadio}>
              <HStack spacing={4}>
                <Radio value="text">Text</Radio>
                <Radio value="checkbox">Checkbox</Radio>
                <Radio value="radio">Radio</Radio>
                <Radio value="select">Select</Radio>
                <Radio value="textarea">Textarea</Radio>
              </HStack>
            </RadioGroup>
          </FormControl>

          <Button onClick={onClickAddInput}>入力項目を追加</Button>

          {forms.map((form, index) => (
            <FormEditor
              key={form.uid}
              form={form}
              onChangeForm={onChangeFormEditor}
              onDeleteForm={() => onDeleteFormEditor(index)}
            />
          ))}
        </Box>
        <Box width={'50%'} p={2}>
          <h2>Preview</h2>
          <Heading as={'h1'}>{formTitle}</Heading>
          <Text>{formDescription}</Text>
          {forms.map((form) => (
            <FormPreview key={form.uid} form={form} />
          ))}
        </Box>
      </Flex>

      <Button onClick={onClickSave}>保存する</Button>
    </>
  );
});

export default withAuth(FormCreate);

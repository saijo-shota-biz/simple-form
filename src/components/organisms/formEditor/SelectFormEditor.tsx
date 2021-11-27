import { ChangeEvent, memo, VFC } from 'react';
import { initOption, Option, SelectFormItem } from '../../../types/Form';
import { FormInput } from '../../molecules/form/FormInput';
import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  Stack,
} from '@chakra-ui/react';
import { CustomFormLabel } from '../../atoms/CustomFormLabel';

type Props = {
  form: SelectFormItem;
  onChange: (value: SelectFormItem) => void;
};

export const SelectFormEditor: VFC<Props> = memo(({ form, onChange }) => {
  const onChangeLabel = (value: string) => {
    onChange({
      ...form,
      label: value,
    });
  };

  const onChangeOptionLabel = (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newOption: Option = {
      ...form.options[index],
      label: e.target.value,
    };
    const newOptions = [...form.options];
    newOptions.splice(index, 1, newOption);
    onChange({ ...form, options: newOptions });
  };

  const onClickOptionAddButton = () => {
    onChange({
      ...form,
      options: [...form.options, initOption()],
    });
  };

  return (
    <>
      <FormInput label={'ラベル'} value={form.label} onChange={onChangeLabel} />

      <FormControl>
        <CustomFormLabel>{'選択肢'}</CustomFormLabel>
        <Stack spacing={4} direction={'column'}>
          {form.options.map((opt, i) => (
            <Input
              key={opt.value}
              value={opt.label}
              onChange={(e) => onChangeOptionLabel(e, i)}
            />
          ))}
        </Stack>
        <FormHelperText></FormHelperText>
      </FormControl>

      <Button onClick={onClickOptionAddButton}>選択肢を追加</Button>
    </>
  );
});

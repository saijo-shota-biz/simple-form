import { ChangeEvent, memo, VFC } from 'react';
import { CheckboxFormItem, initOption, Option } from '../../../types/Form';
import { Button, Input } from '@chakra-ui/react';
import { FormInput } from '../../molecules/form/FormInput';
import { FormCheckbox } from '../../molecules/form/FormCheckbox';

type Props = {
  form: CheckboxFormItem;
  onChange: (value: CheckboxFormItem) => void;
};

export const CheckboxFormEditor: VFC<Props> = memo(({ form, onChange }) => {
  const onChangeLabel = (value: string) => {
    onChange({ ...form, label: value });
  };

  const changeOptions = (
    index: number,
    options: Option[],
    newOption: Option
  ) => {
    const newOptions = [...form.options];
    newOptions.splice(index, 1, newOption);
    onChange({ ...form, options: newOptions });
  };

  const onChangeOptionLabel = (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newOption: Option = {
      ...form.options[index],
      label: e.target.value,
    };
    changeOptions(index, form.options, newOption);
  };

  const onChangeOptionDefaultValues = (checkedValues: string[]) => {
    onChange({
      ...form,
      defaultValues: checkedValues,
    });
  };

  const onClickOptionAddButton = () => {
    onChange({ ...form, options: [...form.options, initOption()] });
  };

  return (
    <>
      <FormInput label={'ラベル'} value={form.label} onChange={onChangeLabel} />
      <FormCheckbox
        label={'オプション'}
        checkboxes={form.options.map((opt, i) => ({
          value: opt.value,
          children: (
            <Input
              value={opt.label}
              onChange={(e) => onChangeOptionLabel(e, i)}
            />
          ),
        }))}
        checkedValues={form.defaultValues}
        onChange={onChangeOptionDefaultValues}
        direction={'column'}
      />
      <Button onClick={onClickOptionAddButton}>オプションを追加</Button>
    </>
  );
});

import { ChangeEvent, memo, VFC } from 'react';
import { initOption, Option, RadioFormItem } from '../../../types/Form';
import { Button, Input } from '@chakra-ui/react';
import { FormInput } from '../../molecules/form/FormInput';
import { FormRadio } from '../../molecules/form/FormRadio';

type Props = {
  form: RadioFormItem;
  onChange: (value: RadioFormItem) => void;
};

export const RadioFormEditor: VFC<Props> = memo(({ form, onChange }) => {
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

  const onChangeOptionDefaultValue = (value: string) => {
    onChange({ ...form, defaultValue: value });
  };

  const onClickOptionAddButton = () => {
    onChange({ ...form, options: [...form.options, initOption()] });
  };

  return (
    <>
      <FormInput label={'ラベル'} value={form.label} onChange={onChangeLabel} />
      <FormRadio
        label={'オプション'}
        checkedValue={form.defaultValue}
        onChange={onChangeOptionDefaultValue}
        radios={form.options.map((opt, i) => ({
          value: opt.value,
          children: (
            <Input
              value={opt.label}
              onChange={(e) => onChangeOptionLabel(e, i)}
            />
          ),
        }))}
        direction={'column'}
      />
      <Button onClick={onClickOptionAddButton}>オプションを追加</Button>
    </>
  );
});

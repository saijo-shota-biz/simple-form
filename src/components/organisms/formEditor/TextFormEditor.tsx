import { memo, VFC } from 'react';
import { TextFormItem } from '../../../types/Form';
import { FormInput } from '../../molecules/form/FormInput';

type Props = {
  form: TextFormItem;
  onChange: (value: TextFormItem) => void;
};

export const TextFormEditor: VFC<Props> = memo(({ form, onChange }) => {
  const onChangeLabel = (value: string) => {
    onChange({ ...form, label: value });
  };

  const onChangeDefaultValue = (value: string) => {
    onChange({ ...form, defaultValue: value });
  };

  return (
    <>
      <FormInput label={'ラベル'} value={form.label} onChange={onChangeLabel} />

      <FormInput
        label={'初期値'}
        value={form.defaultValue}
        onChange={onChangeDefaultValue}
      />
    </>
  );
});

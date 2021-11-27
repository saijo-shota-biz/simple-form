import { memo, VFC } from 'react';
import { TextareaFormItem } from '../../../types/Form';
import { FormInput } from '../../molecules/form/FormInput';
import { FormTextarea } from '../../molecules/form/FormTextarea';

type Props = {
  form: TextareaFormItem;
  onChange: (value: TextareaFormItem) => void;
};

export const TextareaFormEditor: VFC<Props> = memo(({ form, onChange }) => {
  const onChangeLabel = (value: string) => {
    onChange({ ...form, label: value });
  };

  const onChangeDefaultValue = (value: string) => {
    onChange({ ...form, defaultValue: value });
  };

  return (
    <>
      <FormInput label={'ラベル'} value={form.label} onChange={onChangeLabel} />
      <FormTextarea
        label={'初期値'}
        value={form.defaultValue}
        onChange={onChangeDefaultValue}
      ></FormTextarea>
    </>
  );
});

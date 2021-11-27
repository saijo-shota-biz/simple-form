import { memo, VFC } from 'react';
import { SelectFormItem } from '../../../types/Form';
import { FormSelect } from '../../molecules/form/FormSelect';

type Props = {
  form: SelectFormItem;
};

export const SelectFormPreview: VFC<Props> = memo(({ form }) => {
  return (
    <FormSelect
      value={form.defaultValue}
      options={form.options}
      label={form.label}
      readonly={true}
    />
  );
});

import { memo, VFC } from 'react';
import { TextFormItem } from '../../../types/Form';
import { FormInput } from '../../molecules/form/FormInput';

type Props = {
  form: TextFormItem;
};

export const TextFormPreview: VFC<Props> = memo(
  ({ form: { label, defaultValue } }) => {
    return <FormInput label={label} value={defaultValue} readonly={true} />;
  }
);

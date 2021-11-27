import { memo, VFC } from 'react';
import { TextareaFormItem } from '../../../types/Form';
import { FormTextarea } from '../../molecules/form/FormTextarea';

type Props = {
  form: TextareaFormItem;
};

export const TextareaFormPreview: VFC<Props> = memo(
  ({ form: { label, defaultValue } }) => {
    return <FormTextarea label={label} value={defaultValue} readonly={true} />;
  }
);

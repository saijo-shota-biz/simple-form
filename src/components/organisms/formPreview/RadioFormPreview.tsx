import { memo, VFC } from 'react';
import { RadioFormItem } from '../../../types/Form';
import { FormRadio } from '../../molecules/form/FormRadio';

type Props = {
  form: RadioFormItem;
};

export const RadioFormPreview: VFC<Props> = memo(
  ({ form: { label, options, defaultValue } }) => {
    return (
      <FormRadio
        label={label}
        radios={options.map((opt) => ({ value: opt.value, label: opt.label }))}
        checkedValue={defaultValue}
        readonly={true}
      />
    );
  }
);

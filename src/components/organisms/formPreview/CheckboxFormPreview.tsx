import { memo, VFC } from 'react';
import {
  Checkbox,
  CheckboxGroup,
  FormControl,
  FormLabel,
  HStack,
} from '@chakra-ui/react';
import { CheckboxFormItem } from '../../../types/Form';
import { FormCheckbox } from '../../molecules/form/FormCheckbox';

type Props = {
  form: CheckboxFormItem;
};

export const CheckboxFormPreview: VFC<Props> = memo(
  ({ form: { label, options, defaultValues } }) => {
    return (
      <FormCheckbox
        label={label}
        checkboxes={options.map((opt) => ({
          value: opt.value,
          label: opt.label,
        }))}
        checkedValues={defaultValues}
        readonly={true}
      />
    );
  }
);

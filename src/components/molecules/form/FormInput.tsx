import { ChangeEvent, memo, VFC } from 'react';
import { FormControl, FormHelperText, Input } from '@chakra-ui/react';
import { CustomFormLabel } from '../../atoms/CustomFormLabel';

type Props = {
  label: string;
  value: string;
  onChange?: (value: string) => void;
  helperText?: string;
  readonly?: boolean;
};

export const FormInput: VFC<Props> = memo(
  ({ label, value, onChange = () => {}, helperText, readonly = false }) => {
    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
    };

    return (
      <FormControl>
        <CustomFormLabel>{label}</CustomFormLabel>
        <Input value={value} onChange={onChangeInput} isReadOnly={readonly} />
        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
    );
  }
);

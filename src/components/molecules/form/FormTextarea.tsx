import { ChangeEvent, memo, VFC } from 'react';
import { FormControl, FormHelperText, Input, Textarea } from '@chakra-ui/react';
import { CustomFormLabel } from '../../atoms/CustomFormLabel';

type Props = {
  label: string;
  value: string;
  onChange?: (value: string) => void;
  helperText?: string;
  readonly?: boolean;
};

export const FormTextarea: VFC<Props> = memo(
  ({ label, value, onChange = () => {}, helperText, readonly = false }) => {
    const onChangeTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {
      onChange(e.target.value);
    };

    return (
      <FormControl>
        <CustomFormLabel>{label}</CustomFormLabel>
        <Textarea
          value={value}
          onChange={onChangeTextarea}
          isReadOnly={readonly}
          resize={'vertical'}
        />
        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
    );
  }
);

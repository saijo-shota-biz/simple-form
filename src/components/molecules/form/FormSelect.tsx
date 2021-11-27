import { FormControl, FormHelperText, Select } from '@chakra-ui/react';
import { ChangeEvent, ReactNode, VFC } from 'react';
import { CustomFormLabel } from '../../atoms/CustomFormLabel';

type Props = {
  label: string;
  value: string;
  options: {
    value: string;
    label: string;
  }[];
  onChange?: (selectedValue: string) => void;
  readonly?: boolean;
};

export const FormSelect: VFC<Props> = ({
  label,
  value,
  options,
  readonly,
  onChange = () => {},
}) => {
  const onChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <FormControl>
      <CustomFormLabel>{label}</CustomFormLabel>
      <Select value={value} onChange={onChangeSelect} isReadOnly={readonly}>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </Select>
      <FormHelperText></FormHelperText>
    </FormControl>
  );
};

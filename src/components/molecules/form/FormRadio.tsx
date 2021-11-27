import { ReactNode, VFC } from 'react';
import {
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Radio,
  RadioGroup,
  Stack,
} from '@chakra-ui/react';
import { CustomFormLabel } from '../../atoms/CustomFormLabel';

type Props = {
  label: string;
  radios: {
    value: string;
    label?: string;
    children?: ReactNode;
  }[];
  checkedValue: string;
  onChange?: (checkedValue: string) => void;
  readonly?: boolean;
  direction?: 'row' | 'column';
};

export const FormRadio: VFC<Props> = ({
  label,
  checkedValue,
  onChange = () => {},
  radios,
  readonly = false,
  direction = 'row',
}) => {
  return (
    <FormControl>
      <CustomFormLabel>{label}</CustomFormLabel>
      <RadioGroup value={checkedValue} onChange={onChange}>
        <Stack spacing={4} direction={direction} wrap={'wrap'}>
          {radios.map((radio, i) => (
            <HStack key={i} spacing={2}>
              <Radio value={radio.value} isReadOnly={readonly}>
                {radio.label}
              </Radio>
              {radio.children}
            </HStack>
          ))}
        </Stack>
      </RadioGroup>
      <FormHelperText></FormHelperText>
    </FormControl>
  );
};

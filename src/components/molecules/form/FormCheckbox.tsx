import { memo, ReactNode, VFC } from 'react';
import {
  Checkbox,
  CheckboxGroup,
  FormControl,
  FormHelperText,
  HStack,
  Stack,
} from '@chakra-ui/react';
import { CustomFormLabel } from '../../atoms/CustomFormLabel';

type Props = {
  label: string;
  checkboxes: {
    value: string;
    label?: string;
    children?: ReactNode;
  }[];
  checkedValues: string[];
  onChange?: (checkedValues: string[]) => void;
  readonly?: boolean;
  direction?: 'row' | 'column';
};

export const FormCheckbox: VFC<Props> = memo(
  ({
    label,
    checkboxes,
    checkedValues,
    onChange = () => {},
    readonly = false,
    direction = 'row',
  }) => {
    return (
      <FormControl>
        <CustomFormLabel>{label}</CustomFormLabel>
        <CheckboxGroup value={checkedValues} onChange={onChange}>
          <Stack spacing={4} direction={direction} wrap={'wrap'}>
            {checkboxes.map((checkbox, i) => (
              <HStack key={i} spacing={2}>
                <Checkbox value={checkbox.value} isReadOnly={readonly}>
                  {checkbox.label}
                </Checkbox>
                {checkbox.children}
              </HStack>
            ))}
          </Stack>
        </CheckboxGroup>
        <FormHelperText></FormHelperText>
      </FormControl>
    );
  }
);

import { memo, ReactNode, VFC } from 'react';
import { FormLabel } from '@chakra-ui/react';

type Props = {
  children: ReactNode;
};

export const CustomFormLabel: VFC<Props> = memo(({ children }) => {
  return (
    <FormLabel fontSize={'large'} my={4}>
      {children}
    </FormLabel>
  );
});

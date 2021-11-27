import { Box, CloseButton, Heading, HStack, Text } from '@chakra-ui/react';
import { ReactNode, VFC } from 'react';

type Props = {
  title: string;
  onClickCloseButton: () => void;
  children: ReactNode;
};

export const Card: VFC<Props> = ({ children, title, onClickCloseButton }) => {
  return (
    <>
      <Box py={4} px={2} borderRadius={10} shadow={'md'} m={4}>
        <HStack justifyContent={'space-between'}>
          <Text>{title}</Text>
          <CloseButton onClick={onClickCloseButton} />
        </HStack>
        {children}
      </Box>
    </>
  );
};

import { ChangeEvent, FC, useCallback, useState } from 'react';
import { Input } from '@chakra-ui/react';
import { InputProps } from '@chakra-ui/input/dist/types/input';

export const useTextInput = (props: InputProps = {}): [string, JSX.Element] => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  const TextInput = <Input value={value} onChange={onChange} {...props} />;

  return [value, TextInput];
};

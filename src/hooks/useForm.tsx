import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FormItem } from '../types/Form';

export const useForm = () => {
  const [id] = useState(uuidv4);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [inputs, setFormInputs] = useState<FormItem[]>([]);

  return { id, title, description, inputs };
};

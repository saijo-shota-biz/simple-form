import { v4 as uuidv4 } from 'uuid';
import { Entity } from './Entity';

export type Form = Entity & {
  title: string;
  description: string;
  items: FormItem[];
  userId: string;
  type: 'form';
};

export type FormItem =
  | TextFormItem
  | CheckboxFormItem
  | RadioFormItem
  | SelectFormItem
  | TextareaFormItem;

export type BaseFormItem = Entity & {
  label: string;
  type: FormItemType;
};

export type FormItemType =
  | 'text'
  | 'checkbox'
  | 'radio'
  | 'select'
  | 'textarea';

export type TextFormItem = BaseFormItem & {
  type: 'text';
  defaultValue: string;
};

export const initTextFormItem = (): TextFormItem => ({
  uid: uuidv4(),
  label: '',
  type: 'text',
  defaultValue: '',
});

export type TextareaFormItem = BaseFormItem & {
  type: 'textarea';
  defaultValue: string;
};

export const initTextareaFormItem = (): TextareaFormItem => ({
  uid: uuidv4(),
  label: '',
  type: 'textarea',
  defaultValue: '',
});

export type Option = {
  label: string;
  value: string;
};

export const initOption = (value: string = uuidv4()) => ({
  label: '',
  value,
});

export type CheckboxFormItem = BaseFormItem & {
  type: 'checkbox';
  defaultValues: string[];
  options: Option[];
};

export const initCheckboxFormItem = (): CheckboxFormItem => {
  const defaultOptionValue = uuidv4();
  return {
    uid: uuidv4(),
    label: '',
    type: 'checkbox',
    defaultValues: [defaultOptionValue],
    options: [initOption(defaultOptionValue)],
  };
};

export type RadioFormItem = BaseFormItem & {
  type: 'radio';
  defaultValue: string;
  options: Option[];
};

export const initRadioFormItem = (): RadioFormItem => {
  const defaultOptionValue = uuidv4();
  return {
    uid: uuidv4(),
    label: '',
    type: 'radio',
    defaultValue: defaultOptionValue,
    options: [initOption(defaultOptionValue)],
  };
};

export type SelectFormItem = BaseFormItem & {
  type: 'select';
  defaultValue: string;
  options: Option[];
};

export const initSelectFormItem = (): SelectFormItem => {
  const defaultOptionValue = uuidv4();
  return {
    uid: uuidv4(),
    label: '',
    type: 'select',
    defaultValue: defaultOptionValue,
    options: [initOption(defaultOptionValue)],
  };
};

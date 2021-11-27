import {
  CheckboxFormItem,
  FormItem,
  RadioFormItem,
  SelectFormItem,
  TextFormItem,
} from '../../../types/Form';
import { memo, VFC } from 'react';
import { TextFormPreview } from './TextFormPreview';
import { CheckboxFormPreview } from './CheckboxFormPreview';
import { RadioFormPreview } from './RadioFormPreview';
import { SelectFormPreview } from './SelectFormPreview';
import { TextareaFormPreview } from './TextareaFormPreview';

type Props = {
  form: FormItem;
};

export const FormPreview: VFC<Props> = memo(({ form }) => {
  switch (form.type) {
    case 'text':
      return <TextFormPreview form={form} />;
    case 'checkbox':
      return <CheckboxFormPreview form={form} />;
    case 'radio':
      return <RadioFormPreview form={form} />;
    case 'select':
      return <SelectFormPreview form={form} />;
    case 'textarea':
      return <TextareaFormPreview form={form} />;
  }
});

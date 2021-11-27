import { memo, VFC } from 'react';
import { FormItem } from '../../../types/Form';
import { TextFormEditor } from './TextFormEditor';
import { CheckboxFormEditor } from './CheckboxFormEditor';
import { RadioFormEditor } from './RadioFormEditor';
import { SelectFormEditor } from './SelectFormEditor';
import { TextareaFormEditor } from './TextareaFromEditor';
import { Card } from '../../molecules/Card';

type Props = {
  form: FormItem;
  onChangeForm: (form: FormItem) => void;
  onDeleteForm: () => void;
};

export const FormEditor: VFC<Props> = memo(
  ({ form, onChangeForm, onDeleteForm }) => {
    const formEditor = (() => {
      switch (form.type) {
        case 'text':
          return <TextFormEditor form={form} onChange={onChangeForm} />;
        case 'checkbox':
          return <CheckboxFormEditor form={form} onChange={onChangeForm} />;
        case 'radio':
          return <RadioFormEditor form={form} onChange={onChangeForm} />;
        case 'select':
          return <SelectFormEditor form={form} onChange={onChangeForm} />;
        case 'textarea':
          return <TextareaFormEditor form={form} onChange={onChangeForm} />;
      }
    })();
    return (
      <Card title={form.type} onClickCloseButton={onDeleteForm}>
        {formEditor}
      </Card>
    );
  }
);

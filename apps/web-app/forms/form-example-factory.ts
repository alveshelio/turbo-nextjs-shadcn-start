import { formExampleSchema } from '@/schemas/form-example-schema';
import { createFormFactory } from '@tanstack/react-form';
import { zodValidator } from '@tanstack/zod-form-adapter';

export const formExampleFactory = createFormFactory({
  defaultValues: {
    firstName: '',
    lastName: '',
  },
  onServerValidate({ value }) {
    if (value.lastName.length > 42) {
      return 'Server validation: What a big name you have';
    }
  },
  validatorAdapter: zodValidator,
  validators: {
    onBlur: formExampleSchema,
  },
});

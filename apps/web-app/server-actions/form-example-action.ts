'use server';

import { formExampleFactory } from '@/forms/form-example-factory';

export const formExampleAction = async (prev: unknown, formData: FormData) => {
  return await formExampleFactory.validateFormData(formData);
};

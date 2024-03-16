'use client';

import { FieldInfo } from '@/components/field-info/field-info';
import { useClientTranslation } from '@/i18n/client';
import { formExampleSchema } from '@/schemas/form-example-schema';
import { LanguageParams } from '@/types/common';
import { Button } from '@/ui/button';
import { Input } from '@/ui/input';
import { Label } from '@/ui/label';
import { useForm } from '@tanstack/react-form';
import { zodValidator } from '@tanstack/zod-form-adapter';
import { FormEvent, useCallback } from 'react';

export const Form = ({ lng }: LanguageParams['params']) => {
  const { t } = useClientTranslation(lng, 'forms');
  const { Field, handleSubmit } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
    },
    onSubmit: (formData) => {
      console.log(formData.value);
    },
    validatorAdapter: zodValidator,
    validators: {
      onBlur: formExampleSchema,
    },
  });

  const handleOnSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      e.stopPropagation();
      void handleSubmit();
    },
    [handleSubmit]
  );

  return (
    <form onSubmit={(e) => handleOnSubmit(e)}>
      <div className="flex gap-4 flex-col">
        <Field name="firstName">
          {(field) => (
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="firstName">{t('firstName')}</Label>
              <Input
                id={field.name}
                name={field.name}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                type="text"
                value={field.state.value}
              />
              <FieldInfo field={field} />
            </div>
          )}
        </Field>
        <Field name="lastName">
          {(field) => (
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="lastName">{t('lastName')}</Label>
              <Input
                id={field.name}
                name={field.name}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                type="text"
                value={field.state.value}
              />
              <FieldInfo field={field} />
            </div>
          )}
        </Field>
        <Button className="self-start" type="submit">
          {t('submit')}
        </Button>
      </div>
    </form>
  );
};

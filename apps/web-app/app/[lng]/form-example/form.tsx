'use client';

import { FieldInfo } from '@/components/field-info/field-info';
import { formExampleFactory } from '@/forms/form-example-factory';
import { useClientTranslation } from '@/i18n/client';
import { formExampleAction } from '@/server-actions/form-example-action';
import { LanguageParams } from '@/types/common';
import { Button } from '@/ui/button';
import { Input } from '@/ui/input';
import { Label } from '@/ui/label';
import { FormApi, mergeForm, useTransform } from '@tanstack/react-form';
import { useFormState } from 'react-dom';

export const Form = ({ lng }: LanguageParams['params']) => {
  const [state, action] = useFormState(
    formExampleAction,
    formExampleFactory.initialFormState
  );
  const { t } = useClientTranslation(lng, 'forms');

  const { Field, handleSubmit, Subscribe, useStore } =
    formExampleFactory.useForm({
      transform: useTransform(
        (baseForm: FormApi<any, any>) => mergeForm(baseForm, state),
        [state]
      ),
    });

  const formErrors = useStore((formState) => formState.errors);

  // console.warn('formErrors', formErrors);

  return (
    <form action={action as never} onSubmit={handleSubmit}>
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
        <Subscribe
          selector={(formState) => [
            formState.canSubmit,
            formState.isSubmitting,
          ]}
        >
          {([canSubmit, isSubmitting]) => (
            <Button className="self-start" disabled={!canSubmit} type="submit">
              {isSubmitting ? '...' : t('submit')}
            </Button>
          )}
        </Subscribe>
      </div>
    </form>
  );
};

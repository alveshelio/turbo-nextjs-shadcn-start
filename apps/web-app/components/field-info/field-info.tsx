import type { FieldApi } from '@tanstack/react-form';

type FieldInfoProps = {
  field: FieldApi<any, any, any, any>;
};

export const FieldInfo = ({ field }: FieldInfoProps) => {
  return (
    <>
      {field.state.meta.touchedErrors.length ? (
        <em>{field.state.meta.touchedErrors}</em>
      ) : null}
      {field.state.meta.isValidating ? 'Validating...' : null}
    </>
  );
};

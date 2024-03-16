import { Form } from '@/app/[lng]/form-example/form';
import { Heading } from '@/ui/heading';
import { LanguageParams } from '@/types/common';

export default function FormExamplePage({ params }: LanguageParams) {
  return (
    <div>
      <Heading level={1}>Form Example</Heading>
      <Form lng={params.lng} />
    </div>
  );
}

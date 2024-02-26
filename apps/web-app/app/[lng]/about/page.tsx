import { Counter } from '@/components/ui/counter/counter';
import { LanguageParams } from '@/types/common';
import { useServerTranslation } from '@/i18n/server';

export default async function AboutPage({ params: { lng } }: LanguageParams) {
  const { t } = await useServerTranslation(lng, 'about');
  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
      <Counter lng={lng} />
    </div>
  );
}

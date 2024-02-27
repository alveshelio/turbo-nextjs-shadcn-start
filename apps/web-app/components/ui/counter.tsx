'use client';

import { Language } from '@/types/common';
import { useState } from 'react';
import { Button } from '@/ui/button';
import { useClientTranslation } from '@/i18n/client';

export const Counter = ({ lng }: Language) => {
  const [count, setCount] = useState(0);
  const { t } = useClientTranslation(lng, 'common');

  return (
    <div>
      <h1>
        {t('count')} {count}
      </h1>
      <Button variant="outline" size="icon" onClick={() => setCount(count + 1)}>
        +
      </Button>
      <Button variant="outline" size="icon" onClick={() => setCount(count - 1)}>
        -
      </Button>
    </div>
  );
};

'use client';

import { useClientTranslation } from '@/i18n/client';
import { Language } from '@/types/common';
import { Button } from '@/ui/button';
import { useState } from 'react';

const Counter = ({ lng }: Language) => {
  const [count, setCount] = useState(0);
  const { t } = useClientTranslation(lng, 'common');

  return (
    <div>
      <h1>
        {t('count')} {count}
      </h1>
      <Button onClick={() => setCount(count + 1)} size="icon" variant="outline">
        +
      </Button>
      <Button onClick={() => setCount(count - 1)} size="icon" variant="outline">
        -
      </Button>
    </div>
  );
};

export { Counter };

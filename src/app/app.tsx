'use client';

import { FC, PropsWithChildren, useState } from 'react';
import Loading from './loading';
import { getConfigProviderLocale } from '@/packages/utils/configprovider';
import { ConfigProvider } from '@eightfold.ai/octuple';
import { canUseDom } from '@/packages/utils/canUseDom';
import useMounted from '@/packages/hooks/useMounted';

import '@eightfold.ai/octuple/lib/octuple.css';

const App: FC<PropsWithChildren> = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useMounted(() => {
    if (canUseDom()) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  });

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <ConfigProvider
          children={children}
          locale={getConfigProviderLocale()}
          themeOptions={{ name: 'blue' }}
        />
      )}
    </>
  );
};

export default App;

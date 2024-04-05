'use client';

import { FC, PropsWithChildren } from 'react';
import { getConfigProviderLocale } from '@/packages/utils/configprovider';
import { ConfigProvider } from '@eightfold.ai/octuple';

import '@eightfold.ai/octuple/lib/octuple.css';

const App: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ConfigProvider
      children={children}
      locale={getConfigProviderLocale()}
      themeOptions={{ name: 'blue' }}
    />
  );
};

export default App;

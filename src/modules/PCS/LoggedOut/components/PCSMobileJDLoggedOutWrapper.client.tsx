import { PropsWithChildren } from 'react';
import PCSMobileJDLoggedOut from './PCSMobileJDLoggedOut';
import { AppProps } from '@/packages/utils/mockdata.types';

function PCSLoggedOutWrapper(props: PropsWithChildren<AppProps>) {
  const { children } = props;
  return <PCSMobileJDLoggedOut children={children} />;
}

export default PCSLoggedOutWrapper;

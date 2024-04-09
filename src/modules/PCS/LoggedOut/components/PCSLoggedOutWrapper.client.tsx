import { PropsWithChildren } from 'react';
import PCSLoggedOut from './PCSLoggedOut';
import { AppProps } from '@/packages/utils/mockdata.types';

function PCSLoggedOutWrapper(props: PropsWithChildren<AppProps>) {
  const { children } = props;
  return <PCSLoggedOut children={children} />;
}

export default PCSLoggedOutWrapper;

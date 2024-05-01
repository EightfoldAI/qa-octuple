import { PropsWithChildren } from 'react';
import PCSApply from './PCSApply';
import { AppProps } from '@/packages/utils/mockdata.types';

function PCSApplyWrapper(props: PropsWithChildren<AppProps>) {
  const { children } = props;
  return <PCSApply children={children} />;
}

export default PCSApplyWrapper;

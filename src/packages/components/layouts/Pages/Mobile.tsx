import { FC, PropsWithChildren } from 'react';
import { NextPageComponent } from '@/@types/global';
import { MainLayoutPage, LayoutConfigProps, UnknownProps } from './Main';

type MobileLayoutConfigProps = LayoutConfigProps;

const MobileLayoutPage: FC<PropsWithChildren<MobileLayoutConfigProps>> = (
  props
) => {
  const { children, className, ...layoutWithPageProps } = props;
  return (
    <MainLayoutPage {...layoutWithPageProps} className={className}>
      {children}
    </MainLayoutPage>
  );
};

/**
 * @param PageComponent - The page component to wrap with the layout
 * @param layoutProps - The props to pass to the layout
 * @returns - NextPage
 */
export const withMobileLayoutPage = <T extends UnknownProps>(
  PageComponent: NextPageComponent<T>,
  layoutProps?: MobileLayoutConfigProps
) => {
  const MobileLayout: FC<T> = (pageProps) => {
    return (
      <MobileLayoutPage {...(layoutProps ?? {})}>
        <PageComponent {...pageProps} />
      </MobileLayoutPage>
    );
  };
  return MobileLayout;
};

export default MobileLayoutPage;

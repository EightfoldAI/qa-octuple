import '@/styles/bundle.css';

import { FC, PropsWithChildren, Suspense } from 'react';
import App from './app';
import Loading from './loading';
import { SITE_NAME } from '@/configs/env';
import { withMetadata } from '@/packages/utils/metadata';

/**
 * HTML Metadata in App Route
 * @see https://nextjs.org/docs/app/api-reference/functions/generate-metadata#basic-fields
 */
export const metadata = withMetadata({
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
});

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body className="root">
        <Suspense fallback={<Loading />}>
          <App children={children} />
        </Suspense>
      </body>
    </html>
  );
};

export default RootLayout;

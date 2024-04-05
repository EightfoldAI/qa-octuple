import { Suspense } from 'react';

import { type NextPageProps } from '@/@types/global';
import PCSLoggedOutWrapper from '@/modules/PCS/LoggedOut/components/PCSLoggedOutWrapper.client';

function PCSLoggedOutPage(props: NextPageProps) {
  const { searchParams } = props;
  return (
    <PCSLoggedOutWrapper searchParams={searchParams}>
      {/* Exampe calling Server Component inside Client Component with Suspense */}
      <Suspense fallback={<p>Loading...</p>}>
        <p>Server code</p>
      </Suspense>
    </PCSLoggedOutWrapper>
  );
}

export default PCSLoggedOutPage;

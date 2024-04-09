import { Suspense } from 'react';
import Loading from '@/app/loading';
import PCSMobileJDLoggedOutWrapper from '@/modules/PCS/LoggedOut/components/PCSMobileJDLoggedOutWrapper.client';

function PCSMobileJDLoggedOutPage() {
  return (
    <PCSMobileJDLoggedOutWrapper>
      {/* Exampe calling Server Component inside Client Component with Suspense */}
      <Suspense fallback={<Loading />}>
        <p>Server code</p>
      </Suspense>
    </PCSMobileJDLoggedOutWrapper>
  );
}

export default PCSMobileJDLoggedOutPage;

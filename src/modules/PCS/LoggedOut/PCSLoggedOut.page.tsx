import { Suspense } from 'react';
import Loading from '@/app/loading';
import PCSLoggedOutWrapper from '@/modules/PCS/LoggedOut/components/PCSLoggedOutWrapper.client';

function PCSLoggedOutPage() {
  return (
    <PCSLoggedOutWrapper>
      {/* Exampe calling Server Component inside Client Component with Suspense */}
      <Suspense fallback={<Loading />}>
        <p>Server code</p>
      </Suspense>
    </PCSLoggedOutWrapper>
  );
}

export default PCSLoggedOutPage;

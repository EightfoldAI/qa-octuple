import { Suspense } from 'react';
import Loading from '@/app/loading';
import PCSApplyWrapper from '@/modules/PCS/Apply/components/PCSApplyWrapper.client';

function PCSApplyPage() {
  return (
    <PCSApplyWrapper>
      {/* Exampe calling Server Component inside Client Component with Suspense */}
      <Suspense fallback={<Loading />}>
        <p>Server code</p>
      </Suspense>
    </PCSApplyWrapper>
  );
}

export default PCSApplyPage;

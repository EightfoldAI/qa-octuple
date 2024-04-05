import { Suspense } from "react";

import { type NextPageProps } from "@/@types/global";
import PCSMobileJDLoggedOutWrapper from "@/modules/PCS/LoggedOut/components/PCSMobileJDLoggedOutWrapper.client";

function PCSMobileJDLoggedOutPage(props: NextPageProps) {
  const { searchParams } = props;
  return (
    <PCSMobileJDLoggedOutWrapper searchParams={searchParams}>
      {/* Exampe calling Server Component inside Client Component with Suspense */}
      <Suspense fallback={<p>Loading...</p>}>
        <p>Server code</p>
      </Suspense>
    </PCSMobileJDLoggedOutWrapper>
  );
}

export default PCSMobileJDLoggedOutPage;

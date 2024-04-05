import PCSMobileJDLoggedOut from '@/modules/PCS/LoggedOut/PCSMobileJDLoggedOut.page';
import { withMobileLayoutPage } from '@/packages/components/layouts/Pages/Mobile';
import { withMetadata } from '@/packages/utils/metadata';

export const metadata = withMetadata({
  title: 'Eightfold.ai PCS Mobile JD Logged-out Prototype',
});

export default withMobileLayoutPage(PCSMobileJDLoggedOut, {
  className: 'pcs-mobile-jd-logged-out',
});

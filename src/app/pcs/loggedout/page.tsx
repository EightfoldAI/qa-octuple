import PCSLoggedOutPage from '@/modules/PCS/LoggedOut/PCSLoggedOut.page';
import { withMobileLayoutPage } from '@/packages/components/layouts/Pages/Mobile';
import { withMetadata } from '@/packages/utils/metadata';

export const metadata = withMetadata({
  title: 'Eightfold.ai PCS Logged-out Prototype',
});

export default withMobileLayoutPage(PCSLoggedOutPage, {
  className: 'pcs-logged-out',
});

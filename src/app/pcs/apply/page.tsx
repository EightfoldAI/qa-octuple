import PCSApplyPage from '@/modules/PCS/Apply/PCSApply.page';
import { withMobileLayoutPage } from '@/packages/components/layouts/Pages/Mobile';
import { withMetadata } from '@/packages/utils/metadata';

export const metadata = withMetadata({
  title: 'Eightfold.ai PCS Apply Form Prototype',
});

export default withMobileLayoutPage(PCSApplyPage, {
  className: 'pcs-apply',
});

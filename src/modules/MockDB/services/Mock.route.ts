/**
 * @route `/api/mockdata`
 * @dir `app/api/mockdata/route.ts`
 */

import MockController from '@/modules/MockDB/services/Mock.controller';
import withVerifyAppKey from '@/packages/server/middlewares/withVerifyAppKey';

export const GET = MockController.index;
export const POST = withVerifyAppKey(MockController.insert);

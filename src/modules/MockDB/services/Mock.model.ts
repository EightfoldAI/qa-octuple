import Model from '@/packages/server/base/Model';

export interface MockFields<T = string|number> {
  readonly _id?: T;
  setup: string;
  delivery: string;
}

class MData extends Model<MockFields> {
  protected collectionName = 'ef_mock_data';
}

const MockModel = new MData();

export default MockModel;

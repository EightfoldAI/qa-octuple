import MockModel from '@/modules/MockDB/services/Mock.model';

async function MockDataList() {
  const mockdata = await MockModel.all();
  return (
    <div>
      <p>Here&apos;s the data returned directly from the Database.</p>
      <code>{JSON.stringify(mockdata, null, 2)}</code>
    </div>
  );
}

export default MockDataList;

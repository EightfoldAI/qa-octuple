import { notFound } from 'next/navigation';
import MockModel from '@/modules/MockDB/services/Mock.model';

async function MockDataList() {
  const mockdata = await MockModel.all();

  if (!mockdata) {
    notFound();
  }

  return (
    <div>
      <p>Here&apos;s the data returned directly from the Database.</p>
      <code>{JSON.stringify(mockdata, null, 2)}</code>
    </div>
  );
}

export default MockDataList;

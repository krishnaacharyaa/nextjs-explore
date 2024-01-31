'use client';
import { useAppContext } from '@/context/app-context';
import { traverse } from '../utils/home-utils';
import SideBarList from './FirstColumn';
import DocumentList from './SecondColumn';
import TabComponent from './ThirdColumn';
import { $TsFixMe } from '@/types';
import { ToggleReports } from './toggle-reports/toggle-reports';
import { ToggleReportsContextProvider } from './toggle-reports/toggle-reports-context-provider';

export default function Home() {
  const { items, setItems } = useAppContext();

  const compute = (checkboxId: $TsFixMe, status: $TsFixMe) => {
    console.log({ checkboxId, status, items });
    traverse(items, checkboxId, status);
    setItems(items.slice());
  };
  return (
    <div className="App w-full flex">
      <div className="w-3/12">
        <ToggleReportsContextProvider>
          <ToggleReports compute={compute} />
        </ToggleReportsContextProvider>
      </div>
      <div className="w-3/12">
        <DocumentList items={items} />
      </div>
      <div className="w-6/12 ">
        <TabComponent />
      </div>
    </div>
  );
}

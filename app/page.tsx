import Home from '@/components/Home';
import { AppContextProvider } from '@/context/app-context-provider';
import { createTree } from '@/utils/sidebar-utils';
import axios from 'axios';

export default async function Page() {
  const { data } = await axios.get(`http://localhost:3000/api/userData/`);

  const jsonDataFromDB = createTree(data.result);

  return (
    <div className="w-full">
      <AppContextProvider initialData={jsonDataFromDB}>
        <Home />
      </AppContextProvider>
    </div>
  );
}

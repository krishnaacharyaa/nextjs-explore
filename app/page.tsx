import Home from "@/components/Home";
import AppContextProvider from "@/context/appContext";
import { createTree } from "@/utils/sidebar-utils";
import axios from "axios";

export default async function Page() {
  const { data } = await axios.get(`http://localhost:3000/api/userData/`);
  console.log(data.result);
  const jsonDataFromDB = createTree(data.result);
  console.log(jsonDataFromDB);
  return (
    <div className="w-full">
      <AppContextProvider initialData={jsonDataFromDB}>
        <Home />
      </AppContextProvider>
    </div>
  );
}

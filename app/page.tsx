import Home from "@/components/Home";
import { createTree } from "@/utils/sidebar-utils";
import axios from "axios";
import dynamic from "next/dynamic";
const DynamicContextProvider = dynamic(
  () => import("./../context/appContext"),
  {
    ssr: false,
  }
);
export default async function Page() {
  const { data } = await axios.get(`http://localhost:3000/api/userData/`);

  const jsonDataFromDB = createTree(data.result);

  return (
    <div className="w-full">
      <DynamicContextProvider initialData={jsonDataFromDB}>
        <Home />
      </DynamicContextProvider>
    </div>
  );
}

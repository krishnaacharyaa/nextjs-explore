import { useAppContext } from "@/context/appContext";
import { useEffect, useState } from "react";

export default function SummaryDocument() {
  const { selectedDocument } = useAppContext();
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/api/summary/${selectedDocument?.DocumentId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data.data);
        setLoading(false);
      });
  }, [selectedDocument]);

  return (
    <main>
      {selectedDocument != null ? (
        data === null || data === undefined ? (
          <div>Loading please wait </div>
        ) : (
          data
        )
      ) : (
        <div>Please select a document</div>
      )}
    </main>
  );
}

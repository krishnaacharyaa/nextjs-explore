import { getSummaryByDocumentId } from "@/actions/sidebar-actions";
import { useAppContext } from "@/context/appContext";
import { useEffect, useState } from "react";

export default function SummaryDocument() {
	const { selectedDocument } = useAppContext();
	const [data, setData] = useState(null);

	useEffect(() => {
		// fetch(`http://localhost:3000/api/summary/${selectedDocument?.DocumentId}`)
		//   .then((res) => res.json())
		//   .then((data) => {
		//     setData(data.data);
		if (selectedDocument)
			// Trying server side call of the API
			getSummaryByDocumentId.bind(null, selectedDocument.DocumentId);
	}, [selectedDocument]);
	return (
		<main>
			<div className="p-2 ">
				Client Side API fetch based on selected Stock: {}{" "}
			</div>
			{data}
		</main>
	);
}

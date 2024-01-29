import { useAppContext } from "@/context/appContext";
import { useEffect, useState } from "react";

type GlossaryType = {
	GlossaryId: number;
	Term: string;
	Description: string;
};

export default function GlossaryDocument() {
	const { stockLevelSelected } = useAppContext();
	const [data, setData] = useState(null);

	useEffect(() => {
		fetch(`http://localhost:3000/api/glossary/${stockLevelSelected.stockId}`)
			.then((res) => res.json())
			.then((fetchedData) => {
				console.log("Fet", fetchedData);
				setData(fetchedData.data);
			});
	}, [stockLevelSelected]);
	return (
		<div>
			Client Side API fetch based on selected Stock:{" "}
			{stockLevelSelected.stockName}
			<h2>Glossary List</h2>
			{data ? (
				<ul>
					{data.map((item) => (
						<li key={item.Term}>
							<strong>
								{item.GlossaryId}|{item.Term}:
							</strong>{" "}
							{item.Description}
						</li>
					))}
				</ul>
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
}

import { useAppContext } from "@/context/appContext";
import { findStockNameById } from "../utils/home-utils";

export default function DocumentList({ items }) {
	const {
		selectedItems,
		selectedDocument,
		setSelectedDocument,
		stockLevelSelected,
	} = useAppContext();
	return (
		<div className="pt-8  ">
			<div className="p-2 ">
				Selected Documents under selected state: <br></br>
				<div className="text-2xl">{stockLevelSelected.stockName}</div>
			</div>
			<ul className="list-none text-left pl-4">
				{selectedItems.map(
					(item, index) =>
						findStockNameById(item.uniqueId, items) ===
							stockLevelSelected.stockName && (
							<li
								key={index}
								onClick={() => {
									setSelectedDocument(item);
									console.log(
										"Selected Document is" + selectedDocument?.DocumentId
									);
								}}
								className={`${
									selectedDocument &&
									item.uniqueId === selectedDocument.uniqueId
										? "bg-sky-200 rounded-xl hover:bg-sky-200 "
										: ""
								} my-2 cursor-pointer p-2 hover:bg-sky-100 hover:rounded-xl`}
							>
								<div className="text-lg">{item.Name}</div>
								<div className="text-sm">{item.DocumentSourceName}</div>
							</li>
						)
				)}
			</ul>
		</div>
	);
}

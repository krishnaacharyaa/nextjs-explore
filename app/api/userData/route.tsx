import { NextResponse } from "next/server";

export async function GET() {
  try {
    const data = [
      {
        Id: 1,
        EcoSystemId: 1,
        EcoSystemName: "Banking",
        StockId: 3,
        StockName: "HDFC Bank Limited",
        DocumentTypeId: 1,
        DocumentTypeName: "Annual Reports",
        DocumentId: 8,
        Name: "Annual Report 2020-2021",
        DocumentLocation:
          "D:/Python Projects/LLM/DocumentChat/Documents/RELIANCE.NSE/Annual Reports/AR_2020-21.pdf",
        DocumentDateTime: "2024-01-27T09:39:44.000Z",
        DocumentSourceName: "BSE",
        DocumentSourceURL:
          "https://www.bseindia.com/bseplus/AnnualReport/500325/68509500325.pdf",
      },
      {
        Id: 2,
        EcoSystemId: 2,
        EcoSystemName: "Large Cap",
        StockId: 1,
        StockName: "Reliance Industries Limited",
        DocumentTypeId: 1,
        DocumentTypeName: "Annual Reports",
        DocumentId: 1,
        Name: "Annual Report 2020-2021",
        DocumentLocation:
          "D:/Python Projects/LLM/DocumentChat/Documents/RELIANCE.NSE/Annual Reports/AR_2020-21.pdf",
        DocumentDateTime: "2024-01-27T09:39:43.000Z",
        DocumentSourceName: "BSE",
        DocumentSourceURL:
          "https://www.bseindia.com/bseplus/AnnualReport/500325/68509500325.pdf",
      },
      {
        Id: 2,
        EcoSystemId: 2,
        EcoSystemName: "Large Cap",
        StockId: 1,
        StockName: "Reliance Industries Limited",
        DocumentTypeId: 1,
        DocumentTypeName: "Annual Reports",
        DocumentId: 2,
        Name: "Annual Report 2021-2022",
        DocumentLocation:
          "D:/Python Projects/LLM/DocumentChat/Documents/RELIANCE.NSE/Annual Reports/AR_2021-22.pdf",
        DocumentDateTime: "2024-01-27T09:39:43.000Z",
        DocumentSourceName: "BSE",
        DocumentSourceURL:
          "https://www.bseindia.com/bseplus/AnnualReport/500325/74185500325.pdf",
      },
      {
        Id: 2,
        EcoSystemId: 2,
        EcoSystemName: "Large Cap",
        StockId: 1,
        StockName: "Reliance Industries Limited",
        DocumentTypeId: 1,
        DocumentTypeName: "Annual Reports",
        DocumentId: 3,
        Name: "Annual Report 2022-2023",
        DocumentLocation:
          "D:/Python Projects/LLM/DocumentChat/Documents/RELIANCE.NSE/Annual Reports/AR_2022-23.pdf",
        DocumentDateTime: "2024-01-27T09:39:43.000Z",
        DocumentSourceName: "BSE",
        DocumentSourceURL:
          "https://www.bseindia.com/xml-data/corpfiling/AttachHis//b55b5dfc-a3bf-4f24-9d7f-ca09774a1dd9.pdf",
      },
      {
        Id: 2,
        EcoSystemId: 2,
        EcoSystemName: "Large Cap",
        StockId: 1,
        StockName: "Reliance Industries Limited",
        DocumentTypeId: 4,
        DocumentTypeName: "Call Transcripts",
        DocumentId: 7,
        Name: "Call Transcript 2023 09",
        DocumentLocation:
          "D:/Python Projects/LLM/DocumentChat/Documents/RELIANCE.NSE/Call Transcripts/Call Transcript 2023 09.pdf",
        DocumentDateTime: "2024-01-27T09:39:44.000Z",
        DocumentSourceName: "BSE",
        DocumentSourceURL:
          "https://www.bseindia.com/xml-data/corpfiling/AttachHis/ef9baa21-923a-48ad-9fb7-2157af59ae16.pdf",
      },
      {
        Id: 3,
        EcoSystemId: 2,
        EcoSystemName: "Large Cap",
        StockId: 2,
        StockName: "Tata Consultancy Services Limited",
        DocumentTypeId: 1,
        DocumentTypeName: "Annual Reports",
        DocumentId: 4,
        Name: "Annual Report 2020-2021",
        DocumentLocation:
          "D:/Python Projects/LLM/DocumentChat/Documents/TCS.NSE/Annual Reports/AR_2020-21.pdf",
        DocumentDateTime: "2024-01-27T09:39:43.000Z",
        DocumentSourceName: "BSE",
        DocumentSourceURL:
          "https://www.bseindia.com/bseplus/AnnualReport/532540/68468532540_25_05_21.pdf",
      },
      {
        Id: 3,
        EcoSystemId: 2,
        EcoSystemName: "Large Cap",
        StockId: 2,
        StockName: "Tata Consultancy Services Limited",
        DocumentTypeId: 1,
        DocumentTypeName: "Annual Reports",
        DocumentId: 5,
        Name: "Annual Report 2021-2022",
        DocumentLocation:
          "D:/Python Projects/LLM/DocumentChat/Documents/TCS.NSE/Annual Reports/AR_2021-22.pdf",
        DocumentDateTime: "2024-01-27T09:39:44.000Z",
        DocumentSourceName: "BSE",
        DocumentSourceURL:
          "https://www.bseindia.com/bseplus/AnnualReport/532540/72996532540_17_06_22.pdf",
      },
      {
        Id: 3,
        EcoSystemId: 2,
        EcoSystemName: "Large Cap",
        StockId: 2,
        StockName: "Tata Consultancy Services Limited",
        DocumentTypeId: 1,
        DocumentTypeName: "Annual Reports",
        DocumentId: 6,
        Name: "Annual Report 2022-2023",
        DocumentLocation:
          "D:/Python Projects/LLM/DocumentChat/Documents/TCS.NSE/Annual Reports/AR_2022-23.pdf",
        DocumentDateTime: "2024-01-27T09:39:44.000Z",
        DocumentSourceName: "BSE",
        DocumentSourceURL:
          "https://www.bseindia.com/xml-data/corpfiling/AttachHis//3837c1b7-9308-436d-9636-1d6856edf74e.pdf",
      },
      {
        Id: 4,
        EcoSystemId: 4,
        EcoSystemName: "New Ecosystem",
      },
    ];

    return NextResponse.json({ message: "OK", result: data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

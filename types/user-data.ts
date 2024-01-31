export interface UserData {
  Id: number;
  EcoSystemId: number;
  EcoSystemName: string;
  StockId: number;
  StockName: string;
  DocumentTypeId: number;
  DocumentTypeName: string;
  DocumentId: number;
  Name: string;
  DocumentLocation: string;
  DocumentDateTime: string;
  DocumentSourceName: string;
  DocumentSourceURL: string;
}

export type UserDataCollection = Array<UserData>;

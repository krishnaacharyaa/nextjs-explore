import { z } from "zod";
import {
  DataSchema,
  DocumentItemSchema,
  DocumentTypeItemSchema,
  EcosystemItemSchema,
  StockItemSchema,
  selectedDocumentSchema,
} from "./zod-schemas";

export type DocumentItemType = z.infer<typeof DocumentItemSchema>;
export type DocumentTypeItemType = z.infer<typeof DocumentTypeItemSchema>;
export type StockItemType = z.infer<typeof StockItemSchema>;
export type EcosystemItemType = z.infer<typeof EcosystemItemSchema>;
export type DataItemType = z.infer<typeof DataSchema>;
export type SelectedDocumentItemType = z.infer<typeof selectedDocumentSchema>;

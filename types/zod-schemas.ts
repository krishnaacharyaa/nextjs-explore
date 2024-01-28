import { z } from "zod";

// Zod schema for document item
export const DocumentItemSchema = z.object({
  uniqueId: z.number(),
  DocumentId: z.number(),
  name: z.string(),
  level: z.string(),
  Name: z.string(),
  DocumentLocation: z.string(),
  DocumentDateTime: z.string(),
  DocumentSourceName: z.string(),
  DocumentSourceURL: z.string(),
});

// Zod schema for document type item
export const DocumentTypeItemSchema = z.object({
  uniqueId: z.number(),
  DocumentTypeId: z.number(),
  DocumentTypeName: z.string(),
  name: z.string(),
  level: z.string(),
  items: z.array(DocumentItemSchema),
});

// Zod schema for stock item
export const StockItemSchema = z.object({
  uniqueId: z.number(),
  StockId: z.number(),
  StockName: z.string(),
  name: z.string(),
  level: z.string(),
  items: z.array(DocumentTypeItemSchema),
});

// Zod schema for ecosystem item
export const EcosystemItemSchema = z.object({
  uniqueId: z.number(),
  EcoSystemId: z.number(),
  EcoSystemName: z.string(),
  name: z.string(),
  level: z.string(),
  items: z.array(StockItemSchema),
});

// Zod schema for the entire data
export const DataSchema = z.array(EcosystemItemSchema);

export const selectedDocumentSchema = z.object({
  documentId: z.number(),
  documentName: z.string(),
  documentDateTime: z.string(),
  documentSourceName: z.string(),
  documentSourceurl: z.string(),
});

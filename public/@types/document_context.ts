import { createContext } from "react";
import { Document as DocumentType, DocumentContextType, DocumentFeaturesContextType } from './document'

const DocumentContext = createContext<DocumentContextType>(null);

const DocumentFeaturesContext = createContext<DocumentFeaturesContextType>(null);

export { DocumentContext, DocumentFeaturesContext };
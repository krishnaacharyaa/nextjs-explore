import { UseExpandedReturnProps } from '@/hooks/use-expanded';
import React from 'react';

export interface ToggleReportsContextState extends UseExpandedReturnProps {}

const defaultState: ToggleReportsContextState = {
  expanded: [],
  toggle: () => {},
  isExpanded: () => false,
};

export const ToggleReportsContext =
  React.createContext<ToggleReportsContextState>(defaultState);

export function useToggleReportsContext() {
  const context = React.useContext(ToggleReportsContext);
  if (context == undefined) {
    throw new Error(
      'useAppuseToggleReportsContextContext must be used within ToggleReportsContextProvider'
    );
  }
  return context;
}

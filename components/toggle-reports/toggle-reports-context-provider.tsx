import { useExpanded } from '@/hooks/use-expanded';
import { ToggleReportsContext } from './toggle-reports-context';

interface Props {
  children: React.ReactNode;
  // initialData: Array<TreeNode>;
}

export function ToggleReportsContextProvider({ children }: Props) {
  const value = useExpanded();

  return (
    <ToggleReportsContext.Provider value={{ ...value }}>
      {children}
    </ToggleReportsContext.Provider>
  );
}

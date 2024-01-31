import { TreeNodeLevel } from '@/utils/types';
import React, { useEffect } from 'react';

export interface UseExpandedReturnProps {
  expanded: Array<string>;
  toggle: (uid: string, level: TreeNodeLevel) => void;
  isExpanded: (uid: string) => boolean;
}

//INFO: can also useHOC pattern
export function useExpanded(): UseExpandedReturnProps {
  const [expanded, setExpanded] = React.useState<Array<string>>([]);

  const toggle = (uid: string, level: TreeNodeLevel) => {
    if (expanded.includes(uid)) {
      setExpanded((p) => p.filter((e) => e !== uid));
    } else {
      setExpanded((p) => [...p, uid]);
    }
  };

  const isExpanded = (uid: string) => expanded.includes(uid);

  useEffect(() => {
    const item = localStorage.getItem('use-expanded');
    const expanded = item ? JSON.parse(item) : [];
    setExpanded(expanded);
  }, []);

  //TODO: change to batch updates
  useEffect(() => {
    if (expanded.length < 1) return;
    localStorage.setItem('use-expanded', JSON.stringify(expanded));
  }, [expanded]);

  return { expanded, toggle, isExpanded };
}

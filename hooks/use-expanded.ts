import React from 'react';

export interface UseExpandedReturnProps {
  expanded: Array<string>;
  toggle: (uid: string) => void;
  isExpanded: (uid: string) => boolean;
}

//INFO: can also useHOC pattern
export function useExpanded(): UseExpandedReturnProps {
  const [expanded, setState] = React.useState<Array<string>>([]);

  const toggle = (uid: string) => {
    if (expanded.includes(uid)) {
      setState((p) => p.filter((e) => e !== uid));
      return;
    }
    setState((p) => [...p, uid]);
  };

  const isExpanded = (uid: string) => expanded.includes(uid);

  return { expanded, toggle, isExpanded };
}

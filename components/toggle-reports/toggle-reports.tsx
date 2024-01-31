import Image from 'next/image';
import { useAppContext } from '@/context/app-context';
import { TreeNode } from '@/utils/types';
import ArrowDown from '@/svg/arrow-down.svg';
import ArrowUp from '@/svg/arrow-up.svg';
import { $TsFixMe } from '@/types';
import { useToggleReportsContext } from './toggle-reports-context';

interface ToggleReportsProps {
  // items: Array<TreeNode>;
  compute?: (checkboxId: $TsFixMe, status: $TsFixMe) => void;
}

//INFO: we handled gloabal-state and prop-drilling but not child re-rendering
export function ToggleReports({}: ToggleReportsProps) {
  const { items } = useAppContext();
  const { isExpanded, expanded } = useToggleReportsContext();
  console.log({ expanded });
  return (
    <>
      <ul className="list-none text-left pl-3">
        {items.map((item) => {
          const hasChildrens = Array.isArray(item.items);
          const showChildrens = isExpanded(item.uniqueId);
          return (
            <ReportListItem key={item.uniqueId} item={item}>
              {hasChildrens && showChildrens && (
                <ReportList parentUid={item.uniqueId} items={item.items} />
              )}
            </ReportListItem>
          );
        })}
      </ul>
    </>
  );
}

function ReportList({
  parentUid,
  items,
}: {
  parentUid: string;
  items: Array<TreeNode>;
}) {
  const { isExpanded } = useToggleReportsContext();
  return (
    <>
      {items.map((item) => {
        const hasChildrens = Array.isArray(item.items);
        return (
          <ReportListItem key={item.uniqueId} item={item}>
            {hasChildrens && isExpanded(item.uniqueId) && (
              <ReportList parentUid={item.uniqueId} items={item.items} />
            )}
          </ReportListItem>
        );
      })}
    </>
  );
}

//TODO: change to type `li`
function ReportListItem({
  item,
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLElement> & {
  item: TreeNode;
}) {
  const { isExpanded, toggle } = useToggleReportsContext();
  //TODO: change name
  const isPanda = isExpanded(item.uniqueId);
  return (
    <div className={`my-2 ${className}`} {...props}>
      <div className={`text-black  p-1 rounded-md flex hover:bg-sky-100`}>
        <div className="flex w-full">
          <label htmlFor={item.name} className="flex-1">
            {item.name}
            {item.level !== 'Document' && (
              <button
                type="button"
                className="ml-2"
                onClick={() => {
                  toggle(item.uniqueId);
                }}
                aria-label="Toggle Item"
              >
                <Image
                  src={!isPanda ? ArrowDown : ArrowUp}
                  alt={!isPanda ? '[-]' : '[+]'}
                />
              </button>
            )}
          </label>
        </div>
      </div>
      {children}
    </div>
  );
}

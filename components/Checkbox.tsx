import { status } from "@/constants/app-constants";
import { useLayoutEffect, useRef } from "react";

export default function Checkbox(props) {
  const { indeterminate, checked, id, compute, ...rest } = props;
  const inputRef = useRef<HTMLInputElement | null>(null);

  useLayoutEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
      inputRef.current.checked = checked;
    }
  }, [indeterminate, checked]);

  return (
    <input
      {...rest}
      ref={inputRef}
      type="checkbox"
      className="mr-4 form-checkbox bg-black"
      onChange={() => {
        const newStatus = inputRef.current?.checked
          ? status.checked
          : status.unchecked;
        compute(id, newStatus);
      }}
    />
  );
}

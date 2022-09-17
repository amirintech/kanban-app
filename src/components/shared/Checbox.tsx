import { ChangeEvent } from "react";
import iconCheck from "../../assets/icons/icon-check.svg";

interface CheckboxProps {
  isChecked: boolean;
  onCheck: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function Checbox({ isChecked, onCheck }: CheckboxProps) {
  return (
    <label className="flex cursor-pointer items-center gap-3 rounded bg-gray-200 p-3 duration-150 hover:bg-purple-500/25 dark:bg-gray-800">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => {
          onCheck(e);
          console.log(e.currentTarget.checked);
        }}
        className="peer sr-only appearance-none"
      />

      <span className="inline-flex h-4 w-4 items-center justify-center rounded-sm border border-gray-500/25 bg-white duration-150 peer-checked:bg-purple-500 dark:bg-gray-700">
        {isChecked && <img src={iconCheck} />}
      </span>

      <span className="text-xs font-bold tracking-wide text-gray-900 duration-150 peer-checked:text-gray-900/50 peer-checked:line-through dark:text-white dark:peer-checked:text-white/50">
        This is a checkbox
      </span>
    </label>
  );
}

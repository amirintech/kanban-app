import { useState } from "react";
import iconChevronDown from "../../assets/icons/icon-chevron-down.svg";

interface DropdownProps {
  label: string;
  items: string[];
  selectedItem?: string;
  onSelect: (selectedItem: string) => void;
}

export default function Dropdown({
  label,
  items,
  selectedItem = items[0],
  onSelect,
}: DropdownProps) {
  const [isClosed, setIsClosed] = useState(true);

  return (
    <div className="flex flex-col text-sm tracking-wide">
      <span className="mb-1 text-xs font-bold text-gray-500 dark:text-white">
        {label}
      </span>

      <div onClick={() => setIsClosed(!isClosed)} className={`relative`}>
        <div
          className={`flex cursor-pointer items-center justify-between rounded border border-gray-500/25 py-3 px-4 duration-150 ${
            !isClosed ? "border-purple-500" : ""
          }`}
        >
          <span className="leading-none text-gray-900 dark:text-white">
            {selectedItem}
          </span>

          <img
            src={iconChevronDown}
            className={`duration-150 ${!isClosed ? "rotate-180" : ""}`}
          />
        </div>

        <ul
          className={`absolute mt-1.5 flex w-full flex-col gap-2.5 rounded-lg bg-white px-4 py-5 dark:bg-gray-800 ${
            isClosed ? "hidden" : ""
          }`}
        >
          {items.map((item) => (
            <li
              className="cursor-pointer text-gray-500"
              onClick={() => {
                onSelect(item);
                setIsClosed(true);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

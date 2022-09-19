import Board from "../interfaces/board";
import IconPlus from "../assets/icons/icon-plus.svg";

interface BoardsNavigatorProps {
  boards: Board[];
  selectedBoard: string;
  onSelect: (selectedBoard: string) => void;
}

export default function BoardsNavigator({
  boards,
  selectedBoard,
  onSelect,
}: BoardsNavigatorProps) {
  const boardsNames = boards.map((board) => board.name);
  return (
    <div className="rounded-lg bg-white pt-3 text-base font-bold capitalize tracking-wide text-gray-500 dark:bg-gray-700">
      <span className="mb-4 inline-block px-5 text-xs tracking-[4px]">
        ALL BOARDS ({boards.length})
      </span>

      <ul>
        {boardsNames.map((name) => (
          <li
            onClick={() => onSelect(name)}
            className={`relative flex cursor-pointer before:absolute before:left-0 before:top-0 before:z-10 before:block before:w-0 before:rounded-r-full before:duration-300 hover:text-purple-500 hover:before:!h-full hover:before:!w-full  hover:before:bg-white   ${
              selectedBoard === name
                ? "!text-white  before:h-full before:!w-full before:!bg-purple-500   "
                : ""
            }`}
          >
            <span className="z-20 flex items-center gap-2 py-3 px-5 duration-150">
              {getBoardIcon()}
              {name}
            </span>
          </li>
        ))}

        <li className="">
          <span className="flex items-center gap-[10px] px-5 py-3 text-purple-500">
            {getPlusIcon()} Create new board
          </span>
        </li>
      </ul>
    </div>
  );
}

function getBoardIcon() {
  return (
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="currentColor"
        d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z"
        // fill="#828FA3"
      />
    </svg>
  );
}

function getPlusIcon() {
  return (
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="currentColor"
        // fill="#FFF"
        d="M7.368 12V7.344H12V4.632H7.368V0H4.656v4.632H0v2.712h4.656V12z"
      />
    </svg>
  );
}

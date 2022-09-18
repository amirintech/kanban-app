interface ToggleProps {
  isToggled: boolean;
  onToggle: (isToggled: boolean) => void;
}

export default function Toggle({ isToggled, onToggle }: ToggleProps) {
  return (
    <label>
      <input
        type="checkbox"
        onChange={(e) => onToggle(e.target.checked)}
        checked={isToggled}
        className="peer sr-only appearance-none"
      />

      <span
        className={`relative block h-5 w-10 cursor-pointer rounded-full bg-purple-500 p-[3px] duration-150 before:absolute before:top-2/4 before:block before:h-[14px] before:w-[14px] before:-translate-y-2/4 before:rounded-full before:bg-white before:duration-150 hover:bg-purple-300 peer-checked:before:translate-x-[20px]`}
      ></span>
    </label>
  );
}

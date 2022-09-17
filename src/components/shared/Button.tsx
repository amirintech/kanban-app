type Theme = "primary" | "secondary" | "danger";

interface ButtonProps {
  children: JSX.Element | string;
  theme?: Theme;
  fullWidth?: boolean;
  large?: boolean;
}

export default function Button({
  children,
  theme = "primary",
  fullWidth = false,
  large = false,
}: ButtonProps) {
  return (
    <button className={getStyles(theme, large, fullWidth)}>{children}</button>
  );
}

function getStyles(theme: Theme, large: boolean, fullWidth: boolean) {
  let classes =
    "rounded-full min-h-[40px] py-3 px-6 text-sm font-bold leading-none tracking-wide text-white duration-100 active:scale-95";

  if (theme === "primary")
    classes = `${classes} bg-purple-500 hover:bg-purple-300`;
  else if (theme === "secondary")
    classes = `${classes} text-purple-500 bg-purple-500/10 hover:bg-purple-500/25 dark:bg-white dark:hover:bg-white`;
  else if (theme === "danger")
    classes = `${classes} bg-red-500 hover:bg-red-300`;

  if (fullWidth) classes = `${classes} w-full`;
  if (large) classes = `${classes} min-h-[48px] text-base`;

  return classes;
}

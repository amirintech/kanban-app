interface SidebarProps {
  isOpned: boolean;
  children: JSX.Element;
}

export default function Sidebar({ isOpned, children }: SidebarProps) {
  return (
    <>
      {isOpned && (
        <div className="absolute top-0 left-0 h-screen border-r border-r-gray-300 bg-white duration-150 dark:border-gray-600 dark:bg-gray-700 md:w-[260px] lg:w-[300px]">
          {children}
        </div>
      )}
    </>
  );
}

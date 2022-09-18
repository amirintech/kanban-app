import { useState } from "react";

interface ModalProps {
  show?: boolean;
  children: JSX.Element;
}

export default function Modal({ show = false, children }: ModalProps) {
  const [isShown, setIsShown] = useState(show);

  return (
    <>
      {isShown && (
        <div
          onClick={() => setIsShown(false)}
          className="fixed top-0 left-0 h-screen w-screen bg-black/50"
        >
          <div className="relative top-2/4 left-2/4 max-w-[345px] -translate-x-2/4 -translate-y-2/4 rounded-md bg-white p-5 dark:bg-gray-700 md:max-w-[480px]">
            {children}
          </div>
        </div>
      )}
    </>
  );
}

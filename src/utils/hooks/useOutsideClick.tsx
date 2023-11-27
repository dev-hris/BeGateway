import { useEffect } from "react";
import { useRef } from "react";

type useOutSideClickType = {
  callback: (() => void) | undefined;
};

export const useOutsideClick = <T extends HTMLDivElement> ({ callback }: useOutSideClickType) => {
  const ref: React.MutableRefObject<T | null> = useRef(null);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if(!callback) {
        return
      }
      if (!ref?.current?.contains(event.target as Node)) {
        callback();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [callback, ref]);
  return ref;
};

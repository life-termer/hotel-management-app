import { useEffect, useRef } from "react";

export function useClickOutside(handler, listenCapturing = true) {

  const ref = useRef();

  //Detecting a click outside modal window
  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) handler();
      }
      document.addEventListener("click", handleClick, listenCapturing);
      return () => document.removeEventListener("click", handleClick, listenCapturing);
    },
    [handler, listenCapturing]
  );

  return ref;
}
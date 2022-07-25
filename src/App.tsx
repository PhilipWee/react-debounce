import React, { useState } from "react";
import logo from "./logo.svg";

function useDebounce<T extends (...args: any[]) => void>(
  func: T,
  delay = 1000
) {
  const [timer, setTimer] = useState<ReturnType<typeof setTimeout>>();

  const debouncedFunction = ((...args: any[]) => {
    clearTimeout(timer);
    const newTimer = setTimeout(() => {
      func(...args);
    }, delay);
    setTimer(newTimer);
  }) as T;

  return debouncedFunction;
}

function App() {
  const [debouncedOutput, setDebouncedOutput] = useState("");
  const [immediateOutput, setImmediateOutput] = useState("");

  const onChange = useDebounce(async (e) => {
    setDebouncedOutput(e.target.value);
  });

  return (
    <div>
      <div>Debounced Output: {debouncedOutput}</div>
      <div>Immediate Output: {immediateOutput}</div>
      <input onChange={onChange} />
    </div>
  );
}

export default App;

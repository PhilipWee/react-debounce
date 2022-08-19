import React, { useState } from "react";
import ClarityRackServerSolid from "./assets/clarity-rack-server-solid";
import Arrow2 from "./assets/arrow2";
import Arrow3 from "./assets/arrow3";
import "./App.css";
import { useDebounce } from "./helpers/useDebounce";

export default function App() {
  const [debouncedOutput, setDebouncedOutput] = useState("");
  const [immediateOutput, setImmediateOutput] = useState("");
  const [debouncedCalls, setDebouncedCalls] = useState(0);
  const [immediateCalls, setImmediateCalls] = useState(0);

  const _onChangeDebounced = async (text: string) => {
    setDebouncedOutput(text);
    setDebouncedCalls(debouncedCalls + 1);
  };

  const onChangeImmediate = async (text: string) => {
    setImmediateOutput(text);
    setImmediateCalls(immediateCalls + 1);
  };

  const onChangeDebounced = useDebounce(_onChangeDebounced);

  return (
    <Main
      debouncedNetworkCalls={debouncedCalls}
      immediateNetworkCalls={immediateCalls}
      debouncedText={debouncedOutput}
      immediateText={immediateOutput}
      onInputChange={(newInput) => {
        onChangeDebounced(newInput);
        onChangeImmediate(newInput);
      }}
    />
  );
}

interface MainProps {
  debouncedText: string;
  debouncedNetworkCalls: number;
  immediateText: string;
  immediateNetworkCalls: number;
  onInputChange: (newInput: string) => void;
}

function Main(props: MainProps) {
  return (
    <div className="component-main-component-main">
      <div className="component-main-frame15081">
        <div className="component-main-debounced-function">
          <p className="component-main-debounced-function1">
            Debounced Function
          </p>
          <ClarityRackServerSolid />
          <p className="component-main-output-text">
            Text: {props.debouncedText}
          </p>
          <p className="component-main-network-calls">
            Network Calls: {props.debouncedNetworkCalls}
          </p>
        </div>
        <div className="component-main-debounced-execution-arrows">
          <p className="component-main-exec-func">Exec Func</p>
          <Arrow2 />
        </div>
        <div className="component-main-frame15077">
          <p className="component-main-debounce-demonstrati">
            Debounce Demonstration
          </p>
          <div className="component-main-frame15078">
            <input
              onChange={(e) => props.onInputChange(e.target.value)}
              className="component-main-insert-text-here"
              placeholder="Insert Text Here..."
              type="text"
            />
          </div>
        </div>
        <div className="component-main-normal-execution-arrows">
          <p className="component-main-exec-func1">Exec Func</p>
          <Arrow3 />
        </div>
        <div className="debounced-function-normal-function">
          <p className="debounced-function-debounced-function">
            Normal Function
          </p>
          <ClarityRackServerSolid />
          <p className="debounced-function-output-text">
            Text: {props.immediateText}
          </p>
          <p className="debounced-function-network-calls">
            Network Calls: {props.immediateNetworkCalls}
          </p>
        </div>
      </div>
      <p className="component-main-made-with-using-fi">
        <span className="component-main-made-with-text0">Made with</span>
        <span className="component-main-using-text1">&#160;❤ using&#160;</span>
        <a
          href="https://www.firejet.io"
          className="component-main-fire-jet-text2"
        >
          FireJet
        </a>
      </p>
    </div>
  );
}

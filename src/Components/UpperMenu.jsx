import React from "react";
import { useTestMode } from "../Context/TestModeContext";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const UpperMenu = ({ countDown }) => {
  const { setTestTime } = useTestMode();

  const updateTime = (e) => {
    setTestTime(e.target.id);
  };

  return (
    <div>
      <div className="upper-menu">
        <div className="counter">
          CountDown: <span>{countDown}</span>
        </div>

        <div className="modes">
          SetTimer :
          <Tippy content="15 sec">
            <div className="time-modes" onClick={updateTime} id={15}>
              15s
            </div>
          </Tippy>
          <Tippy content="30 sec">
            <div className="time-modes" onClick={updateTime} id={30}>
              30s
            </div>
          </Tippy>
          <Tippy content="60 sec">
            <div className="time-modes" onClick={updateTime} id={60}>
              60s
            </div>
          </Tippy>
        </div>
      </div>
    </div>
  );
};

export default UpperMenu;

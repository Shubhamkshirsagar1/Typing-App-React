import React from "react";
import Graphs from "./Graphs";

const Stats = ({
  wpm,
  accuracy,
  correctChars,
  incorrectChars,
  missedChars,
  extraChars,
  graphData,
  resetTest,
}) => {
  var timeSet = new Set();

  const newGraph = graphData.filter((i) => {
    if (!timeSet.has(i[0])) {
      timeSet.add(i[0]);
      return i;
    }
  });
  return (
    <div className="stats-box">
      <div className="left">
        <div className="title">WPM</div>
        <div className="subtitle">{wpm}</div>
        <div className="title">ACCURACY</div>
        <div className="subtitle">{accuracy}</div>
        <div className="title">Characters</div>
        <div className="subtitle">
          {correctChars}/{incorrectChars}/{missedChars}/{extraChars}
        </div>
        <div onClick={resetTest} className="restart">Restart</div>
      </div>
      <div className="right">
        <Graphs graphData={newGraph} />
        {">"}
      </div>
    </div>
  );
};

export default Stats;

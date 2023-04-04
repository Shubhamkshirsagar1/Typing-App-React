import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { auth, db } from "../firebaseConfig";
import Graphs from "./Graphs";
import Tippy from "@tippyjs/react";

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

  const pushToDB = () => {
    const resultRef = db.collection("Results");
    const { uid } = auth.currentUser;
    if (isNaN(accuracy)) {
      toast.error("Invalid Test!!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }
    
    resultRef
      .add({
        wpm: wpm,
        accuracy: accuracy,
        characters: `${correctChars}/${incorrectChars}/${missedChars}/${extraChars}`,
        timeStamp: new Date(),
        userId: uid,
      })
      .then((response) => {
        toast.success("Data pushed to database", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      })
      .catch((error) => {
        toast.error("Not able to add data!!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
  };

  useEffect(() => {
    if (auth.currentUser) {
      pushToDB();
    } else {
      toast.warning("Login to save result!!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }, []);

  return (
    <div className="stats-box">
      <div className="left">
        <Tippy content="Words per Minutes">
          <div className="title">WPM</div>
        </Tippy>
        <div className="subtitle">{wpm}</div>

        
        <div className="title">ACCURACY</div>
        <div className="subtitle">{accuracy}</div>


        <div className="title">Characters</div>
        <Tippy content="correct / incorrect / extra / missed">
          <div className="subtitle">
            {correctChars}/{incorrectChars}/{missedChars}/{extraChars}
          </div>
        </Tippy>

        <div onClick={resetTest} className="restart">
          Restart
        </div>
      </div>
      <div className="right">
        <Graphs graphData={newGraph} />
        {">"}
      </div>
    </div>
  );
};

export default Stats;

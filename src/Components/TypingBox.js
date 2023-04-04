import React, { createRef, useEffect, useRef, useState } from "react";
import { useTestMode } from "../Context/TestModeContext";
import UpperMenu from "./UpperMenu";
import Stats from "./Stats";

// Another Way of Importing a Module.
var randomWords = require("random-words");

const TypingBox = () => {
  const inputRef = useRef(null);

  const { testTime } = useTestMode();

  const [currWordIndex, setWordIndex] = useState(0);
  const [currCharIndex, setCharIndex] = useState(0);

  const [countDown, setCountDown] = useState(testTime);
  const [testStart, setTestStart] = useState(false);
  const [testEnd, setTestEnd] = useState(false);

  const [intervalId, setIntervalId] = useState(null);

  const [correctChars, setCorrectChars] = useState(0);
  const [correctWords, setCorrectWords] = useState(0);
  const [incorrectChars, setIncorrectChars] = useState(0);
  const [missedChars, setMissedChars] = useState(0);
  const [extraChars, setExtraChars] = useState(0);

  const [graphData, setGraphData] = useState([]);

  const [words, setWords] = useState(() => {
    return randomWords(100);
  });

  const wordSpanRef = Array(100)
    .fill(0)
    .map((i) => createRef());
  console.log(wordSpanRef);

  const startTimer = () => {
    const intervalId = setInterval(timer, 1000);
    setIntervalId(intervalId);
    function timer() {
      setCountDown((currCountDown) => {
        setCorrectChars((correctChars) => {
          setGraphData((currGraphData) => {
            return [
              ...currGraphData,
              [
                testTime - currCountDown + 1,
                correctChars / 5 / ((testTime - currCountDown + 1) / 60),
              ],
            ];
          });

          return correctChars;
        });

        if (currCountDown === 1) {
          clearInterval(intervalId);
          setTestEnd(true);
          return 0;
        }
        return currCountDown - 1;
      });
    }
  };

  // RESET TEST AS SOON AS USER TRIES TO SET-TIMER LIKE 30s 60s etc.
  const resetTest = () => {
    clearInterval(intervalId);
    setCountDown(testTime);
    setCharIndex(0);
    setWordIndex(0);
    setTestStart(false);
    setTestEnd(false);
    setWords(randomWords(500));
    resetWordSpanRef();
    setCorrectChars(0);
    setCorrectWords(0);
    setIncorrectChars(0);
    setMissedChars(0);
    setExtraChars(0);
    setGraphData([]);
    focusInput();
  };

  const resetWordSpanRef = () => {
    wordSpanRef.map((i) => {
      Array.from(i.current.childNodes).map((j) => {
        j.className = "";
      });
    });
    wordSpanRef[0].current.childNodes[0].className = "current";
  };

  const handleUserInput = (e) => {
    // console.log(e);
    // console.log(e.key);
    // console.log(wordSpanRef[currWordIndex].current.childNodes[currCharIndex].innerText);

    if (!testStart) {
      startTimer();
      setTestStart(true);
    }

    let allChildSpan = wordSpanRef[currWordIndex].current.childNodes;
    console.log("allll", allChildSpan);

    // LOGIC FOR SPACE
    if (e.keyCode === 32) {
      const correctSpans = wordSpanRef[currWordIndex].current.querySelectorAll(".correct");
      console.log(correctSpans);
      if (correctSpans.length === allChildSpan.length) {
        setCorrectWords(correctWords + 1);
      }

      if (allChildSpan.length <= currCharIndex) {
        // cursor present in end
        allChildSpan[currCharIndex - 1].classList.remove("current-right");
      } else {
        // cursor present in between
        // skipped characters
        setMissedChars(missedChars + (allChildSpan.length - currCharIndex));
        for (let i = currCharIndex; i < allChildSpan.length; i++) {
          allChildSpan[i].className += " skipped";
        }
        allChildSpan[currCharIndex].classList.remove("current");
      }

      if (
        wordSpanRef[currWordIndex + 1].current.offsetLeft <
        wordSpanRef[currWordIndex].current.offsetLeft
      ) {
        //i am present at the last word of a line
        wordSpanRef[currWordIndex].current.scrollIntoView();
      }

      wordSpanRef[currWordIndex + 1].current.childNodes[0].className =
        "current";
      setWordIndex(currWordIndex + 1);
      setCharIndex(0);
      return;
    }

    // LOGIC FOR BACK-SPACE
    if (e.keyCode === 8) {
      if (currCharIndex !== 0) {
        if (currCharIndex === allChildSpan.length) {
          if (allChildSpan[currCharIndex - 1].className.includes("extra")) {
            allChildSpan[currCharIndex - 1].remove();
            allChildSpan[currCharIndex - 2].className += " current-right";
          } else {
            allChildSpan[currCharIndex - 1].className = "current";
          }
          setCharIndex(currCharIndex - 1);
          return;
        }
        allChildSpan[currCharIndex].className = "";
        allChildSpan[currCharIndex - 1].className = "current";
        setCharIndex(currCharIndex - 1);
      }
      return;
    }

    if (currCharIndex === allChildSpan.length) {
      // ADD NEW CHARACTER
      setExtraChars(extraChars + 1);
      let newSpan = document.createElement("span");
      newSpan.innerText = e.key;
      newSpan.className = "incorrect current-right extra";
      wordSpanRef[currWordIndex].current.append(newSpan);
      allChildSpan[currCharIndex - 1].classList.remove("current-right");
      setCharIndex(currCharIndex + 1);
      return;
    }

    // FOR COLOR CHANGE YELLOW AND RED
    if (
      e.key ===
      wordSpanRef[currWordIndex].current.childNodes[currCharIndex].innerText
    ) {
      wordSpanRef[currWordIndex].current.childNodes[currCharIndex].className =
        "correct";
      setCorrectChars(correctChars + 1);
    } else {
      wordSpanRef[currWordIndex].current.childNodes[currCharIndex].className =
        "inCorrect";
      setIncorrectChars(incorrectChars + 1);
    }

    // FOR CHANGE CHARACTER INDEX
    // FOR CURSOR (IF WORLDS LENGTH IS EQUAL TO CURRENTCHAR+ 1 THEN CHANGE CURSOR TO THE RIGHT SIDE OR ELSE LEFT)
    if (currCharIndex + 1 === allChildSpan.length) {
      allChildSpan[currCharIndex].className += " current-right";
    } else {
      allChildSpan[currCharIndex + 1].className = "current";
    }

    setCharIndex(currCharIndex + 1);
  };

  const focusInput = () => {
    inputRef.current.focus();
  };

  // CALCULATIONS PART
  // (WPM -> WOrds per minutes)
  // formula-> WPM = ((correctCharacters/5) / (testTime in mins))
  const calculateWPM = () => {
    return Math.round(correctChars / 5 / (testTime / 60));
    // (testTime/60) because we want in secs.
  };

  const calculateAccuracy = () => {
    return Math.round((correctWords / currWordIndex) * 100);
  };

  useEffect(() => {
    resetTest();
  }, [testTime]);

  useEffect(() => {
    focusInput();
    wordSpanRef[0].current.childNodes[0].className = "current";
  }, []);

  return (
    <div>
      {testEnd ? (
        <Stats
          wpm={calculateWPM()}
          accuracy={calculateAccuracy()}
          correctChars={correctChars}
          incorrectChars={incorrectChars}
          missedChars={missedChars}
          extraChars={extraChars}
          graphData={graphData}
          resetTest={resetTest}
        />
      ) : (
        <>
          <UpperMenu countDown={countDown} />
          <div className="type-box" onClick={focusInput}>
            <div className="words-wrapper">
              {words.map((word, index) => (
                <span className="word" ref={wordSpanRef[index]}>
                  {word.split("").map((char) => (
                    <span>{char}</span>
                  ))}
                </span>
              ))}
            </div>
          </div>
          <input
            ref={inputRef}
            type="text"
            onKeyDown={handleUserInput}
            className="hidden-input"
          />
        </>
      )}
    </div>
  );
};

export default TypingBox;

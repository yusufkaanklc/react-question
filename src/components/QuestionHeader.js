import QuestHeaderCSS from "./QuestionHeader.module.css";
import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from 'react';
function QuestionHeader() {
    const [countdown, setCountdown] = useState(1200);

    useEffect(() => {
        const timer = setInterval(() => {
          setCountdown((prevCountdown) => {
            if (prevCountdown > 0) {
              return prevCountdown - 1;
            } else {
              clearInterval(timer); // Sayacı durdur
              console.log("Countdown bitti!");
              return 0;
            }
          });
        }, 1000);
    
        return () => clearInterval(timer);
      }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };
  return (
    <>
    <div className={QuestHeaderCSS["quest-header"]}>
        <div className={QuestHeaderCSS["countdown-box"]}>
        <div className={QuestHeaderCSS["countdown-logo"]}>
        <i class="fi fi-rr-clock-five"></i>
        </div>
        <div className={QuestHeaderCSS["countdown"]}>
        <p className={QuestHeaderCSS["countdown-header"]}>Time remaining</p>
        <div className={QuestHeaderCSS["countdown-value"]}>{formatTime(countdown)}</div>
        </div>
        </div>
        <Button variant="dark" className={QuestHeaderCSS["btn"]}>Submit</Button>
    </div>
    </>
  );
}

export default QuestionHeader;

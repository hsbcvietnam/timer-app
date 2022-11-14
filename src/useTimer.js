import { formatTime } from "./formatTime";
import { useState, useRef, useEffect } from "react";

const useTimer = (ini = 0) => {
  const [time, setTime] = useState(ini)
  const [isStart, setIsStart] = useState(false);
  const active = useRef();
  const [splitArray, setSplitArray] = useState([]);
  useEffect(() => {
    let refInterval;
    if (isStart) {
      refInterval = setInterval(() => {
        setTime(time + 1000)
      }, 1000);
    } else if (!isStart) {
      clearInterval(refInterval);
    }
    return () => clearInterval(refInterval);
  }, [isStart, time]);

  const startTimer = () => {
    setIsStart(true);
    active.current.disabled = true;
  };
  const stopTimer = () => {
    setIsStart(false);
    active.current.disabled = false;
  };
  const splitTimer = () => {
    setSplitArray([...splitArray, formatTime(time)]);
    active.current.disabled = false;
  };
  const resetTimer = () => {
    setIsStart(false);
    setTime(0);
    setSplitArray([])
    active.current.disabled = false;
  };

  return { time, startTimer, stopTimer, splitTimer, resetTimer, splitArray, active };
};
export default useTimer;

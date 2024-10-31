import { useState, useEffect } from 'react';

function useCountUp(end: number, start = 0, duration = 2000) {
  const [count, setCount] = useState(start);

  useEffect(() => {
    let currentNum = start;
    const delay = duration / end;

    const countUp = setInterval(() => {
      if (end <= 0) {
        setCount(() => 0);
        return;
      }

      currentNum += 1;

      setCount(() => currentNum);

      if (currentNum === end) {
        clearInterval(countUp);
      }
    }, delay);

    return () => {
      clearInterval(countUp);
    };
  }, [end, start, duration]);

  return count.toFixed(0);
}

export default useCountUp;

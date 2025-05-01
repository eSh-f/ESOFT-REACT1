import React, { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());
  const now = new Date();

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  return (
    <div>
      <span>{time.toLocaleString()}</span>
      {time.getMinutes() % 5 === 0 && <div>"Время делятся на 5"</div>}
    </div>
  );
};

export default Clock;

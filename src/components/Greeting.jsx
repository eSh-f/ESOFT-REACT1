import React, { useState } from "react";

const Greeting = (props) => {
  const [startName] = useState(props.name);

  return (
    <div>
      <p>Привет, {startName}!</p>
      {startName !== props.name && (
        <p>Привет, у тебя поменялось имя, теперь ты {props.name}!</p>
      )}
    </div>
  );
};

export default Greeting;

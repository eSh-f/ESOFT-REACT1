import React, { useEffect, useState } from "react";
import Greeting from "./Greeting.jsx";
import Clock from "./Clock.jsx";
import Header from "./Header.jsx";

const names = [
  "Иван",
  "Петр",
  "Светлана",
  "Ольга",
  "Вика",
  "Сергей",
  "Евгений",
];

const Container = () => {
  const [name, setName] = useState(
    names[Math.floor(Math.random() * names.length)],
  );

  useEffect(() => {
    const randomName = () => {
      return setTimeout(() => {
        setName(names[Math.floor(Math.random() * names.length)]);
      }, 1000);
    };
    randomName();
  }, [name]);

  return (
    <div>
      <Header />
      <Greeting name={name} />
      <Clock />
    </div>
  );
};

export default Container;

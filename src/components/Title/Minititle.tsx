import React from "react";
import style from "./minititle.module.css";

type Props = {
  title: string;
  day: string;
};

export const Minititle: React.FC<Props> = ({ title, day }) => {
  return (
    <>
      <div className={style.minititle}>
        <div className={style.day}>{day}</div>
        <div className={style.title}>{title}</div>
      </div>
    </>
  );
};

export default Minititle;

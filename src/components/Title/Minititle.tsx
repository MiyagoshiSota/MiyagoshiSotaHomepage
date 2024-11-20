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
        <div className={style.minititle_info}>
          <div className={style.day}>{day}</div>
          <p className={style.title}>{title}</p>
        </div>
      </div>
    </>
  );
};

export default Minititle;

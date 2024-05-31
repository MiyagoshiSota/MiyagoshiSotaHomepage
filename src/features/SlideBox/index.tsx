import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Slidebar from "../../components/Slidebar";
import Aboutme from "./compenents/Aboutme";
import Skils from "./compenents/Skils";
import { windowScroll } from "./compenents/windowScroll";
import { useEndWheel } from "./hooks/useEndWheel";

const SlideBox: React.FC = () => {
  const [coordinate, setCoordinate] = useState(0);
  const [wheeling,isWheeling] = useState(false);
  const [ref, isWheel, getEndWheel] = useEndWheel();

  //ページの変更
  // useEffect(() => {
  //   if (!isWheel) {//wheelが終了した
  //   } else {
  //     isFirst(false);
  //   }
  // }, [isWheel]);

  //wheelの終了を検出
  useEffect(() => {
    ref.current!.onwheel = (ev) => {
      ev.preventDefault();
      ref.current!.scrollLeft += 0.4 * (ev.deltaY + ev.deltaX);
      // if(){
      //   console.log("hello");
      // }
    };

    ref.current!.onscroll = (ev) => {
    };

    // ref.current!.onscrollend = (ev) => {
    //   if(wheeling){
    //     const nowCdt = ref.current!.scrollLeft;
    //     //ポジティブ
    //     if (coordinate >= nowCdt) {
    //       windowScroll(coordinate + window.outerWidth, ref);
    //     } 
    //     //ネガティブ
    //     else if (coordinate < nowCdt) {
    //       windowScroll(coordinate - window.outerWidth, ref);
    //     }
    //     setCoordinate(ref.current!.scrollLeft);
    //   }
    //   isWheeling(false);
    // };
  }, [ref]);

  return (
    <>
      <div ref={ref} className={styles.slide_box}>
        <Aboutme />
        <Skils />
        <div className={styles.slide_bar}>
          <Slidebar />
        </div>
      </div>
    </>
  );
};

export default SlideBox;
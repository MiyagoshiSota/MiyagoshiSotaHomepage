import React, { RefObject, useEffect, useState } from "react";

export const useEndWheel = (): [
  RefObject<HTMLDivElement>,
  boolean,
  Function
] => {
  const [wheelEndTimeout, setWheelEndTimeout] = useState<
    NodeJS.Timeout | undefined
  >(undefined);
  const [isWheel, setIsWheel] = useState(false);
  const [end,isEnd] = useState(false);
  const ref = React.createRef<HTMLDivElement>();

  useEffect(() => {
    const clear = () => {
      if (wheelEndTimeout) {
        clearTimeout(wheelEndTimeout);
      }
    };
    return clear();
  }, []);

  //onwheelの設定と終了判定を行う
  //[処理の流れ]wheelEndTimeout入れる→もう一回発火して、入ってる場合wheelEndTimeoutを消す→最後の一回は消されないのでsetTimeout内が処理する
  const getEndWheel = () => {
    setIsWheel(true); // onWheel中のフラグを立てる

    if (wheelEndTimeout) {
      clearTimeout(wheelEndTimeout); // すでにsetTimeoutで100ms後にonWheel終了するようにしていたらsetTimeoutをclearする
      setWheelEndTimeout(undefined);
    }

    if (isWheel) {
      const wheelEndTimeoutId = setTimeout(() => {
        setIsWheel(false); // wheel中であれば100ms後にwheelが終了するフラグを立てる
        console.log("end");
      }, 80);
      setWheelEndTimeout(wheelEndTimeoutId);
    }
  };

  return [ref, isWheel, getEndWheel];
};

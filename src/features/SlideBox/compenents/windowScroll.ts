import React from "react";

export const windowScroll = (value:number,ref:React.RefObject<HTMLDivElement>) => {
  ref.current!.scrollTo({
    behavior: "smooth",
    left: value,
  });
};
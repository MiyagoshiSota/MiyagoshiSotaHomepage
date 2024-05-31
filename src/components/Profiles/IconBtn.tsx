import React from "react";

type Props = {
  icon: any;
  url: string;
};

const IconBtn: React.FC<Props> = ({ url, icon }) => {
  return (
    <>
      <a href={url}>{icon}</a>
    </>
  );
};

export default IconBtn;

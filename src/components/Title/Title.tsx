import styles from "./title.module.css";

import { useInView } from "../hooks/useInView";
import { useEffect, useRef, useState } from "react";

type Props = {
  text: string;
};

const Title: React.FC<Props> = ({ text }) => {
  const ref = useRef<HTMLHRElement>(null);
  const isView = useInView(ref);
  const [isOneView, setIsOneView] = useState(false);

  useEffect(() => {
    if (isView) {
      setIsOneView(true);
    }
  }, [isView]);

  return (
    <>
      <div className={styles.title}>
        <p>{text}</p>
        <hr ref={ref} className={isOneView ? styles.show_hr : ""} />
      </div>
    </>
  );
};

export default Title;

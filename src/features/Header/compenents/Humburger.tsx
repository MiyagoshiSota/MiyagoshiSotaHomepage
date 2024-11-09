import { useState } from "react";
import styles from "./humburger.module.css";

const Humburger = () => {
 const [active, setActive] = useState(false);

 const classTogle = () =>{
    setActive(!active)
 }

  return (
    <>
      <div className={styles.humburger_area}>
        <div className={active ? styles.humburger_active : styles.humburger } onClick={classTogle}>
          {/* <!-- ハンバーガーメニューの線 --> */}
          <span></span>
          <span></span>
          <span></span>
          {/* <!-- /ハンバーガーメニューの線 --> */}
        </div>
      </div>
      <ul className={active ? styles.slidemenu_active : styles.slidemenu }>
        <li><a href="/">Home</a></li>
        <li><a href="/posts">Posts</a></li>
      </ul>
    </>
  );
};

export default Humburger;

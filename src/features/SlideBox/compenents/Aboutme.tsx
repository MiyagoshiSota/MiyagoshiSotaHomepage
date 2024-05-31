import styles from "./aboutme.module.css";

//imgs
import face from "../../../assets/ore.jpeg";
import github from "../../../assets/github.png";
import instagram from "../../../assets/instagram.png";
import twitter from "../../../assets/twitter.png";

//compoments
import Title from "../../../components/Title";
import IconBtn from "../../../components/IconBtn";
import BgBox from "../../../components/BgBox";

const Aboutme = () => {
  const title = ["MIYAGOSHI", "SOTA"].join("\n");

  return (
    <div  className={styles.aboutme}>
      <div className={styles.info}>
        <div className={`${styles.detale_info} ${styles.col}`}>
          <Title text={title} />
          <p className={styles.university}> AICHI INSTITUTE OF TECHNOLOGY </p>

          {/* ここコンポーネント化した方がいい？？ */}
          <div className={styles.Icons}>
            <IconBtn url={github} />
            <IconBtn url={instagram} />
            <IconBtn url={twitter} />
          </div>
        </div>

        <div className={`${styles.face} ${styles.col}`}>
          <div className={styles.img_container}>
            <img src={face} alt="" />
            <BgBox />
          </div>
        </div>
      </div>
      {/* <Slidebar /> */}
    </div>
  );
};

export default Aboutme;

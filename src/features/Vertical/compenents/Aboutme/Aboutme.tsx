import styles from "./aboutme.module.css";

//compoments
import Name from "../../../../components/Profiles/Name";
import IconBtn from "../../../../components/Profiles/IconBtn";
import BgBox from "../../../../components/FaceBox/BgBox";

//imgs
import face from "../../../../assets/ore.jpeg"

//logos
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Aboutme = () => {
  const title = ["MIYAGOSHI", "SOTA"].join("\n");

  return (
    <div className={styles.aboutme}>
      <div className={styles.info}>
        <div className={`${styles.detale_info} ${styles.col}`}>
          <Name text={title} />
          <p className={styles.university}> AICHI INSTITUTE OF TECHNOLOGY </p>

          {/* ここコンポーネント化した方がいい？？ */}
          <div className={styles.icons}>
            <IconBtn icon={<FaGithub size={"10vh"} color="#263545" />} url="https://github.com/MiyagoshiSota" />
            <IconBtn icon={<FaInstagram size={"10vh"} color="#263545"/>} url="https://www.instagram.com/gongyao402/" />
            <IconBtn icon={<FaSquareXTwitter size={"10vh"} color="#263545"/>} url="https://x.com/Miyagoshi315" />
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

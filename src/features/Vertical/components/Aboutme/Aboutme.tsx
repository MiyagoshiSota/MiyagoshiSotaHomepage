import styles from "./aboutme.module.css";

//compoments
import Name from "../../../../components/Profiles/Name";
import BgBox from "../../../../components/FaceBox/BgBox";

//imgs
import face from "../../../../assets/27316554_m-preview(1)(1).png"

const Aboutme = () => {
  const title = ["おもしろい！を", "カタチに"].join("\n");

  return (
    <div className={styles.aboutme}>
      <div className={styles.info}>
        <div className={`${styles.detale_info} ${styles.col}`}>
          <Name text={title} />
        </div>

        <div className={`${styles.face} ${styles.col}`}>
          <div className={styles.img_container}>
            <div className={styles.wrapper}>
              <img src={face} alt="" />
            </div>
            <BgBox />
          </div>
        </div>
      </div>
      {/* <Slidebar /> */}
    </div>
  );
};

export default Aboutme;

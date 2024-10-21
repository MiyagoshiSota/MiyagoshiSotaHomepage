import styles from "./postcard.module.css";
import Minititle from "../Title/Minititle";

type Props = {
    src:string,
    title:string,
    day:string
}

export const PostCard = ({src,title,day}:Props) => {
  return (
    <div className={styles.postcard_box}>
      <div className={styles.imgbox}>
        <img
          src={src}
          alt=""
        />
      </div>
      <div className={styles.info}>
        <Minititle title={title} day={day} />
      </div>
    </div>
  );
};

export default PostCard;

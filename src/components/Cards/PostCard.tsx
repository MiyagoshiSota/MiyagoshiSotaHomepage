import styles from "./postcard.module.css";
import Minititle from "../Title/Minititle";

type Props = {
  id: string;
  src: string;
  title: string;
  day: string;
};

export const PostCard = ({ id,src, title, day }: Props) => {
  return (
    <a href={"/posts/" + id}>
      <div className={styles.postcard_box} key={day}>
        <div className={styles.imgbox}>
          <img src={src} alt="" />
        </div>
        <div className={styles.info}>
          <Minititle title={title} day={day} />
        </div>
      </div>
    </a>
  );
};

export default PostCard;

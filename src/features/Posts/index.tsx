import styles from "./styles.module.css";

//components
import Title from "../../components/Title/Title";
import PostCard from "../../components/Cards/PostCard";

const Posts = () => {
  return (
    <div className={styles.posts_boxs}>
      <Title text="Posts" />
      <div className={styles.posts_grid}>
        <PostCard src="" title="テストテキストテストテキスト" day="10月30日" />
        <PostCard src="" title="" day="" />
        <PostCard src="" title="" day="" />
        <PostCard src="" title="" day="" />
        <PostCard src="" title="" day="" />
      </div>
    </div>
  );
};

export default Posts;

import styles from "./styles.module.css";

//components
import Title from "../../components/Title/Title";
import PostCard from "../../components/Cards/PostCard";
import { getBlogs,getDetail,Blog } from "./components/postsLogic";

const { contents: posts } = await getBlogs();

const Posts = () => {

  return (
    <div className={styles.posts_boxs}>
      <Title text="Posts" />
      <div className={styles.posts_grid}>
        {
          posts.map((post) => (
            <PostCard id={post.id}  src={post.eyecatch.url} title={post.title} day={post.category.createdAt} />
          ))
        }
      </div>
    </div>
  );
};

export default Posts;

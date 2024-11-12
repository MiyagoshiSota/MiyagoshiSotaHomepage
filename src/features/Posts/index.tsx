import { useEffect, useState } from "react";
import styles from "./styles.module.css";

// components
import Title from "../../components/Title/Title";
import PostCard from "../../components/Cards/PostCard";
import { getBlogs, Blog } from "./components/postsLogic";

const Posts = () => {
  const [posts, setPosts] = useState<Blog[]>();

  useEffect(() => {
    const fetchPosts = async () => {
      const { contents } = await getBlogs();
      setPosts(contents);
    };
    fetchPosts();
  }, []);

  return (
    <div className={styles.posts_boxs}>
      <Title text="Posts" />
      <div className={styles.posts_grid}>
        {posts?.map((post) => (
          <PostCard
            key={post.id}
            id={post.id}
            src={post.eyecatch.url}
            title={post.title}
            day={post.category.createdAt}
          />
        ))}
      </div>
    </div>
  );
};

export default Posts;

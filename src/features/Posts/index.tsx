import { useEffect, useState } from "react";
import styles from "./styles.module.css";

// components
import Title from "../../components/Title/Title";
import PostCard from "../../components/Cards/PostCard";
import { getBlogs, Blog } from "./components/postsLogic";

const categories = ["All", "制作物", "更新情報"];

const Posts = () => {
  const [posts, setPosts] = useState<Blog[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Blog[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchPosts = async () => {
      const { contents } = await getBlogs();
      setPosts(contents);
      setFilteredPosts(contents);
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(posts.filter(post => post.category.name === selectedCategory));
    }
  }, [selectedCategory, posts]);

  return (
    <div className={styles.posts_boxs}>
      <Title text="Posts" />
      <select
        className={styles.dropdown}
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        style={{marginLeft: "5%", marginBottom: "2%"}}
      >
        {categories.map((category) => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
      <div className={styles.posts_grid}>
        {filteredPosts?.map((post) => (
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

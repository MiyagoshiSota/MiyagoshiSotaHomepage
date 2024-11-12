import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Header";
import Vertical from "../Vertical";
import Posts from "../Posts";
import Post from "../Post";
import Footer from "../Footer";
import { getBlogs,Blog } from "../Posts/components/postsLogic";

function App() {
  const [posts, setPosts] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { contents } = await getBlogs();
      setPosts(contents);
    };
    fetchPosts();
  }, []);

  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Vertical />} />
        <Route path="/posts" element={<Posts />} />
        {posts.map((post) => (
          <Route
            key={post.id}
            path={"/posts/" + post.id}
            element={<Post id={post.id} />}
          />
        ))}
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

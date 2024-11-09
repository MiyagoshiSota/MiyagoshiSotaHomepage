import "./App.css";
import { Routes, Route } from "react-router-dom"; // 追加
import Header from "../Header";
import Vertical from "../Vertical";
import Posts from "../Posts";
import Post from "../Post";
import Footer from "../Footer";
import { getBlogs } from "../Posts/components/postsLogic";

const { contents:posts } = await getBlogs();

function App() {
  posts.map((post)=>{
    console.log(post.id);
  })

  return (
    <div className="app">
      
      <Header />

      <Routes> {/*Routesで囲む*/}
        <Route path="/" element={ <Vertical /> } />
        <Route path="/posts" element={ <Posts /> } />
        {posts.map((post)=>(
          <Route path={"/posts/" + post.id} element={ <Post id={post.id} /> } />
        ))}
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

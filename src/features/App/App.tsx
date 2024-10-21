import "./App.css";
import { Routes, Route } from "react-router-dom"; // 追加
import Header from "../Header";
import Vertical from "../Vertical";
import Posts from "../Posts";
import Footer from "../Footer";

function App() {
  return (
    <div className="app">
      
      <Header />

      <Routes> {/*Routesで囲む*/}
        <Route path="/" element={ <Vertical /> } />
        <Route path="/posts" element={ <Posts /> } />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

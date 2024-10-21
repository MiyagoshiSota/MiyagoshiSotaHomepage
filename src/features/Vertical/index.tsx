import styles from "./styles.module.css";

//components
import Aboutme from "./components/Aboutme/Aboutme";
import Skils from "./components/Skils/Skils";
import ActiveProject from "./components/ActiveProject/ActiveProject";
import Projects from "./components/Projects/Projects";
import Awards from "./components/Awards/Awards";

export const Vertical = () => {
  return (
    <div className={styles.vertical_box}>
      <Aboutme />
      {/* TODO:これらが入るコンポーネントがあったらmarginの設定とか楽そう */}
      <Skils />
      <ActiveProject />
      <Projects />
      <Awards />
    </div>
  );
};

export default Vertical;

import styles from "./styles.module.css";

//components
import Aboutme from "./components/Aboutme/Aboutme";
import Skils from "./components/Skils/Skils";
import Projects from "./components/Projects/Projects";
import Awards from "./components/Awards/Awards";

export const Vertical = () => {
  return (
    <div className={styles.vertical_box}>
      <Aboutme />
      <Skils />
      <Projects />
      <Awards />
    </div>
  );
};

export default Vertical;

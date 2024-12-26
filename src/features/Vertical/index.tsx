import styles from "./styles.module.css";

//components
import Aboutme from "./components/Aboutme/Aboutme";
import DetailMe from "./components/DetailMe/DetailMe";
import Skils from "./components/Skils/Skils";
import Projects from "./components/Projects/Projects";
import Awards from "./components/Awards/Awards";
import { GameButton } from "../../components/Button/GameButton";

export const Vertical = () => {
  return (
    <div className={styles.vertical_box}>
      <div className={styles.a_button_wrapper}>
        <GameButton />
      </div>
      <Aboutme />
      <DetailMe />
      <Skils />
      <Projects />
      <Awards />
    </div>
  );
};

export default Vertical;

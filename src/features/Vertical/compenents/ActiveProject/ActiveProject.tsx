import styles from "./activeProject.module.css";

//components
import Title from "../../../../components/Title/Title";
import ProjectCard from "../../../../components/Cards/ProjectCard";

//logos
import { FaUnity } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";

const ActiveProject = () => {
  return (
    <div className={styles.activeproject}>
      <Title text={"ActiveProject"} />
      <div className={styles.cards}>
        <ProjectCard
          name="虫歯バスターズ"
          detail="TGS2024に出す予定のゲーム"
          imgUrls={[<FaUnity size={"4vh"} />, <FaFigma size={"4vh"} />]}
          githubUrl=""
        />
        <ProjectCard
          name="おまかせスケジュール"
          detail="スケジュールを共有するサイト"
          imgUrls={[<FaReact size={"4vh"} />,<IoLogoFirebase size={"4vh"} />]}
          githubUrl=""
        />
        <ProjectCard
          name="Miyagoshi Sota website"
          detail="このwebサイト"
          imgUrls={[<FaReact size={"4vh"} />]}
          githubUrl=""
        />
      </div>
    </div>
  );
};

export default ActiveProject;

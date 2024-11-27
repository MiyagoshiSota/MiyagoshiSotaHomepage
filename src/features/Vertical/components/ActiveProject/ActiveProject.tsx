import styles from "./activeProject.module.css";

//components
import Title from "../../../../components/Title/Title";
import ProjectCard from "../../../../components/Cards/ProjectCard";

//logos
import { FaReact } from "react-icons/fa";

const ActiveProject = () => {
  return (
    <div className={styles.activeproject}>
      <Title text={"ActiveProjects"} />
      <div className={styles.cards}>
        <ProjectCard
          name="My Website"
          detail="このwebサイト"
          imgUrls={[<FaReact size={"4vh"} />]}
          githubUrl="https://github.com/MiyagoshiSota/MiyagoshiSotaHomepage"
          key="1"
        />
      </div>
    </div>
  );
};

export default ActiveProject;

import styles from "./projectCard.module.css";

//logos
import { FaGithub } from "react-icons/fa";

type Props = {
  name: string;
  detail: string;
  imgUrls: any[];
  githubUrl: string;
};

const ProjectCard: React.FC<Props> = ({ name, detail, imgUrls, githubUrl }) => {
  return (
    <div className={styles.card}>
      <div className={styles.text}>
        <h2>{name}</h2>
        <p>{detail}</p>
      </div>
      <div className={styles.logos}>
        {imgUrls.map((n) => {
          return n;
        })}
      </div>
      <div className={styles.github}>
        <a href={githubUrl}>
          <FaGithub size={"5vh"} color="#263545" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;

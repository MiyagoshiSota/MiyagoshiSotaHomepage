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
      <div className={styles.text} key={githubUrl}>
        <h2>{name}</h2>
        <p>{detail}</p>
      </div>
      <div className={styles.logos}>
        {imgUrls.map((n, index) => {
          return <div key={index}>{n}</div>;
        })}
      </div>

      <div className={styles.github}>
        {githubUrl != "" ? (
          <a href={githubUrl}>
            <FaGithub size={"5vh"} color="#263545" />
          </a>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;

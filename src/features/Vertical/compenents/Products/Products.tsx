import styles from "./products.module.css";

//components
import Title from "../../../../components/Title/Title";
import ProjectCard from "../../../../components/Cards/ProjectCard";

//logos
import { FaFigma } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiNestjs } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { FaUnity } from "react-icons/fa";
import { IoLogoElectron } from "react-icons/io5";
import { DiJqueryLogo } from "react-icons/di";
import { SiTensorflow } from "react-icons/si";
import { DiDjango } from "react-icons/di";
import { FaGoogle } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiOpencv } from "react-icons/si";
import { FaMeta } from "react-icons/fa6";
import { RiSvelteFill } from "react-icons/ri";

const Products = () => {
  return (
    <div className={styles.products}>
      <Title text={"Products"} />
      <div className={styles.cards}>
        <ProjectCard
          name="かみあぷり"
          detail="紙を破るアプリ"
          imgUrls={[
            <IoLogoElectron size={"4vh"} />,
            <DiJqueryLogo size={"4vh"} />,
            <SiTensorflow size={"4vh"} />,
          ]}
          githubUrl="https://github.com/geekcamp-2023"
        />
        <ProjectCard
          name="おしゃべりずんだもん"
          detail="綺麗な言葉を使おう"
          imgUrls={[
            <FaReact size={"4vh"} />,
            <DiDjango size={"4vh"} />,
            <SiTensorflow size={"4vh"} />,
          ]}
          githubUrl="https://github.com/orgs/HackSummerToukai/repositories"
        />
        <ProjectCard
          name="YOFUKASHI"
          detail="徹夜を楽しく"
          imgUrls={[<FaReact size={"4vh"} />, <IoLogoFirebase size={"4vh"} />]}
          githubUrl=""
        />
        <ProjectCard
          name="中華の達人"
          detail="TGS2023で出したゲーム"
          imgUrls={[<FaUnity size={"4vh"} />, <FaFigma size={"4vh"} />]}
          githubUrl=""
        />
        <ProjectCard
          name="Ayumu-Effect"
          detail="Ayumuみたいになろう"
          imgUrls={[
            <FaGoogle size={"4vh"} />,
            <FaPython size={"4vh"} />,
            <SiOpencv size={"4vh"} />,
          ]}
          githubUrl="https://github.com/MiyagoshiSota/ayumu-effect"
        />
        <ProjectCard
          name="シス研staywatch"
          detail="シス研にいる人を表示するwebサイト"
          imgUrls={[
            <RiSvelteFill size={"4vh"} />,
            <SiNestjs size={"4vh"} />,
          ]}
          githubUrl="https://github.com/orgs/SystemEngineeringTeam/teams/prj_staywatch/repositories"
        />
        <ProjectCard
          name="EatSNS"
          detail="インスタの食べ物専用リールwebアプリ"
          imgUrls={[<FaReact size={"4vh"} />, <FaMeta size={"4vh"} />]}
          githubUrl="https://github.com/MiyagoshiSota/EatSNS"
        />
        <ProjectCard
          name="Miyagoshi Sota website"
          detail="このwebサイトです"
          imgUrls={[<FaReact size={"4vh"} />]}
          githubUrl="https://github.com/MiyagoshiSota/MiyagoshiSotaHomepage"
        />
      </div>
    </div>
  );
};

export default Products;

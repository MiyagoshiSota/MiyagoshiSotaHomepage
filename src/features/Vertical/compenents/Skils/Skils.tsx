import styles from "./skils.module.css";

//compoments
import Title from "../../../../components/Title/Title";
import TechCard from "../../../../components/Cards/TechCard";

//logos
import { FaGithub } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiNestjs } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { FaUnity } from "react-icons/fa";
import { DiDjango } from "react-icons/di";
import { FaPython } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { SiOpencv } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { IoLogoElectron } from "react-icons/io5";

const Skils = () => {
  return (
    <div className={styles.skils}>
      <Title text={"Skils"} />
      <div className={styles.cards}>
        <TechCard icon={<FaHtml5 size={"10vh"} />} name="HTML" />
        <TechCard icon={<FaCss3Alt size={"10vh"} />} name="CSS" />
        <TechCard icon={<FaReact size={"10vh"} />} name="React" />
        <TechCard icon={<IoLogoElectron size={"10vh"} />} name="Electron" />
        <TechCard icon={<SiNestjs size={"10vh"} />} name="Nestjs" />
        <TechCard icon={<FaPython size={"10vh"} />} name="Python" />
        <TechCard icon={<DiDjango size={"10vh"} />} name="Django" />
        <TechCard icon={<SiOpencv size={"10vh"} />} name="Opencv" />
        <TechCard icon={<DiMysql size={"10vh"} />} name="Mysql" />
        <TechCard icon={<IoLogoFirebase size={"10vh"} />} name="Firebase" />
        <TechCard icon={<FaUnity size={"10vh"} />} name="Unity" />
        <TechCard icon={<FaFigma size={"10vh"} />} name="figma" />
        <TechCard icon={<FaGithub size={"10vh"} />} name="GitHub" />
      </div>
    </div>
  );
};

export default Skils;

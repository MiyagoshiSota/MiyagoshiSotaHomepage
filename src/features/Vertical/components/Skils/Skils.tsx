import styles from "./skils.module.css";

//compoments
import Title from "../../../../components/Title/Title";
import TechCard from "../../../../components/Cards/TechCard";

//logos
import { SiArduino } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiNestjs, SiUnrealengine } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { RiJavascriptFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { IoPrism } from "react-icons/io5";
import { FaUnity } from "react-icons/fa";
import { DiDjango } from "react-icons/di";
import { FaPython } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { SiOpencv } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { FaRaspberryPi } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";
import { FaSass } from "react-icons/fa";

const Skils = () => {
  return (
    <div className={styles.skils}>
      <Title text={"Skils"} />

      <div className={styles.skilbox}>
        <div className={styles.cardsbox}>
          <h1>　</h1>
          <p>
            ポートフォリオサイトの作成や複数のハッカソンでの作品開発において、主にReactやNext.jsといったモダンなフロントエンド技術を活用してきました！<br/>具体的な例としては、夜更かしをテーマにしたアプリケーション「YOFUKASHI」や、音声合成キャラクター「ずんだもん」との対話を楽しめるアプリケーション「おしゃべりずんだもん」などがあります！
          </p>{" "}
          <p>
          </p>{" "}
          <p>
            これらの技術は容易にデプロイが可能で、開発からリリースまでのサイクルを短縮できるため、特に趣味のプロジェクトやハッカソンでの作品作りにおいて使用してます！<br/>こうした経験を通じて、フロントエンドおよびバックエンドの知識を深めるとともに、モダンなWeb開発のワークフローに習熟してきました。
          </p>
        </div>
        <div className={styles.cardsbox}>
          <h1>Web</h1>
          <div className={styles.cards}>
            <TechCard
              icon={<RiJavascriptFill size={"10vh"} />}
              name="JavaScript"
            />
            <TechCard
              icon={<BiLogoTypescript size={"10vh"} />}
              name="TypeScript"
            />
            <TechCard icon={<FaReact size={"10vh"} />} name="React" />
            <TechCard icon={<SiNextdotjs size={"10vh"} />} name="Next" />
            <TechCard icon={<SiNestjs size={"10vh"} />} name="Nestjs" />
            <TechCard icon={<IoPrism size={"10vh"} />} name="Prism" />
          </div>
        </div>
      </div>

      <div className={styles.skilbox}>
        <div className={styles.cardsbox}>
          <h1>Game</h1>
          <div className={styles.cards}>
            <TechCard icon={<FaUnity size={"10vh"} />} name="Unity" />
            <TechCard
              icon={<SiUnrealengine size={"10vh"} />}
              name="Unrealengine"
            />
            <TechCard icon={<SiArduino size={"10vh"} />} name="Arduino" />
            <TechCard
              icon={<FaRaspberryPi size={"10vh"} />}
              name="RaspberryPi"
            />
          </div>
        </div>
        <div className={styles.cardsbox}>
          <h1>　</h1>
          <p>
          ゲーム開発においては、主にUnityを使用して取り組んでいます！これまでに、中華の達人や、虫歯アニマルズ！といった、ハードウェアを活用したユニークなゲームを制作してきました！これらのゲームでは、専用のハードウェアデバイスを活用することで、単なるデジタルゲームにとどまらず、物理的なインタラクションを取り入れる工夫を行いました！
          </p>
          <p>
          将来は、ゲームプランナーとして活躍することを目指しています！これまでのゲーム開発経験を活かして、プレイヤーにとって魅力的で没入感のある体験を提供できるゲームを企画・制作することが私の目標です！
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skils;

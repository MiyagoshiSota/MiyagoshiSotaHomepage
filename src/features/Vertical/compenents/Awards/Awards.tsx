import styles from "./awards.module.css";

//components
import Title from "../../../../components/Title/Title";
import AwardCard from "../../../../components/Cards/AwardCard";

const Awards = () => {
  return (
    <div className={styles.awards}>
      <Title text={"Awards"} />
      <div className={styles.cards}>
        <AwardCard title = {"[最優秀賞] 2023.06"} event={"技育CAMP キャラバンハッカソン vol.2"} product={"紙アプリ"} url="./"/>
        <AwardCard title = {"[企業賞] 2023.9"} event={"HackAichi2023"} product={"社食の革命"} url="./"/>
        <AwardCard title = {"[優秀賞] 2023.9"} event={"HackSummer東海2023"} product={"おしゃべりずんだもん"} url="./"/>
        <AwardCard title = {"[WingArc1st賞] 2023.11"} event={"技育CAMP キャラバンハッカソン vol.4"} product={"YOFUKASHI"} url="./"/>
      </div>
    </div>
  );
};

export default Awards;

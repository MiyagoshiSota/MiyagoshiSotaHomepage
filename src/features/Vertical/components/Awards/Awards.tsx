import styles from "./awards.module.css";

//components
import Title from "../../../../components/Title/Title";
import AwardCard from "../../../../components/Cards/AwardCard";

const Awards = () => {
  return (
    <div className={styles.awards}>
      <Title text={"Awards"} />
      <div className={styles.cards}>
        <AwardCard title = {"[最優秀賞] 2023.06"} event={"技育CAMP キャラバンハッカソン vol.2"} product={"紙アプリ"} url="https://www.marmot-kawaii.net/posts/q9lq47qx9x86"/>
        <AwardCard title = {"[企業賞] 2023.9"} event={"HackAichi2023"} product={"社食の革命"} url="https://www.marmot-kawaii.net/posts/gpyi0y_0flt"/>
        <AwardCard title = {"[優秀賞] 2023.9"} event={"HackSummer東海2023"} product={"おしゃべりずんだもん"} url="https://www.marmot-kawaii.net/posts/n7v5a6gwqoci"/>
        <AwardCard title = {"[WingArc1st賞] 2023.11"} event={"技育CAMP キャラバンハッカソン vol.4"} product={"YOFUKASHI"} url="https://www.marmot-kawaii.net/posts/re7y3hwdw"/>
        <AwardCard title = {"[優秀賞] 2024.11"} event={"技育CAMP Vol.16"} product={"目覚まし黒電話"} url="https://www.marmot-kawaii.net/posts/nug_-x_efq1v"/>
      </div>
    </div>
  );
};

export default Awards;

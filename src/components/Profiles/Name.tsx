import styles from "./name.module.css";

type Props = {
  text: string;
};

const Name: React.FC<Props> = ({ text }) => {
  return (
    <div className={styles.name}>
      <p className={styles.jump}>
        {text.split("").map((char, index) => (
          <span key={index}>{char}</span>
        ))}
      </p>
    </div>
  );
};

export default Name;

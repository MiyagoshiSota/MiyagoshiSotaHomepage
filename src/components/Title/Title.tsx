import styles from "./title.module.css";

type Props = {
  text: string;
};

const Title: React.FC<Props> = ({ text }) => {
  return (
    <>
      <div className={styles.title}>
        <p>{text}</p>
        <hr />
      </div>
    </>
  );
};

export default Title;

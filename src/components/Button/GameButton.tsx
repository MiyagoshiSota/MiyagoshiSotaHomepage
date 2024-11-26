import styles from "./gameButton.module.css";

export const GameButton = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <p>+</p>
      </div>
    </div>
  );
};
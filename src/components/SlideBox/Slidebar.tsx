import styles from "./slidebar.module.css";

const Slidebar = () => {
  let style = {
    text: {
      backgroundColor: "#4e69a2",
      color: "white",
    },
  };

  return (
    <div className={styles.slidebar}>
      <div className={`${styles.movebar} ${style.text}`}></div>
    </div>
  );
};

export default Slidebar;

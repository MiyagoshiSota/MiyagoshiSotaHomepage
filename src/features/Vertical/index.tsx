import styles from "./styles.module.css";

//components
import Aboutme from "./compenents/Aboutme/Aboutme";
import Skils from "./compenents/Skils/Skils";
import ActiveProject from "./compenents/ActiveProject/ActiveProject";
import Products from "./compenents/Products/Products";
import Awards from "./compenents/Awards/Awards";

export const Vertical = () => {
  return (
    <div className={styles.vertical_box}>
      <Aboutme />
      {/* これらが */}
      <Skils />
      <ActiveProject />
      <Products />
      <Awards />
    </div>
  );
};

export default Vertical;

import styles from "./techCard.module.css";

type Props = {
  name: string;
  icon: any;
};

const TechCard: React.FC<Props> = ({ name, icon }) => {
  return (
    <div className={styles.card}>
      {icon}
      <p>{name}</p>
    </div>
  );
};

export default TechCard;

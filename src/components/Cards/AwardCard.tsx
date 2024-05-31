import styles from "./award.module.css";

type Props = {
  title: string;
  event: string;
  product: string;
  url: string;
};

const AwardCard: React.FC<Props> = ({ title, event, product, url }) => {
  return (
    <div className={styles.card}>
      <div className={styles.text}>
        <h2>{title}</h2>
        <div className={styles.low}>
          <h3>{event}</h3>
          <p>{product}</p>
        </div>
      </div>
      <div className={styles.triangle}>
        <a href={url}>
          <svg
            version="1.1"
            id="Calque_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="20px"
            height="20px"
            transform="rotate(90)"
            viewBox="0 0 470 440"
            style={{
              ["--text-height" as any]: "enable-background:new 0 0 470 440;",
            }}
          >
            <polygon
              id="homangle"
              fill="none"
              stroke="#263545"
              stroke-opacity="0.6"
              stroke-width="40"
              stroke-miterlimit="10"
              points="235.49,7 5,437 465,437 "
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default AwardCard;

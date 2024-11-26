import styles from "./moreText.module.css"

type Props = {
    href:string;
}

export const MoreButton = ({href}:Props) => {
  return (
    <a className={styles.wrapper} href={href}>
      <p>More</p>
      <div>{">"}</div>
    </a>
  );
};

export default MoreButton;

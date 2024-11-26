import styles from "./ProductCard.module.css";

type Props = {
  src: string;
  url: string;
};

const ProductCard = ({ src,url }: Props) => {
  return (
    <div className={styles.postcard_box}>
      <div className={styles.imgbox}>
        <a href={url}>
          <img src={src} alt="" />
        </a>
      </div>
    </div>
  );
};

export default ProductCard;

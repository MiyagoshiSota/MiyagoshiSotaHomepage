import styles from "./title.module.css"

type Props = {
    text: string;
  }

const Title:React.FC<Props> = ({text}) => {
    return(
        <div className={styles.title}>
            <p>{text}</p>
        </div>
    )
}

export default Title
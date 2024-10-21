import styles from "./styles.module.css"
import Humburger from "./compenents/Humburger"

const Header = () => {
    return(
        <header className={styles.header}>
            <Humburger/>
            <p className={styles.logo}>Miyagoshi Sota</p>
        </header>   
    )
}

export default Header
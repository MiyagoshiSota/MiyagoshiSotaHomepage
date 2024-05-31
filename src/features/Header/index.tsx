import styles from "./styles.module.css"
import Humburger from "./compenents/Humburger"

const Header = () => {
    return(
        <header className={styles.header}>
            <p className={styles.logo}>Miyagoshi Sota</p>
            {/* <Humburger/> */}
        </header>   
    )
}

export default Header
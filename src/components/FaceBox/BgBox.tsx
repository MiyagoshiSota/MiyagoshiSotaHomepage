import styles from "./bgbox.module.css"

const BgBox = () => {
    const imgs:string[] = ["https://photock.jp/photo/big_webp/photo0000-0035.webp","https://photock.jp/photo/big_webp/photo0000-0729.webp","https://photock.jp/photo/big_webp/photo0000-6291.webp"]
    const max = 3

    return(
        <>
            <div className={styles.bg}   style={{ backgroundImage: `url("${imgs[Math.floor(Math.random() * max)]}")` }}>
            </div>
        </>
    )
}

export default BgBox
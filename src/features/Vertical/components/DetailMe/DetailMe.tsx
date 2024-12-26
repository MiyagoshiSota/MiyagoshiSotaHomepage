import Title from "../../../../components/Title/Title";
import styles from "./detailme.module.css";

import face from "../../../../assets/myface.png"
import IconBtn from "../../../../components/Profiles/IconBtn";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const DetailMe = () => {
  return (
    <div className={styles.DetailMe}>
        <Title text={"AboutMe"} />
        <div className={styles.wrapper}>
            <div className={styles.img_container}>
                <img src={face} alt="myface" />
            </div>
            <div className={styles.txt_container}>
                <h3>宮腰颯太</h3>
                <h3>愛知工業大学情報科学部2年</h3>

                <p>石川県生まれのゲーム & Webフロントエンジニアです。</p>
                <p>愛知工業大学公認の情報系サークルであるシステム工学研究会の会長をしています。</p>
                <p>おもしろい！と思えるようなモノを発案から開発まで行うことをテーマにモノづくりをしています。</p>
                <p>現在はゲームエンジニアとして、日々ゲーム制作に励んでいます。</p>
                <div className={styles.icons}>
                    <IconBtn icon={<FaGithub size={"3vh"} color="#263545" />} url="https://github.com/MiyagoshiSota" />
                    <IconBtn icon={<FaInstagram size={"3vh"} color="#263545"/>} url="https://www.instagram.com/gongyao402/" />
                    <IconBtn icon={<FaSquareXTwitter size={"3vh"} color="#263545"/>} url="https://x.com/Miyagoshi315" />
                </div> 
            </div>
        </div>
    </div>
  )
}

export default DetailMe
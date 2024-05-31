import { useEffect, useRef } from "react";
import styles from "./name.module.css"

type Props = {
    text: string;
  }

const Name:React.FC<Props> = ({text}) => {
    const bgRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
    },[])
    
    return(
        <div ref={bgRef} className={styles.name}>
            <p ref={textRef}>{text}</p>
        </div>
    )
}

export default Name
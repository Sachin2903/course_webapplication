import { useParams } from "react-router-dom";
import styles from "./description.module.css";

export function Description(){
    const params=useParams()
    const {id}=params;
    return (
        <div className={styles.desBox}>
            <h1>{id}</h1>
        </div>
    )
}
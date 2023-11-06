import styles from "./main.module.css";
import { useState, useRef } from "react";
import { AiOutlineSearch } from 'react-icons/ai';
import { MdKeyboardVoice } from 'react-icons/md';
export function Main() {
    const autoinput = useRef("");
    const [hints, setHints] = useState([]);

    function selecthintsfun(event) {
        if (event.target.value.length === 0) {
            setHints([])
            return;
        }



    }

    function autoFill(id) {
        autoinput.current.value = hints[id].state_name;
        setHints([]);
    }





    return (
     
            <div className={styles.navbar}>

                <div className={styles.boxaline}>
                    <div className={styles.searchbox}>
                        <AiOutlineSearch className={styles.searchicon} />
                        <input ref={autoinput} onChange={selecthintsfun} className={styles.search} type="text" placeholder="Search" />
                        <MdKeyboardVoice className={styles.searchicon} />
                    </div>
                    <div className={styles.searchhint}>{
                        hints.map((e, i) => <p className={styles.hinttext} key={i * 10} onClick={() => autoFill(i)}>{e.state_name}</p>)
                    }</div>

                </div>
                <ul className={styles.sideoption}>
                <li className={styles.side} >Home</li>
                    <li className={styles.side} >Favorite</li>
                    <li className={styles.side} >My Cource</li>
                </ul>

        </div>

    )
}
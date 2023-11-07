import styles from "./main.module.css";
import { useState, useRef } from "react";
import { AiOutlineSearch } from 'react-icons/ai';
import { MdKeyboardVoice } from 'react-icons/md';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Slice } from "../../Store/slice";
export function Main() {
    const des=useDispatch();
    const navigate=useNavigate();
    const autoinput = useRef("");
    const [hints, setHints] = useState([]);

    function selecthintsfun(event) {
        if (event.target.value.trim().length > 0) {
            des(Slice.actions.searchactive(true))
              des(Slice.actions.search(event.target.value.trim()))
  
        }else{
            des(Slice.actions.searchactive(false))
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
                    <input onFocus={()=>navigate("/")} ref={autoinput} onChange={selecthintsfun} className={styles.search} type="text" placeholder="Search" />
                    <MdKeyboardVoice className={styles.searchicon} />
                </div>
                <div className={styles.searchhint}>{
                    hints.map((e, i) => <p className={styles.hinttext} key={i * 10} onClick={() => autoFill(i)}>{e.state_name}</p>)
                }</div>

            </div>
            <ul className={styles.sideoption}>
                <li onClick={()=>navigate("/")} className={styles.side} >Home</li>
                <li onClick={()=>navigate("/fav")} className={styles.side} >Favorite</li>
                <li onClick={()=>navigate("/mycourse")} className={styles.side} >My Cource</li>
            </ul>

        </div>

    )
}
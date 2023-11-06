import { Fragment, useRef } from "react";
import styles from "./dash.module.css";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { BsHeartFill } from 'react-icons/bs';
import Rating from '@mui/material/Rating';
import { useNavigate } from "react-router-dom";
import { Slice } from "../../Store/slice";

export function Dash() {
    const des=useDispatch()
    const addToCart = useRef()
    const nav = useNavigate()
    const data = useSelector((state) => {
        return state.course;
    })
    // console.log(data[0].buyvisible,"visible");
   

    function navigateToDes(id) {
        nav(`/description/${id}`)
    }
    function called() {
        console.log("called");
    }
    function handleMouseEnter(id) {
        console.log('id from componen',id);
       des(Slice.actions.visible(id))
    }

    function handleMouseLeave(id) {
        des(Slice.actions.visible(id))
    }

    return (
        <Fragment>

            <div className={styles.MaindashBox}>

                <ul className={styles.sidelist}>
                    <li className={styles.sidelistli}>Rating <MdOutlineKeyboardArrowDown /></li>
                    <li className={styles.sidelistli}>Language <MdOutlineKeyboardArrowDown /></li>
                    <li className={styles.sidelistli}>Vedio Duration <MdOutlineKeyboardArrowDown /></li>
                    <li className={styles.sidelistli}>Features <MdOutlineKeyboardArrowDown /></li>
                    <li className={styles.sidelistli}>Level <MdOutlineKeyboardArrowDown /></li>
                    <li className={styles.sidelistli}>Price <MdOutlineKeyboardArrowDown /></li>
                    <li className={styles.sidelistli}>Topic <MdOutlineKeyboardArrowDown /></li>
                </ul>


                <div className={styles.dashBox}>
                    <h1 className={styles.numberFind}>1631 sachin</h1>

                    {

                        data.map((e) => <div onMouseEnter={() => handleMouseEnter(e.id)}
                            onMouseLeave={() => handleMouseLeave(e.id)} key={e.id * 10} onClick={() => navigateToDes(e.id)} className={styles.courseBox}>
                            {
                              e.buyvisible?<div  ref={addToCart} onClick={() => called()} className={styles.clickDiv}>
                                <p className={styles.buyp}>Buy Now</p>
                                
                                <BsHeartFill className={styles.heart}/>
                              </div>:null
                            }
                            
                            <img className={styles.courseImg} alt="Loading" src={e.thumbnail} />
                            <div className={styles.courseContent}>
                                <h4 className={styles.h4}>{e.name}</h4>
                                <em className={styles.p1}>{e.instructor}</em>
                                <p className={styles.p2}>{e.description}</p>
                                <ul className={styles.list}>
                                    {e.duration[0]}
                                    <li className={styles.listli}>{e.duration[1]}</li>
                                    <li className={styles.listli}>{e.duration[2]}</li>
                                </ul>


                                <Rating classNames={styles.rating} ize="small" name="half-rating-read" defaultValue={e.rating} precision={0.5} readOnly />
                                <p className={styles.p4}>{e.update}</p>
                                <div>
                                    {
                                        e.mini.map((ee) => <button className={styles.btn}>{ee}</button>)
                                    }
                                </div>
                            </div>
                        </div>)
                    }

                </div>
            </div>
        </Fragment>
    )
}
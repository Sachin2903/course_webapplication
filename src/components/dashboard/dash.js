import { Fragment } from "react";
import styles from "./dash.module.css";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { BsHeartFill } from 'react-icons/bs';
import { FaShoppingBag } from 'react-icons/fa';
import Rating from '@mui/material/Rating';
import { useNavigate } from "react-router-dom";
import { Slice } from "../../Store/slice";

export function Dash() {
    const des = useDispatch()
    const nav = useNavigate()
    const data = useSelector((state) => {
        if(state.course.search)
        return state.course.find
        return state.course.courseData;
    })
    const data2 = useSelector((state) => {
    return state.course;
    })




    function navigateToDes(id) {
        nav(`/description/${id}`)
    }

    
    function changeLike(event,id){
        event.stopPropagation()
        des(Slice.actions.like(id))
    }
    function buyFun(event,obj,id){
     
        event.stopPropagation();
        if(!obj.buyvisible){
            des(Slice.actions.purchase({"obj":obj,"id":id}))
            window.alert("Successfully Enrolled")
        }else{
            window.alert("Already Purchased")
        }
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
                    <h1 className={styles.numberFind}>{data2.search&&data.length>0?data.length+` results for \"${data2.result}\"`:null}</h1>

                    {

                        data.length>0?data.map((e) => <div key={e.id * 10} onClick={() => navigateToDes(e.id)} className={styles.courseBox}>

                            <FaShoppingBag onClick={(event)=>buyFun(event,e,e.id)}className={styles.buyp} />

                            <BsHeartFill onClick={(event)=>changeLike(event,e.id)} className={e.like?styles.heart:styles.heartless} />



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
                        </div>):<h2>{`No results for \"${data2.result.slice(0,20)}\"`}</h2>
                    }

                </div>
            </div>
        </Fragment>
    )
}
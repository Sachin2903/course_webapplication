import style from "./fav.module.css";
import { useDispatch, useSelector } from "react-redux";
import Rating from '@mui/material/Rating';
import { useNavigate } from "react-router-dom";
import { Slice } from "../../Store/slice";
import { BsHeartFill } from 'react-icons/bs';
import { FaShoppingBag } from 'react-icons/fa';

export function Fav() {
    const des = useDispatch()
    const nav = useNavigate()
    const data = useSelector((state) => {
        return state.course.courseData.filter((e)=>e.like);
    })

    function navigateToDes(id) {
        nav(`/description/${id}`)
    }

   
    function changeLike(event, id) {
        event.stopPropagation()
        des(Slice.actions.like(id))
    }

    return (
        <div className={style.MaindashBox}>

            {

                data.length > 0 ?<div className={style.dashBox}>
                <h1 className={style.numberFind}>{data.length} course out off 1500</h1>

                {

                    data.map((e) => <div key={e.id * 10} onClick={() => navigateToDes(e.id)} className={style.courseBox}>
                        <FaShoppingBag className={style.buyp} />

                        <BsHeartFill onClick={(event) => changeLike(event, e.id)} className={e.like ? style.heart : style.heartless} />



                        <img className={style.courseImg} alt="Loading" src={e.thumbnail} />
                        <div className={style.courseContent}>
                            <h4 className={style.h4}>{e.name}</h4>
                            <em className={style.p1}>{e.instructor}</em>
                            <p className={style.p2}>{e.description}</p>
                            <ul className={style.list}>
                                {e.duration[0]}
                                <li className={style.listli}>{e.duration[1]}</li>
                                <li className={style.listli}>{e.duration[2]}</li>
                            </ul>


                            <Rating classNames={style.rating} ize="small" name="half-rating-read" defaultValue={e.rating} precision={0.5} readOnly />
                            <p className={style.p4}>{e.update}</p>
                            <div>
                                {
                                    e.mini.map((ee) => <button className={style.btn}>{ee}</button>)
                                }
                            </div>
                        </div>
                    </div>)
                }

            </div>:<h1 className={style.noCourse}>NO Course in Favourite </h1>


            }
            
        </div>
    )
}
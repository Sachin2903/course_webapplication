import style from "./mycourse.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Slice } from "../../Store/slice";
import {TiTickOutline} from "react-icons/ti"



export function Mycoursepur() {
    const des = useDispatch()
    const data = useSelector((state) => {
        return state.course.purchase;
    })

    function changePercentage(id){
des(Slice.actions.complete(id))
    }
   

    return (
        <div className={style.MaindashBox}>
            <div className={style.dashBox}>
               

                {

                    data.map((e) => <div  key={e.id * 10}  className={style.courseBox}>
                     

                       


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
                            <p className={style.lastdate}>Last Date :- {e.dueDate}</p>
                            <p className={!e.buyvisible?style.processBar:style.processBarComplete}>{!e.buyvisible?0:100}%</p>
                           <TiTickOutline onClick={()=>changePercentage(e.id)} className={!e.buyvisible?style.complete:style.completegreen}/>
                            
                            
                           
                        </div>
                    </div>)
                }

            </div>
        </div>
    )
}
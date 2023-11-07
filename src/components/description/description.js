import { useNavigate, useParams } from "react-router-dom";
import styles from "./description.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Slice } from "../../Store/slice";
import Rating from '@mui/material/Rating';
import { BsHeartFill } from 'react-icons/bs';
import {AiFillPlayCircle} from "react-icons/ai"
export function Description(){
    const navigate=useNavigate()
    const des=useDispatch()
    const params=useParams()
    const {id}=params;
    const e=useSelector((state,action)=>{
        return state.course.courseData[id-1]
    })
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
           navigate("/mycourse")
        }
    }


    return (
        <div className={styles.desBox}>
            
                 <div key={e.id * 10} className={styles.courseBox}>

               

                <BsHeartFill onClick={(event)=>changeLike(event,e.id)} className={e.like?styles.heart:styles.heartless} />

                     

                
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
                    <p className={styles.enroll}>{e.enrollmentStatus}</p>
                    <div>
                        {
                            e.mini.map((ee) => <button className={styles.btn}>{ee}</button>)
                        }
                    </div>
                   
                </div>
               

                <div className={styles.Preview}>
                        <img className={styles.courseImg} alt="Loading" src={e.thumbnail} />
                        <p className={styles.play}><AiFillPlayCircle className={styles.playIcon}/><p className={styles.playp}>Preview this course</p></p>
                         <p onClick={(event)=>buyFun(event,e,e.id)}className={styles.buyp}>{!e.buyvisible?"Enroll Now":"Continue"}</p>
                      </div>
            </div>
            <ul className={styles.reqlist}>
            Requirements
                
            {
                e.prerequisites.map((e,i)=><li key={i*10} className={styles.reqlistname}>{e}</li>)
            }
            </ul>
            <h2 style={{margin:"30px"}}>Content</h2>
            {
                e.syllabus.map((e)=><div className={styles.contentDiv}>
                  <h3 className={styles.contentDivh}>Week {e.week}</h3>
                  <h5 className={styles.contentDivh2}>{e.topic}</h5>
                  <p className={styles.contentDivp}>{e.content}</p>

                </div>)
            }
            
        </div>
    )
}
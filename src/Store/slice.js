import { createSlice } from "@reduxjs/toolkit";
import { courseData } from "../couseData";
export const Slice=createSlice({
    initialState:{
      "courseData":courseData,
      "purchase":[],
      "search":false,
      "find":[],
      "result":""
    },
    name:"course",
    reducers:{
        "like":(state,action)=>{
            let id =action.payload-1; 
        
            state.courseData[id].like=!state.courseData[id].like
            
          return state
        },
        "searchactive":(state,action)=>{
                 state.search=action.payload;
                 return state;
        },
        "search":(state,action)=>{
          console.log(action.payload, typeof action.payload);
          state.result=action.payload;
          let newState=state.courseData.filter((e)=>e.name.toLowerCase().includes(action.payload.toLowerCase())||e.instructor.toLowerCase().includes(action.payload.toLowerCase()))
          state.find=newState
          return state;
        },
        "purchase":(state,action)=>{
          let id =action.payload.id-1; 
          state.courseData[id].buyvisible=true;

          let currentDate = new Date();
          const randomDays = Math.floor(Math.random() * 120) + 60;
          currentDate.setDate(currentDate.getDate() + randomDays);
          currentDate+=""
         let objj={...action.payload.obj}
          objj.dueDate=currentDate.slice(0,16)
           state.purchase.unshift(objj)
          return state;
        },
        "complete":(state,action)=>{
          let idd =action.payload; 
          let index=state.purchase.findIndex((e)=>e.id===idd)
        
            state.purchase[index].buyvisible=true;
            
          return state
        }


    }
})
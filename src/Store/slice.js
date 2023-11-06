import { createSlice } from "@reduxjs/toolkit";
import { courseData } from "../couseData";
export const Slice=createSlice({
    initialState:courseData,
    name:"course",
    reducers:{
        "visible":(state,action)=>{
            let id =action.payload-1; 
            console.log(id);
        
            state[id].buyvisible=!state[id].buyvisible
            
          return state
        },
        "like":(state,action)=>{
            let id =action.payload-1; 
            console.log(id);
        
            state[id].like=!state[id].like
            
          return state
        }

    }
})
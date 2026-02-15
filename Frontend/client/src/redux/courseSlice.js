import { createSlice } from "@reduxjs/toolkit";


const courseSlice=createSlice({
    name:"course",
    initialState:{
        course:[],
        singleCourse:null,
        loading:false,
        error:null
    },
    reducers:{
        coursestart:(state)=>{
            state.loading=true
            state.error=null
        },
        getcourse:(state,action)=>{
           state.loading=false,
           state.course=action.payload
        },

        getSingleCourse:(state,action)=>{
            state.loading=false,
            state.singleCourse=action.payload
        }
    }
})

export const {coursestart,getcourse,getSingleCourse}=courseSlice.actions

export default courseSlice.reducer
import {createSlice} from "@reduxjs/toolkit"

const authSlice=createSlice({
    name:"auth",
    initialState:{
        user:null,
        isAuthenticate:false,
        loading:false,
        error:null
    },
    reducers:{
        autoStart:(state)=>{
           state.loading=true,
           state.error=null
        },
        loginSuccess:(state,action)=>{
           state.loading=true,
           state.user=action.payload,
           state.isAuthenticate=true
        },
        logoutSuccess:(state,action)=>{
            state.loading=false,
            state.user=null,
            state.isAuthenticate=false
        },

        authFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    }
})

export const {
  autoStart,
  loginSuccess,
  logoutSuccess,
  authFailure,
} = authSlice.actions;

export default authSlice.reducer

import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  isAuth : false
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        toggaleAuth : (state, action) => {
            state.isAuth = action.payload
        }
    }
})
export const { toggaleAuth } = authSlice.actions
export default authSlice.reducer
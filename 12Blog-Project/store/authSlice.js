/**
 * In this project we are maintaining a store , which will hold the information that a given user is loggedIn or not. If the user is loggedIn then we hold the userData in our store.
 * 
 * Those store has the following info:
 * 1) user logged in status.
 * 2) userData once the uswer logs in
 */

import { createSlice } from "@reduxjs/toolkit";


// An object holding the initial state for user being logged in or not.
const initialState = {
    isUserLoggedIn: false,
    userData: null
}

export const AuthSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers:{
        loggedIn:(state,action)=>{
            state.isUserLoggedIn = true;
            state.userData = action.payload.userData
        },
        loggedOut:(state)=>{
            state.isUserLoggedIn = false;
            state.userData = null;
        }
    }
})

export const {loggedIn,loggedOut} = AuthSlice.actions;
export const AuthReducer = AuthSlice.reducer;
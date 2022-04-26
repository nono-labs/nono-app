import { useEffect } from 'react';

import { createSlice } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";

export const profileSlice = createSlice({
  name: "profile",
  initialState: {
    info: false,
  },
  reducers: {
    getInfo: (state, action) => {
      state.info = action.payload;
    },
  },
});

export const { getInfo } = profileSlice.actions;
export const getProfileInfo = (store) => store.profile.info;

export const useGetInfo = (dependencies = [])=>{
    const dispatch = useDispatch();
    const info = useSelector(getProfileInfo);
    const fetchProfile  = () => {
        try {

            dispatch(getInfo(true));
        }catch(error) {
            console.warn(error)
        }
    }
    useEffect(() => {
        fetchProfile();
    }, dependencies)
    return info
}

export default profileSlice.reducer;

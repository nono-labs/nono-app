import { createSlice } from "@reduxjs/toolkit";
import { post } from "@/utils/request";
import { useSelector, useDispatch } from "react-redux";

export const accountSlice = createSlice({
  name: "account",
  initialState: {
    address: null,
    chainType: null,
    currentIndex: null,
  },
  reducers: {
    setAddress: (state, { payload }) => {
      console.log(payload,'payload')
      state.address = payload.address;
      state.chainType = payload.chainType;
      state.currentIndex = payload.currentIndex;
    },
  },
});
export const { setAddress } = accountSlice.actions;


export default accountSlice.reducer;

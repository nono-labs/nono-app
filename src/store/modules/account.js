import { createSlice } from "@reduxjs/toolkit";
import { post } from "@/utils/request";
import { useSelector, useDispatch } from "react-redux";

export const accountSlice = createSlice({
  name: "account",
  initialState: {
    address: null,
    chainId: null,
 
  },
  reducers: {
    setAddress: (state, { payload }) => {
      state.address = payload.address;
      state.chainId = payload.chainId;
    },
  },
});
export const { setAddress } = accountSlice.actions;


export default accountSlice.reducer;

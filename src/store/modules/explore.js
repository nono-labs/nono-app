import { createSlice } from "@reduxjs/toolkit";
import { post } from "@/utils/request";
import { useSelector, useDispatch } from "react-redux";

export const exploreSlice = createSlice({
  name: "explore",
  initialState: {
    list: [],
    loading: false,
  },
  reducers: {
    list: (state, { payload }) => {
      state.list = payload?.markets.data?.data?.content ?? [];
      state.loading = payload?.loading;
    },
  },
});
export const { list } = exploreSlice.actions;

export const getListsAsync = (payload) => {
  return async (dispatch, getState) => {
    dispatch(list({ markets: getState().explore.list, loading: true }));
    let markets = await post("/api/v1/trans/market", {
      category: "All",
      sortOrder: "DESC",
      sortTag: "popular",
      coinTag: "DNFT",
      ...payload,
    });
    dispatch(list({ markets, loading: false }));
  };
};
export default exploreSlice.reducer;

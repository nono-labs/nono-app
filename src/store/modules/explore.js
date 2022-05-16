import { createSlice } from "@reduxjs/toolkit";
import { post } from "@/utils/request";
import { useSelector, useDispatch } from "react-redux";

export const exploreSlice = createSlice({
  name: "explore",
  initialState: {
    list: [],
    loading: false,
    hasMoreItems: true,
    page: 0,
  },
  reducers: {
    list: (state, { payload }) => {
      console.log(payload, "payload");
      state.list = payload?.markets ?? [];
      state.loading = payload?.loading;
      state.hasMoreItems = payload?.hasMoreItems;
      state.page = payload?.page;
    },
  },
});
export const { list } = exploreSlice.actions;

export const getListsAsync = (payload) => {
  return async (dispatch, getState) => {
    dispatch(list({ ...getState().explore, loading: true }));
    let newdata = [];
    let markets = await post("/api/v1/trans/market", {
      category: "All",
      sortOrder: "DESC",
      sortTag: "popular",
      coinTag: "DNFT",
      ...payload,
      page: getState().explore.page,
    });
    if (getState().explore.page === 0) {
      newdata = markets.data?.data?.content ?? [];
    } else {
      newdata = getState().explore.list.concat(
        markets.data?.data?.content ?? []
      );
    }
    console.log(
      markets.data?.data?.content,

      newdata,
      getState().explore.page
    );
    dispatch(
      list({
        markets: newdata,
        hasMoreItems: markets.data?.data?.pageAble,
        loading: false,
        page: getState().explore.page + 1,
      })
    );
  };
};
export default exploreSlice.reducer;

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
      state.list = payload ?? [];
    },
    page: (state, { payload }) => {
      state.page = payload;
    },
    loading: (state, { payload }) => {
      state.loading = payload;
    },
    hasMoreItems: (state, { payload }) => {
      state.hasMoreItems = payload;
    },
  },
});
export const { list, page, loading, hasMoreItems } = exploreSlice.actions;

export const getListsAsync = (payload) => {
  return async (dispatch, getState) => {
    dispatch(loading({ loading: true }));

    let newdata = [];
    let markets = await post("/api/v1/trans/market", {
      category: "All",
      sortOrder: "DESC",
      sortTag: "popular",
      coinTag: "DNFT",
      size: 10,
      page: getState().explore.page,
    });
    dispatch(page(getState().explore.page + 1));
    dispatch(loading(false));
    dispatch(hasMoreItems(markets.data?.data?.pageAble));
    if (getState().explore.page === 0) {
      newdata = markets.data?.data?.content ?? [];
    } else {
      newdata = [...getState().explore?.list, ...markets.data?.data?.content];
    }
    dispatch(list(newdata));
  };
};
export default exploreSlice.reducer;

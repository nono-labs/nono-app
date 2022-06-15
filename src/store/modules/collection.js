import { createSlice } from "@reduxjs/toolkit";
import { post } from "@/utils/request";
import { useSelector, useDispatch } from "react-redux";

export const collectionSlice = createSlice({
  name: "collection",
  initialState: {
    list: [],
    loading: false,
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
  
  },
});
export const { list, page, loading, } = collectionSlice.actions;

export const getListsAsync = (payload) => {
  return async (dispatch, getState) => {
    dispatch(loading({ loading: true }));

    let newdata = [];
    let markets = await post("/api/v1/collection/batch", {
        address: payload?.address,
        sortOrder: 'ASC',
        sortTag: 'createTime',
        page: 0,
        size: 100,
    },
        'Bearer eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiI1MjQ5MCIsInN1YiI6IjUyNDkwIiwidXNlciI6eyJjcmVhdGVUaW1lIjoxNjU0NjQ4ODE5ODUyLCJ1cGRhdGVUaW1lIjoxNjU1MjY1NzYwNzc0LCJpZCI6NTI0OTAsImFkZHJlc3MiOiIweDk1ZjUwOTUwNTI2MjgxMWE0NjhkMTc5M2UyYjg4ZDYxMjY4NDYxYTEiLCJuaWNrTmFtZSI6IiIsImdlbmRlciI6bnVsbCwiZW1vdGlvbiI6bnVsbCwiYXZhdG9yVXJsIjoiL2lwZnNHZXQvUW1iYXpTRzlRZldMV0dIczZNTnVURml6aDZrRGhpeEU4NkFjRm1TcjFQdkhUdiIsImJhbm5lclVybCI6Ii9pcGZzR2V0L1FtV1kyNWFOeUZRcUJXVDF2VlZaWWR1NGJ0NWdkTHhqRlJKUHp3TjF6NWZQdUoiLCJ0d2l0dGVyQWRkcmVzcyI6bnVsbCwiZmFjZWJvb2tBZGRyZXNzIjpudWxsLCJ5b3V0dWJlQWRkcmVzcyI6bnVsbCwiZm9sbG93Q291bnQiOjAsImZvbGxvd2VkQ291bnQiOjAsImxhc3RMb2dpblRpbWUiOjE2NTUyNjU3NjA3NzQsImNlcnRpZmllZCI6ZmFsc2V9LCJpYXQiOjE2NTUyNjU3NjAsImV4cCI6MTY1NjEyOTc2MH0.JEA0Ej0Puk_FH0B82f8wz-QJAjLZYb6Hw7sL0n3uh4Sn8PzbxVbrs-pvI4tYGKsYJPiosxnU-JCU4Z4afyNesQ'
    );
    // dispatch(page(getState().explore.page + 1));
    dispatch(loading(false));
    // if (getState().explore.page === 0) {
      newdata = markets.data?.data?.content ?? [];
    // } else {
    //   newdata = [...getState().explore?.list, ...markets.data?.data?.content];
    // }
    dispatch(list(newdata));
  };
};
export default collectionSlice.reducer;

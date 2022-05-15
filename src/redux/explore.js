import { useEffect } from "react";

import { createSlice } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { post } from "@/utils/request";
export const exploreSlice = createSlice({
  name: "explore",
  initialState: {
    loading: false,
    list: [2222],
  },
  reducers: {
    getInfo: (state, { payload }) => {
      console.log(payload, "action");
      state.list = payload?.content ?? [];
      state.loading = payload?.loading;
    },
  },
});

// export const { getInfo } = exploreSlice.actions;
// export const getLists = (store) => store.explore;

// export const useGetListInfo = (dependencies = []) => {
//   const dispatch = useDispatch();
//   const info = useSelector(getLists);
//   const fetchProfile = async () => {
//     try {
//       console.log("1313123", info);
//       dispatch(getInfo({ list: info.list, loading: true }));

//       let markets = await post("/api/v1/trans/market", {
//         category: "All",
//         sortOrder: "DESC",
//         sortTag: "popular",
//         coinTag: "DNFT",
//         page: 0,
//         size: 20,
//       });
//       dispatch(getInfo({ list: markets?.data?.data, loading: false }));
//       console.log(markets, "markets");
//     } catch (error) {
//       console.warn(error);
//     }
//   };
//   useEffect(() => {
//     fetchProfile();
//   }, dependencies);
//   return info;
// };
export const {
  updateWalletDetails,

} = exploreSlice.actions;
export default exploreSlice.reducer;

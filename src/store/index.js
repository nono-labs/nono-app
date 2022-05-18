import { configureStore } from "@reduxjs/toolkit";
import exploreReducer from "./modules/explore";
import accountReducer from "./modules/account";

const reducer = {
  explore: exploreReducer,
  account: accountReducer,
};
const store = configureStore({
  reducer,
});
export default store;

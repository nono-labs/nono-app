import { configureStore } from "@reduxjs/toolkit";
import exploreReducer from "./modules/explore";
const reducer = {
  explore: exploreReducer,
};
const store = configureStore({
  reducer,
});
export default store;

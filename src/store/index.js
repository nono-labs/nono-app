import { configureStore } from "@reduxjs/toolkit";
import exploreReducer from "./modules/explore";
import accountReducer from "./modules/account";
import collectionReducer from "./modules/collection";
const reducer = {
  explore: exploreReducer,
  account: accountReducer,
  collection: collectionReducer,
};
const store = configureStore({
  reducer,
});
export default store;

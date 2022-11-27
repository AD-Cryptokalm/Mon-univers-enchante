import { combineReducers } from "redux";
import userReducer from "./userReducer";
import productsReducer from "./productsReducer";
import productReducer from "./productReducer";
import orderReducer from "./orderReducer";

export default combineReducers({
  userReducer,
  productsReducer,
  productReducer,
  orderReducer,
  
});

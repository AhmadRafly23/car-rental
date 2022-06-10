import { combineReducers } from "redux";
import { carsReducer } from "./carsReducer";
import { detailReducers } from "./detailReducer";
import { filterReducer } from "./filterReducer";
import auth from "./auth";
import message from "./message";

export default combineReducers({
  allCars: carsReducer,
  filterData: filterReducer,
  detailCars: detailReducers,
  auth,
  message,
});

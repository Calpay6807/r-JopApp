import { configureStore } from "@reduxjs/toolkit";
import { jops } from "./jopSlice";

export default configureStore({
  reducer: jops,
});

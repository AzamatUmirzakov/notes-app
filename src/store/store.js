import {configureStore} from "@reduxjs/toolkit";
import contentReducer from './slices/content-slice';

const store = configureStore({
  reducer: {
    content: contentReducer,
  }
})

window.store = store;
export default store;
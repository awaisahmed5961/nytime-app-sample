import { combineReducers } from "@reduxjs/toolkit";
import articles from "../stateslice/articles";

const rootReducer = combineReducers({
  articles: articles,
});

export default rootReducer;

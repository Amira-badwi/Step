import React from "react";
import { createStore , applyMiddleware } from "redux";
import reducer from "./Reducer";

 const store =createStore(reducer )
export default store;
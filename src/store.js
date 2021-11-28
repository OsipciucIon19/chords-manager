import {createStore} from "@reduxjs/toolkit";
import reducer from "./reducers/index"

const store = createStore(reducer)

export default store;
import { combineReducers } from "redux"
import { BookReducer } from "./book"
import { AppReducer } from "./App"
import { AuthReducer } from "./auth"
import { customizationReducer } from "./customizationReducer"

const RootReducers = combineReducers({
  AppReducer: AppReducer,
  AuthReducer: AuthReducer, 
  BookReducer: BookReducer,
  customizationReducer: customizationReducer
})

// export type RootState = ReturnType<typeof RootReducers>
// export type RootState = ReturnType<typeof RootReducers>;
export default RootReducers
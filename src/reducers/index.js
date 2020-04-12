import { combineReducers } from "redux";
import { homeReducer } from './homeReducer'
import { bannerReducer } from '../components/SectionBanner/store/reducer'

export const reducers = combineReducers({
  // ... reducers
  homeReducer,
  bannerReducer
})
import { GET_LIST, GET_LIST_FAILED, GET_LIST_SUCCESS } from "../actions"

const initialState = {
  lstData: [],
  isLoading: false
}

export const bannerReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_LIST:
      return { ...state, isLoading: true }
    case GET_LIST_SUCCESS:
      return { ...state, isLoading: false, lstData: action.payload }
    case GET_LIST_FAILED:
      return { ...state, isLoading: false }
    default: return state
  }
}
import AxiosServices from "../../../../services/AxiosServices"

export const GET_LIST = 'GET_LIST'
export const GET_LIST_SUCCESS = 'GET_LIST_SUCCESS'
export const GET_LIST_FAILED = 'GET_LIST_FAILED'

export const getList = () => {
  return {
    type: GET_LIST
  }
}

export const getListSuccess = (data) => {
  return {
    type: GET_LIST_SUCCESS,
    payload: data
  }
}

export const getListFailed = () => {
  return {
    type: GET_LIST_FAILED
  }
}

export const fetchData = () => {
  return (dispatch) => {
    dispatch(getList())
    AxiosServices.get(process.env.REACT_APP_API_LINK + '/browse/banner')
      .then(res => {
        console.log(res.data.data.items);
        dispatch(getListSuccess(res.data.data.items))
      })
      .catch(err => {
        console.log(err.response);
        // dispatch(getListFailed())
      })
  }
}
import axios from 'axios';
import URL from './AJAX_URL'
import {
  CREATING_GROUP,
  SUCCESS_CREATE_GROUP, 
  FAIL_CREATE_GROUP, 
  DELETEING_GROUP, 
  SUCCESS_DELETE_GROUP, 
  FAIL_DELETE_GROUP,
  GETTING_GROUPS,
  FAIL_GET_GROUPS,
  SUCCESS_GET_GROUPS,
  SET_VIEWING_GROUP 
} from './actionTypes'


export const createGroup =(name) => dispatch => { 
  dispatch({type:CREATING_GROUP});
  axios.post(`${URL}api/groups`,{ name})
    .then(res=> dispatch({type:SUCCESS_CREATE_GROUP, payload:res.data}))
    .catch(err => dispatch({type:FAIL_CREATE_GROUP, payload:err }))
}

export const getGroups =() => dispatch => { 
  dispatch({type:GETTING_GROUPS});
  axios.get(`${URL}api/groups`,{ headers: { Authorization: localStorage.getItem("token") }})
    .then(res=> {dispatch({type:SUCCESS_GET_GROUPS, payload:res.data})})
    .catch(err => { dispatch({type:FAIL_GET_GROUPS, payload:err })})
}

export const deleteGroup = () => dispatch => {
  dispatch({type:DELETEING_GROUP})
  // axios request to delete group
}
export function setViewGroup(id){
  return {type: SET_VIEWING_GROUP, payload: id}
} 
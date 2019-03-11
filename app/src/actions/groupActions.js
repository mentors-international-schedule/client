import axios from 'axios';
import URL from './AJAX_URL'
import {
  CREATING_GROUP,
  SUCCESS_CREATE_GROUP, 
  FAIL_CREATE_GROUP, 
  DELETEING_GROUP, 
  SUCCESS_DELETE_GROUP, 
  FAIL_DELETE_GROUP 
} from './actionTypes'


export const createGroup =(groupName, currentLoggedInUser) => dispatch => { 
  dispatch({type:CREATING_GROUP});
  console.log(groupName)
  axios(URL,{groupName})
    .then(res=> dispatch({type:SUCCESS_CREATE_GROUP, payload:res.data}))
    .catch(err => dispatch({type:FAIL_CREATE_GROUP, payload:err }))
}

export const deleteGroup = (groupName) => dispatch => {
  dispatch({type:DELETEING_GROUP})
  // axios request to delete group
  
}
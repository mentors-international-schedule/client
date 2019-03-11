import axios from 'axios';

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
  // axios request to create a group
}

export const deleteGroup = (groupName) => dispatch => {
  dispatch({type:DELETEING_GROUP})
}
import * as UserAPIUtil from '../util/user_api_util'

export const RECEIVE_USER = 'RECEIVE_USER';
export const REMOVE_USER = 'REMOVE_USER';

// you will need an action creator to create normal POJO objects with at least a type
// optional payload. Remember this is being sent off to the store via dispatch which will then update
// the stores state 
// doesn't need to be exported
// also think about the flow of information, these action creators RECEIVE something from your 
// ajax calls. Name them accordingly
// how they're structured may affect how you structure your state   

export const receiveUser = (user) => {
  return({
      type: RECEIVE_USER, 
      user: user // remember this user key is how you would key into this action in the reducer
  })
}

const removeUser = (user) => {
    return({
        type: REMOVE_USER, 
        userId: user.id
    })
}

// thunk action creators 
// these are curried functions which will eventually be dispatched to the store. 
// however because they're functions they would be caught by the thunk middleware
// the ajax call within these functions will then be executed and return a object
// this object will then be passed into your action creators and dispatched to the reducer

export const createUser = (user) => (dispatch) => {
    return UserAPIUtil.createUser(user) // the structure of how user will be passed in will be determined later
        .then((user) => dispatch(receiveUser(user))) 
        // at the moment the only user information returned is id and email 
        // comes from a form 
}

export const loginUser = (user) => (dispatch) => {
    return UserAPIUtil.loginUser(user) 
        .then((user) => dispatch(receiveUser(user)))
        // comes from a form 
}

export const logoutUser = () => (dispatch) => {
    return UserAPIUtil.logoutUser()
        .then((user) => dispatch(removeUser(user)))
        // logout button 
        // the way you have your views built, the logout returns the logged out user 
}
// it has no access to dispatch until its mapped in the container 
// 
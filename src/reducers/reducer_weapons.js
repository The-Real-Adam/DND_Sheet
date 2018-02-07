import {GET_WEAPONS} from '../actions'

const initialState = {}

export default function(state=initialState, action){

  switch(action.type){

    case GET_WEAPONS:
      console.log('get Weapons hit in reducer')
      console.log('action.payload:', action.payload)
      return action.payload
    default:
      return state;
  }
  // return state;
}

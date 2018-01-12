import {GET_SHEET} from '../actions'

const initialState = {}

export default function(state=initialState, action){

  switch(action.type){

    case GET_SHEET:
      console.log('get A sheet hit in reducer')
      console.log('action.payload:', action.payload)
      return action.payload
    default:
      return state;
  }
  // return state;
}

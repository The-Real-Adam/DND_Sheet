import {GET_SPELLS} from '../actions'

const initialState = {}

export default function(state=initialState, action){

  switch(action.type){

    case GET_SPELLS:
      console.log('get spells hit in reducer')
      console.log('action.payload:', action.payload)
      return action.payload
    default:
      return state;
  }
  // return state;
}

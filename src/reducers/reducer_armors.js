import {GET_ARMORS} from '../actions'

const initialState = {}

export default function(state=initialState, action){

  switch(action.type){

    case GET_ARMORS:
      console.log('get Armors hit in reducer')
      console.log('action.payload:', action.payload)
      return action.payload
    default:
      return state;
  }
  // return state;
}

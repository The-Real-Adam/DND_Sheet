import {GET_FEATS} from '../actions'

const initialState = {}

export default function(state=initialState, action){

  switch(action.type){

    case GET_FEATS:
      console.log('get feats hit in reducer')
      console.log('action.payload:', action.payload)
      return action.payload
    default:
      return state;
  }
  // return state;
}

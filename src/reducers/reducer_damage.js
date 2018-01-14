import {DAMAGE_HANDLER} from '../actions'

const initialState = {}

export default function(state=initialState, action){

  switch(action.type){

    case DAMAGE_HANDLER:
      console.log('Damage Handler in reducer')
      console.log('action.payload:', action.payload)
      return action.payload
    default:
      return state;
  }
  // return state;
}

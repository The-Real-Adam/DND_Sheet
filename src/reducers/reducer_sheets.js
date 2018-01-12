import {GET_SHEETS} from '../actions'

const initialState = {
  sheets: []
}

export default function(state=initialState, action){

  switch(action.type){

    case GET_SHEETS:
      // console.log('get sheets hit in reducer')
      return {
        sheets: action.payload
      }
  }
  return state;
}

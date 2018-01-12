import { combineReducers } from 'redux'
import SheetsReducer from './reducer_sheets'

const rootReducer = combineReducers({
  sheets: SheetsReducer
})

export default rootReducer

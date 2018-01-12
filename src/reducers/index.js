import { combineReducers } from 'redux'
import SheetsReducer from './reducer_sheets'
import SheetReducer from './reducer_sheet'

const rootReducer = combineReducers({
  sheets: SheetsReducer,
  sheet: SheetReducer
})

export default rootReducer

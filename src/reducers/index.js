import { combineReducers } from 'redux'
import SheetsReducer from './reducer_sheets'
import SheetReducer from './reducer_sheet'
import DamageReducer from './reducer_damage'

const rootReducer = combineReducers({
  sheets: SheetsReducer,
  sheet: SheetReducer,
  damage: DamageReducer
})

export default rootReducer

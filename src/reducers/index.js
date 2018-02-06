import { combineReducers } from 'redux'
import SheetsReducer from './reducer_sheets'
import SheetReducer from './reducer_sheet'
import DamageReducer from './reducer_damage'
import FeatReducer from './reducer_feats'
import SpellReducer from './reducer_spells'


const rootReducer = combineReducers({
  sheets: SheetsReducer,
  sheet: SheetReducer,
  damage: DamageReducer,
  feats: FeatReducer,
  spells: SpellReducer
})

export default rootReducer

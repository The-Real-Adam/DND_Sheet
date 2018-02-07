import { combineReducers } from 'redux'
import SheetsReducer from './reducer_sheets'
import SheetReducer from './reducer_sheet'
import DamageReducer from './reducer_damage'
import FeatReducer from './reducer_feats'
import SpellReducer from './reducer_spells'
import WeaponReducer from './reducer_weapons'
import ArmorReducer from './reducer_armors'

const rootReducer = combineReducers({
  sheets: SheetsReducer,
  sheet: SheetReducer,
  damage: DamageReducer,
  feats: FeatReducer,
  spells: SpellReducer,
  weapons: WeaponReducer,
  armors: ArmorReducer
})

export default rootReducer

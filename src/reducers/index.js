import { combineReducers } from 'redux';
import CalculationReducer from './CalculationReducer'
import FormulaeReducer from './FormulaeReducer'

export default combineReducers({
	calculate:CalculationReducer,
	formula_addition:FormulaeReducer
})
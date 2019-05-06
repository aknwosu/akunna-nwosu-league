import { combineReducers } from 'redux'
import doctors from './doctors'
import appstate from './appstate'

export default combineReducers({
	doctors,
	appstate
})

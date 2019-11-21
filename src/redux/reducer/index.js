import {combineReducers} from 'redux'

import user from './user'
import balance from './balance'

const appReducer = combineReducers({
	user,
	balance,
})

export default appReducer

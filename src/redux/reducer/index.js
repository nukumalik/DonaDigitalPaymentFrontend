import {combineReducers} from 'redux'

import user from './user'
import balance from './balance'
import transactions from './transactions'

const appReducer = combineReducers({
	user,
	balance,
	transactions,
})

export default appReducer

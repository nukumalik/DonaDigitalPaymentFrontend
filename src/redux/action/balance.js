import axios from 'axios'

export const getBalance = user_id => {
	return {
		type: 'GET_BALANCE',
		payload: axios.get('http://localhost:5000/api/v1/balances/' + user_id, {
			'Content-Type': 'application/x-www-form-urlencoded',
		}),
	}
}

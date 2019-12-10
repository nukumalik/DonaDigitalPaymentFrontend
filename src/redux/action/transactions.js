import axios from 'axios'

export const transaction = (user_id, dataTransaction) => {
	console.log(dataTransaction)
	return {
		type: 'TRANSACTION',
		payload: axios.post('http://192.168.0.121:5000/api/v1/transactions/' + user_id, dataTransaction, {
			'Content-Type': 'application/x-www-form-urlencoded',
		}),
	}
}

export const getAllTransactions = user_id => {
	return {
		type: 'GET_TRANSACTION',
		payload: axios.get('http://192.168.0.121:5000/api/v1/transactions/' + user_id),
	}
}

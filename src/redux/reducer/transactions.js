/* eslint-disable indent */
const initialState = {
	isLoading: false,
	isError: false,
	isTransactionSucces: false,
	transactionsData: [],
}

const transactions = (state = initialState, action) => {
	switch (action.type) {
		case 'TRANSACTION_PENDING':
			return {
				...state,
				isLoading: true,
			}
		case 'TRANSACTION_REJECTED':
			return {
				...state,
				isLoading: false,
				isError: true,
			}
		case 'TRANSACTION_FULFILLED':
			return {
				...state,
				isLoading: false,
				isError: true,
				isTransactionSucces: true,
			}
		case 'GET_TRANSACTION_PENDING':
			return {
				...state,
				isLoading: true,
			}
		case 'GET_TRANSACTION_REJECTED':
			return {
				...state,
				isLoading: false,
				isError: true,
			}
		case 'GET_TRANSACTION_FULFILLED':
			return {
				...state,
				isLoading: false,
				isError: true,
				transactionsData: action.payload.data.data,
			}
		default:
			return {...state}
	}
}

export default transactions

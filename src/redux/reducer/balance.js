/* eslint-disable indent */
const initialState = {
	isLoading: false,
	isError: false,
	amount: 0,
}

const balance = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_BALANCE_PENDING':
			return {
				...state,
				isLoading: true,
			}
		case 'GET_BALANCE_REJECTED':
			return {
				...state,
				isLoading: false,
				isError: true,
			}
		case 'GET_BALANCE_FULFILLED':
			return {
				...state,
				isLoading: false,
				isError: true,
				amount: action.payload.data.data[0].amount,
			}
		default:
			return {...state}
	}
}

export default balance

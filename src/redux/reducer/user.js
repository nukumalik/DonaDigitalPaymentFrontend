// import AsyncStorage from '@react-native-community/async-storage'

const initialState = {
	isLoading: false,
	isError: false,
	username: '',
	isLogin: false,
	token: '',
	isRegistrationSucces: false,
}

const user = (state = initialState, action) => {
	switch (action.type) {
		case 'LOGIN_PENDING':
			return {
				...state,
				isLoading: true,
			}
		case 'LOGIN_REJECTED':
			return {
				...state,
				isLoading: false,
				isError: true,
			}
		case 'LOGIN_FULFILLED':
			// storeData('username', action.payload.data.result.name)
			// storeData('token', action.payload.data.token)
			return {
				...state,
				isLoading: false,
				isError: false,
				username: action.payload.data.result.name,
				token: action.payload.data.token,
				isLogin: true,
			}
	}
}

export default user

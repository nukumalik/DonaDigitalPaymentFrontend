import AsyncStorage from '@react-native-community/async-storage'

const initialState = {
	isLoading: false,
	isError: false,
	username: '',
	phoneNumber: '',
	isLogin: false,
	token: '',
	isRegistered: false,
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
			storeData('username', action.payload.data.data.name)
			storeData('token', action.payload.data.token)
			return {
				...state,
				isLoading: false,
				isError: false,
				username: action.payload.data.data.name,
				token: action.payload.data.token,
				isLogin: true,
			}
		case 'PHONE_CHECK_PENDING':
			return {
				...state,
				isLoading: true,
			}
		case 'PHONE_CHECK_REJECTED':
			return {
				...state,
				isLoading: false,
				isError: true,
			}
		case 'PHONE_CHECK_FULFILLED':
			return {
				...state,
				isLoading: false,
				isError: false,
				phoneNumber: action.payload.data.phone,
				isRegistered: action.payload.data.is_registered,
			}
		case 'KEEP_LOGIN':
			return {
				isLoading: false,
				isError: false,
				username: action.userName,
				isLogin: true,
				token: action.token,
			}
		default:
			return initialState
	}
}

export default user

const storeData = async (key, value) => {
	try {
		await AsyncStorage.setItem(key, value)
	} catch (e) {
		console.log(e)
	}
}

const clearAllData = async () => {
	try {
		await AsyncStorage.clear()
	} catch (e) {
		console.log(e)
	}
}

/* eslint-disable indent */
import AsyncStorage from '@react-native-community/async-storage'
import qs from 'qs'

const initialState = {
	isLoading: false,
	isError: false,
	userData: {},
	phoneNumber: '',
	isLogin: false,
	token: '',
	isRegistered: false,
	isRegistrationSucces: false,
	otpCode: '',
	otpExp: '',
	newUserData: {},
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
			// storeData('username', action.payload.data.data.name)
			storeData('userData', JSON.stringify({...action.payload.data.data}))
			storeData('token', action.payload.data.token)
			return {
				...state,
				isLoading: false,
				isError: false,
				userData: {...action.payload.data.data},
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
				userData: {...action.userData},
				isLogin: true,
				token: action.token,
			}
		case 'REQUEST_OTP_PENDING':
			return {
				...state,
				isLoading: true,
			}
		case 'REQUEST_OTP_REJECTED':
			return {
				...state,
				isLoading: false,
				isError: true,
			}
		case 'REQUEST_OTP_FULFILLED':
			return {
				...state,
				isLoading: false,
				isError: false,
				otpCode: action.payload.data.data.otp_code,
				phoneNumber: action.payload.data.data.phone,
				otpExp: action.payload.data.data.expired_date,
			}
		case 'CREATE_USER_DATA':
			let userDataTemp = {...state.newUserData, ...action.userData}
			return {
				...state,
				newUserData: {...userDataTemp},
			}
		case 'REGISTER_PENDING':
			return {
				...state,
				isLoading: true,
			}
		case 'REGISTER_REJECTED':
			return {
				...state,
				isLoading: false,
				isError: true,
			}
		case 'REGISTER_FULFILLED':
			// storeData('username', action.payload.data.data.name)
			// storeData('token', action.payload.data.token)
			return {
				...state,
				isLoading: false,
				isError: false,
				// username: action.payload.data.data.name,
				// token: action.payload.data.token,
				// isLogin: true,
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

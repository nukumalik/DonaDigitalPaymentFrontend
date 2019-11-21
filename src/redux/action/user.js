import axios from 'axios'

export const login = dataLogin => {
	return {
		type: 'LOGIN',
		payload: axios.post('http://localhost:5000/api/v1/users/login', dataLogin, {
			'Content-Type': 'application/x-www-form-urlencoded',
		}),
	}
}

export const phoneCheck = dataCheck => {
	return {
		type: 'PHONE_CHECK',
		payload: axios.post('http://localhost:5000/api/v1/users/phone-check', dataCheck, {
			'Content-Type': 'application/x-www-form-urlencoded',
		}),
	}
}

export const keepLogin = (userName, token) => {
	return {
		type: 'KEEP_LOGIN',
		userName,
		token,
	}
}

export const requestOTP = phoneNumber => {
	return {
		type: 'REQUEST_OTP',
		payload: axios.post('http://localhost:5000/api/v1/users/request-otp', phoneNumber, {
			'Content-Type': 'application/x-www-form-urlencoded',
		}),
	}
}

export const createUserData = userData => {
	return {
		type: 'CREATE_USER_DATA',
		userData,
	}
}

export const register = userData => {
	return {
		type: 'REGISTER',
		payload: axios.post('http://localhost:5000/api/v1/users/signup', userData, {
			'Content-Type': 'application/x-www-form-urlencoded',
		}),
	}
}

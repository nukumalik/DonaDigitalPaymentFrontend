import axios from 'axios'

export const login = dataLogin => {
	return {
		type: 'LOGIN',
		payload: axios.post('http://192.168.0.121:5000/api/v1/users/login', dataLogin, {
			'Content-Type': 'application/x-www-form-urlencoded',
		}),
	}
}

export const phoneCheck = dataCheck => {
	return {
		type: 'PHONE_CHECK',
		payload: axios.post('http://192.168.0.121:5000/api/v1/users/phone-check', dataCheck, {
			'Content-Type': 'application/x-www-form-urlencoded',
		}),
	}
}

export const keepLogin = (userData, token) => {
	return {
		type: 'KEEP_LOGIN',
		userData,
		token,
	}
}

export const requestOTP = phoneNumber => {
	return {
		type: 'REQUEST_OTP',
		payload: axios.post('http://192.168.0.121:5000/api/v1/users/request-otp', phoneNumber, {
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
		payload: axios.post('http://192.168.0.121:5000/api/v1/users/signup', userData, {
			'Content-Type': 'application/x-www-form-urlencoded',
		}),
	}
}

export const logout = () => {
	return {
		type: 'LOGOUT',
	}
}

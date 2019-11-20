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

import React, {Component} from 'react'
import {View, TextInput} from 'react-native'

export default class InputOTP extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	render() {
		return (
			<View style={style.inputOtp}>
				<View style={style.OTP}>
					<TextInput placeholder="1" style={style.textInput} />
				</View>
				<View style={style.OTP}>
					<TextInput placeholder="1" style={style.textInput} />
				</View>
				<View style={style.OTP}>
					<TextInput placeholder="1" style={style.textInput} />
				</View>
				<View style={style.OTP}>
					<TextInput placeholder="1" style={style.textInput} />
				</View>
			</View>
		)
	}
}
const style = {
	textButton: {justifyContent: 'flex-end', color: '#fff', fontSize: 20},
	inputOtp: {
		flex: 2,
		flexDirection: 'row',
		justifyContent: 'center',
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		backgroundColor: 'blue',
		alignItems: 'center',
	},
	OTP: {
		flex: 1,
		height: 40,
		width: 30,
		margin: 10,
		alignContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
		backgroundColor: '#F5F5F5',
	},
	textInput: {
		borderRadius: 10,
	},
}

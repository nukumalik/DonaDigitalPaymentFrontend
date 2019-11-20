/* eslint-disable no-unused-vars */
import React, {Component} from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'
import {Button} from 'native-base'
import PinView from 'react-native-pin-view'
import qs from 'qs'

//import component
import Thumnailscycle from '../../component/Thumnailscycle'
import ModalOTP from '../../component/ModalOTP'
import InputOTP from '../../component/InputOTP'
import Pin from '../../component/Pin'

import {connect} from 'react-redux'
import {phoneCheck} from '../../redux/action/user'

class Login extends Component {
	constructor(props) {
		super(props)
		this.state = {
			phoneNumber: '',
			phoneNumberProps: '',
			isNext: true,
			nextOpct: 0.5,
			isLoading: false,
			hasAccount: false,
			isPhoneChecked: false,
		}
	}

	phoneNumberHandle = phoneNumber => {
		if (phoneNumber === '0') {
			return ''
		}

		if (phoneNumber.length >= 9) {
			this.setState({
				isNext: false,
				nextOpct: 1,
			})
			console.log(this.state.isNext)
		} else {
			this.setState({
				isNext: true,
				nextOpct: 0.5,
			})
		}
		// if (phoneNumber === '123456789') {
		// 	this.setState({
		// 		hasAccount: true,
		// 	})
		// }
		console.log(phoneNumber)
		this.setState({phoneNumber})
	}

	onButtonNextHandle = () => {
		let dataCheck = {
			phone: this.state.phoneNumber,
		}
		this.setState({
			isPhoneChecked: true,
			phoneNumberProps: this.state.phoneNumber,
		})
		this.props.dispatch(phoneCheck(qs.stringify(dataCheck)))
	}

	onLogin = code => {
		let dataLogin = {
			phone: this.state.phoneNumber,
			pin: code,
		}
		this.props.dispatch(login(qs.stringify(dataLogin)))
	}

	render() {
		const {phoneNumber, isNext, nextOpct} = this.state
		return (
			<View style={style.container}>
				<View style={style.head}>
					<View style={{flex: 5, marginLeft: 50}}>
						<Text style={style.text}> dona </Text>
					</View>
					<View style={{flex: 1}}>
						{/* <Button transparent disabled={isNext}>
							<Text
								style={{
									opacity: nextOpct,
									justifyContent: 'flex-end',
									color: '#fff',
									fontSize: 20,
								}}>
								Lanjut
							</Text>
						</Button> */}
						<ModalOTP
							hasAccount={this.state.hasAccount}
							isPhoneChecked={this.state.isPhoneChecked}
							next={isNext}
							phoneNumber={this.state.phoneNumberProps}
							onButtonNextHandle={this.onButtonNextHandle}
						/>
					</View>
				</View>

				<Text style={style.NormalText}> Masukan nomor telepon anda untuk masuk atau buat akun baru.</Text>
				<View style={style.phoneWrap}>
					<Text style={style.Country}>+62</Text>
					<TextInput
						autoFocus={true}
						keyboardType="phone-pad"
						style={style.phoneNumber}
						placeholderTextColor="white"
						maxLength={13}
						placeholder="Nomor Telepon"
						onChangeText={this.phoneNumberHandle}
						value={phoneNumber}
						blurOnSubmit={false}
					/>
				</View>
				<View style={style.company}>
					<Text style={style.NormalText}>DANA juga terhubung dengan</Text>
				</View>

				<View style={style.head}>
					<Thumnailscycle image="https://cdn6.aptoide.com/imgs/c/1/5/c15fae86d87009d6adc48f673eacb63a_icon.png?w=240" />
					<Thumnailscycle image="https://lh3.googleusercontent.com/J9ybXP72Fxpp5BzWcDyXUgeRiPhGii6f_jXK1PMYmHrt-pAdkFh8Uynk2salu5RI-qBG" />
					<Thumnailscycle image="https://lh3.googleusercontent.com/FcRZx_UEXN2uc7uKM5EKGn7Jmb65c8VVELlmligxdfUcjKKIpzFX0SHXFePllD2g4ik" />
					<Thumnailscycle image="https://www.razaulkarim.com/wp-content/uploads/2018/10/and-many-more.png" />
				</View>
			</View>
		)
	}
}

const mapStateToProps = state => ({
	user: state.user,
})

export default connect(mapStateToProps)(Login)

const style = StyleSheet.create({
	container: {
		flex: 1,
		//justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
		backgroundColor: '#108EE9',
	},
	head: {flexDirection: 'row', marginTop: 10},
	textHolder: {
		justifyContent: 'flex-end',
		color: '#fff',
		fontSize: 20,
	},
	text: {
		fontSize: 35,
		fontWeight: 'bold',
		textTransform: 'uppercase',
		fontFamily: 'I hate Comic Sans',
		color: '#fff',
		textAlign: 'center',
		letterSpacing: 10,
	},
	NormalText: {
		fontSize: 17,
		color: '#fff',
		marginLeft: 30,
		marginRight: 30,
		opacity: 0.7,
		textAlign: 'center',
	},

	Country: {
		fontSize: 30,
		color: '#fff',
		opacity: 0.4,
		marginTop: 10,
		alignItems: 'flex-end',
	},
	phoneNumber: {
		fontSize: 30,
		color: '#fff',
		opacity: 0.4,
		marginLeft: 10,
		marginBottom: -7,
		borderBottomWidth: 1,
		borderBottomColor: 'white',
		borderBottomLeftRadius: 100,
		borderBottomRightRadius: 100,
	},
	phoneWrap: {
		flexDirection: 'row',

		justifyContent: 'center',
		marginTop: 50,
	},
	company: {
		marginTop: 40,
	},
	imageThumbnails: {
		borderRadius: 125,
		width: 40,
		height: 40,
		borderColor: 'black',
		borderWidth: 1,
		backgroundColor: 'white',
		marginLeft: 10,
	},
})

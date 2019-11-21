/* eslint-disable no-unused-vars */
import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import {Button} from 'native-base'
import PinView from 'react-native-pin-view'
import qs from 'qs'
import {connect} from 'react-redux'
import {phoneCheck} from '../../redux/action/user'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {TextInput} from 'react-native-gesture-handler'
import SmoothPinCodeInput from 'react-native-smooth-pincode-input'

class InputProfile extends Component {
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
			code: '',
		}
	}
	render() {
		const {phoneNumber, code, isNext, nextOpct} = this.state
		return (
			<View style={style.container}>
				<View style={style.head}>
					<View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
						<Button
							transparent
							onPress={() => {
								this.props.navigation.navigate('Login')
							}}>
							<Text style={{color: 'white'}}>Batalkan</Text>
						</Button>
					</View>
					<View style={{flex: 4}}>
						<Text style={style.text}>dona</Text>
					</View>

					<View style={{flex: 1, justifyContent: 'center'}}>
						<Button
							transparent
							onPress={() => {
								this.props.navigation.navigate('Home')
							}}>
							<Text style={{color: 'white'}}>Lanjut</Text>
						</Button>
					</View>
				</View>
				<View style={{height: '70%', width: '80%', marginTop: 5, alignItems: 'center'}}>
					<View>
						<Text style={style.NormalText}>(Langkah 3/3)</Text>
					</View>
					<View>
						<Text style={style.NormalText}>Buat PIN untuk Mengamankan Akun DANA Anda</Text>
						<Text style={style.NormalText}>Masukan lagi PIN DANA Anda</Text>
					</View>
					<View style={{marginTop: 30, width: '30%', backgroundColor: 'white'}}>
						{/* <Pin /> */}
						<View style={style.container}>
							{/* Custom placeholder & mask */}
							<View style={style.section}>
								<SmoothPinCodeInput
									ref={this.pinInput}
									value={code}
									codeLength={6}
									autoFocus={true}
									onTextChange={code => this.setState({code})}
									onFulfill={this._checkCode}
									onBackspace={() => console.log('No more back.')}
									placeholder={
										<View
											style={{
												width: 5,
												height: 5,
												borderRadius: 25,
												opacity: 0.3,
												backgroundColor: '#05558E',
											}}></View>
									}
									mask={
										<View
											style={{
												width: 5,
												height: 5,
												borderRadius: 25,

												backgroundColor: '#05558E',
											}}></View>
									}
									maskDelay={1000}
									password={true}
									cellStyle={null}
									cellStyleFocused={null}
									value={code}
								/>
							</View>
						</View>
					</View>
				</View>
				<View style={style.head}>
					<View style={{flex: 5}}></View>
				</View>
			</View>
		)
	}
}

const mapStateToProps = state => ({
	user: state.user,
})

export default connect(mapStateToProps)(InputProfile)
const text = 'Dengan menekan tombol Lanjut, Anda setuju dengan syarat & Ketentuan yang berlaku'

const style = StyleSheet.create({
	container: {
		flex: 1,
		//justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
		backgroundColor: '#108EE9',
	},
	phoneNumber: {
		fontSize: 20,
		color: '#fff',
		opacity: 0.8,
		marginLeft: 10,
		marginBottom: -7,
		borderBottomWidth: 1,
		borderBottomColor: 'white',
		borderBottomLeftRadius: 100,
		borderBottomRightRadius: 100,
	},
	head: {
		flexDirection: 'row',
		marginTop: 10,
	},
	textHolder: {
		justifyContent: 'flex-end',
		color: '#fff',
		fontSize: 20,
		opacity: 0.5,
	},
	text: {
		fontSize: 35,
		fontWeight: 'bold',
		textTransform: 'uppercase',
		fontFamily: 'Strenuous',
		color: '#fff',
		textAlign: 'center',
		letterSpacing: 10,
	},
	NormalText: {
		fontSize: 12,
		color: '#fff',
		marginLeft: 30,
		marginRight: 30,
		marginTop: 20,
		opacity: 0.7,
		textAlign: 'center',
	},
	button: {
		backgroundColor: 'white',
		borderRadius: 10,
		justifyContent: 'center',
		marginLeft: 40,
		height: 40,
		marginRight: 40,
	},
	textButton: {
		color: '#108EE9',
		fontSize: 17,
	},
})

import React, {Component} from 'react'
import {View, Text, TextInput} from 'react-native'
import {Button, Spinner} from 'native-base'
import RBSheet from 'react-native-raw-bottom-sheet'
import SmoothPinCodeInput from 'react-native-smooth-pincode-input'
import {withNavigationFocus, withNavigation} from 'react-navigation'
import qs from 'qs'
import {connect} from 'react-redux'
import {login} from '../redux/action/user'

class ModalOTP extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isLoading: false,
			hasAccount: false,
			code: '',
			isChecked: false,
			onOTP: false,
			isRBSheetOpened: false,
		}
	}

	_checkPhoneNumber = number => {
		console.log(this.state.hasAccount)
		if (number === '12345') {
			this.setState({hasAccount: true})
			console.log(this.state.hasAccount)
		}
		console.log(number)
	}

	pinInput = React.createRef()

	_checkCode = code => {
		let dataLogin = {
			phone: this.props.phoneNumber,
			pin: code,
		}
		this.props
			.dispatch(login(qs.stringify(dataLogin)))
			.then(() => {
				if (this.props.user.isLogin) {
					this.props.navigation.navigate('Home')
					this.setState({isChecked: true})
					this.RBSheet.close()
				} else {
					this.pinInput.current.shake().then(() => this.setState({code: ''}))
				}
			})
			.catch(err => {
				this.pinInput.current.shake().then(() => this.setState({code: ''}))
			})
	}

	render() {
		const {isLoading, hasAccount, code, onOTP} = this.state
		this._checkPhoneNumber(this.props.number)
		if (this.props.isPhoneChecked && !this.state.isRBSheetOpened && !this.props.user.isLoading) {
			this.RBSheet.open()
			this.setState({isLoading: true, isRBSheetOpened: true})
		}
		return (
			<View>
				{isLoading && <Spinner size="small" color="white" style={{marginTop: -20}}></Spinner>}
				{!isLoading && (
					<Button transparent disabled={this.props.next} onPress={this.props.onButtonNextHandle}>
						<Text style={style.textButton}>Lanjut</Text>
					</Button>
				)}

				<RBSheet
					ref={ref => {
						this.RBSheet = ref
					}}
					height={200}
					duration={200}
					// onClose={this.setState({isLoading: false})}
					customStyles={{
						container: {
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'stretch',
							borderTopLeftRadius: 20,
							borderTopRightRadius: 20,
						},
					}}>
					{!this.props.user.isRegistered && !this.state.isChecked && (
						<View style={{flex: 1}}>
							<View style={{flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column', alignContent: 'center'}}>
								<Text style={{fontWeight: 'bold', margin: 10}}>Masukan OTP</Text>
								<Text>Kode OTP telah dikirim ke nomor Anda</Text>
							</View>

							<View style={{flex: 1, justifyContent: 'center', flexDirection: 'row'}}>
								<View>
									<TextInput
										onChangeText={() => {
											this.secondTextInput.focus()
										}}
										blurOnSubmit={false}
										autoFocus={true}
										{...props}
										style={style.textInput}
									/>
								</View>
								<View>
									<TextInput
										ref={input => {
											this.secondTextInput = input
										}}
										onChangeText={() => {
											this.thirdTextInput.focus()
										}}
										blurOnSubmit={false}
										{...props}
										style={style.textInput}
									/>
								</View>
								<View>
									<TextInput
										ref={input => {
											this.thirdTextInput = input
										}}
										onChangeText={() => {
											this.LastTextInput.focus()
										}}
										blurOnSubmit={false}
										{...props}
										style={style.textInput}
									/>
								</View>
								<View>
									<TextInput
										ref={input => {
											this.LastTextInput = input
										}}
										blurOnSubmit={false}
										{...props}
										style={style.textInput}
										onChangeText={() => {
											this.props.navigation.navigate('InputProfile')
											this.RBSheet.close()
										}}
									/>
								</View>
							</View>
							<View style={{flex: 1, justifyContent: 'flex-end', marginRight: 20, flexDirection: 'row'}}>
								{/* <Button transparent>
								<Text style={style.textfooter}>kirim via sms</Text>
							</Button>
							<Button transparent>
								<Text style={style.textfooter}>kirim via whatsapp</Text>
							</Button> */}
								<Button transparent>
									<Text style={{fontSize: 17, color: '#BFBFBF', textTransform: 'uppercase', fontWeight: 'bold'}}>kirim ulang (500)</Text>
								</Button>
							</View>
						</View>
					)}
					{this.props.user.isRegistered && !this.state.isChecked && (
						<View style={{flex: 1}}>
							<View style={{flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column', alignContent: 'center'}}>
								<Text style={{fontWeight: 'bold', margin: 10}}>Anda Telah terdaftar di DANA melalui DANA App</Text>
								<Text>Masukan PIN DANA ANDA</Text>
							</View>
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
													backgroundColor: 'black',
												}}></View>
										}
										mask={
											<View
												style={{
													width: 5,
													height: 5,
													borderRadius: 25,
													backgroundColor: 'black',
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

							<View style={{flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column', alignContent: 'center'}}>
								<Button transparent>
									<Text style={style.textfooter}>Lupa PIN?</Text>
								</Button>
							</View>
						</View>
					)}
					{this.onOTP && (
						<View style={{flex: 1}}>
							<View style={{flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column', alignContent: 'center'}}>
								<Text style={{fontWeight: 'bold', margin: 10}}>Masukan PIN DANA anda</Text>
								{/* <Text>Masukan PIN DANA ANDA</Text> */}
							</View>
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
													backgroundColor: 'black',
												}}></View>
										}
										mask={
											<View
												style={{
													width: 5,
													height: 5,
													borderRadius: 25,
													backgroundColor: 'black',
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
					)}
				</RBSheet>
			</View>
		)
	}
}

const YourOwnComponent = () => {}

const mapStateToProps = state => ({
	user: state.user,
})

export default connect(mapStateToProps)(withNavigation(ModalOTP))

const props = {
	maxLength: 1,
	keyboardType: 'number-pad',
}

const style = {
	textButton: {
		justifyContent: 'flex-end',
		color: '#fff',
		fontSize: 15,
	},
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		borderRadius: 10,
		paddingHorizontal: 30,
		alignItems: 'center',
	},
	body: {
		flex: 1,
		height: 40,
		width: 30,
		margin: 10,
		alignContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
		backgroundColor: '#F5F5F5',
		justifyContent: 'center',
	},
	textInput: {
		borderRadius: 10,
		width: 70,
		height: 50,
		margin: 5,
		fontSize: 30,
		alignContent: 'center',
		textAlign: 'center',
		backgroundColor: '#F5F5F5',
	},
	textfooter: {
		color: '#108EE9',
		textTransform: 'uppercase',
	},

	container: {
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	section: {
		alignItems: 'center',
		margin: 16,
	},
	title: {
		fontSize: 16,
		fontWeight: 'bold',
		marginBottom: 8,
	},
}

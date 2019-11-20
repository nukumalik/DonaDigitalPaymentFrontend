import React, {Component} from 'react'
import {View, Text, TextInput} from 'react-native'
import {Button, Spinner} from 'native-base'
import RBSheet from 'react-native-raw-bottom-sheet'

import Pin from './Pin'

class Example extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isLoading: false,
			hasAccount: false,
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

	render() {
		const {isLoading, hasAccount} = this.state
		this._checkPhoneNumber(this.props.number)
		return (
			<View>
				{isLoading && <Spinner size="small" color="white" style={{marginTop: -20}}></Spinner>}
				{!isLoading && (
					<Button
						transparent
						disabled={this.props.next}
						onPress={() => {
							this.RBSheet.open()
							this.setState({isLoading: true})
						}}>
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
					{!this.props.hasAccount && (
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
					{this.props.hasAccount && (
						<View style={{flex: 1}}>
							<View style={{flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column', alignContent: 'center'}}>
								<Text style={{fontWeight: 'bold', margin: 10}}>Anda Telah terdaftar di DANA melalui DANA App</Text>
								<Text>Masukan PIN DANA ANDA</Text>
							</View>
							<Pin />
							<View style={{flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column', alignContent: 'center'}}>
								<Button transparent>
									<Text style={style.textfooter}>Lupa PIN?</Text>
								</Button>
							</View>
						</View>
					)}
				</RBSheet>
			</View>
		)
	}
}

const YourOwnComponent = () => {}

export default Example

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
}

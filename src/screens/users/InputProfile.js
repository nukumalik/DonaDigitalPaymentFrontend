/* eslint-disable no-unused-vars */
import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native'
import {Button} from 'native-base'
import PinView from 'react-native-pin-view'
import qs from 'qs'
import {connect} from 'react-redux'
import {createUserData} from '../../redux/action/user'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {TextInput} from 'react-native-gesture-handler'

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
		}
	}

	onButtonDaftarHandle = () => {
		let userData = {
			name: this.state.phoneNumber,
		}
		this.props.dispatch(createUserData(userData))
		this.props.navigation.navigate('InputPIN')
	}
	render() {
		const {phoneNumber, isNext, nextOpct} = this.state
		return (
			<ScrollView contentContainerStyle={style.container}>
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
						<Button transparent onPress={this.onButtonDaftarHandle}>
							<Text style={{color: 'white'}}>Daftar</Text>
						</Button>
					</View>
				</View>
				<View style={{height: '70%', width: '80%', marginTop: 5, alignItems: 'center'}}>
					<View>
						<Text style={style.NormalText}>(Langkah 1/3)</Text>
					</View>
					<View>
						<Text style={style.NormalText}>Atur gambar dan nama panggilan Anda Sehingga teman anda akan mudah mengenali Anda</Text>
					</View>
					<View
						style={{
							height: 80,
							width: 80,
							backgroundColor: '#A0D2F5',
							alignItems: 'center',
							marginTop: 40,
							justifyContent: 'center',
							borderRadius: 125,
						}}>
						<Icon name="camera" size={40} style={{color: 'white'}} />
					</View>

					<View style={{marginTop: 30}}>
						<TextInput
							autoFocus={true}
							style={style.phoneNumber}
							placeholderTextColor="white"
							maxLength={13}
							placeholder="Nama"
							onChangeText={value => {
								this.setState({phoneNumber: value})
							}}
							value={phoneNumber}
							blurOnSubmit={false}
						/>
					</View>
				</View>
				<View style={style.head}>
					<View style={{flex: 5}}></View>
				</View>
			</ScrollView>
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

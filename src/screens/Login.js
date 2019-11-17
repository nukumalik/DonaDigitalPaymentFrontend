/* eslint-disable no-unused-vars */
import React, {Component} from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'

//import component
import Thumnailscycle from '../component/Thumnailscycle'
export default class Login extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<View style={style.container}>
				<View style={style.head}>
					<View style={{flex: 5, marginLeft: 50}}>
						<Text style={style.text}> dona </Text>
					</View>
					<View style={{flex: 1}}>
						<Text style={style.textHolder}> Lanjut </Text>
					</View>
				</View>
				<Text style={style.NormalText}> Masukan nomor telepon anda untuk masuk atau buat akun baru.</Text>
				<View style={style.phoneWrap}>
					<Text style={style.Country}>+62</Text>
					<TextInput keyboardType="number-pad" style={style.phoneNumber} placeholderTextColor="white" maxLength={13} placeholder="Nomor Telepon" />
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

const style = StyleSheet.create({
	container: {
		flex: 1,
		//justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
		backgroundColor: '#108EE9',
	},
	head: {flexDirection: 'row', height: 80, marginTop: 10},
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
		fontFamily: 'strenuousbl',
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
	},
	phoneNumber: {
		fontSize: 30,
		color: '#fff',
		opacity: 0.4,
		marginLeft: 10,
		marginBottom: -5,
		lineHeight: 2,
		borderBottomWidth: 1,
		borderBottomColor: 'white',
		borderBottomLeftRadius: 100,
		borderBottomRightRadius: 100,
	},
	phoneWrap: {
		flexDirection: 'row',
		height: 40,
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

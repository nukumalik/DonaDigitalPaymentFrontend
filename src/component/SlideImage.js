import React, {Component} from 'react'

import {StyleSheet, View, Text, Platform, Button} from 'react-native'

import AppIntroSlider from 'react-native-app-intro-slider'

export default class PreLogin extends Component {
	constructor(props) {
		super(props)
		this.state = {
			show_Main_App: false,
		}
	}

	on_Done_all_slides = () => {
		this.setState({show_Main_App: true})
	}

	on_Skip_slides = () => {
		this.setState({show_Main_App: true})
	}
	render() {
		return <AppIntroSlider showNextButton={false} showDoneButton={false} slides={slides} />
	}
}
const styles = StyleSheet.create({
	MainContainer: {
		backgroundColor: 'red',
		paddingTop: Platform.OS === 'ios' ? 20 : 0,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: 18,
		color: '#fff',
		fontWeight: '900',
		textAlign: 'center',
		fontFamily: 'ionicons',
	},
	text: {
		color: '#fff',
		fontSize: 12,
		justifyContent: 'center',
	},
	image: {
		width: 300,
		height: 300,
		resizeMode: 'contain',
	},
})
const t1 = 'Aktifkan akun DANA sekarang dan dapatkan kemudahan bertransaksi seperti pulsa, tagihan, dan cicilan'
const t2 = 'DANA dilengkap sistem Keamanan dan sistem penyimpanan data tercanggih yang menjamin uang dan seluruh transaksi kamu 100% aman!'
const t3 = 'Kirim DANA ke siapa saja, kemanapun dan kapanpun tanpa biaya!'
const slides = [
	{
		key: 'k1',
		title: 'AKTIFKAN DANA',
		text: t1,
		image: require('../images/1.png'),
		titleStyle: styles.title,
		textStyle: styles.text,
		imageStyle: styles.image,
		backgroundColor: '#108EE9',
	},
	{
		key: 'k2',
		title: 'DIJAMIN 100% AMAN',
		text: t2,
		image: require('../images/2.png'),
		titleStyle: styles.title,
		textStyle: styles.text,
		imageStyle: styles.image,
		backgroundColor: '#108EE9',
	},
	{
		key: 'k3',
		title: 'KIRIM DANA',
		text: t3,
		image: require('../images/3.png'),
		titleStyle: styles.title,
		textStyle: styles.text,
		imageStyle: styles.image,
		backgroundColor: '#108EE9',
	},
]

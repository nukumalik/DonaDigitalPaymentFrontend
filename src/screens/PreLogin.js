import React from 'react'
import {Text, View} from 'react-native'
import SlideImage from '../component/SlideImage'

const componentName = props => {
	return (
		<View style={style.container}>
			<Text style={style.text}>dona</Text>
			<SlideImage
				textTitle="aktifkan dana"
				image="https://cms.dailysocial.id/wp-content/uploads/2018/10/9e12032f6dadef834b42d3430d97e4fb_DANA.png"
				textFooter={text}
			/>
		</View>
	)
}

export default componentName
const text = 'Aktifkan Akun dana anda sekarang dan dapatkan kemudahan bertransaksi seperti pulsa, tagihan, dan cicilan'
const style = {
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
		fontFamily: 'Strenuous',
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
}

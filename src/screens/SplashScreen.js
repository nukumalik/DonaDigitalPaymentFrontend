import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export default class SplashScreen extends Component {
	constructor(props) {
		super(props)
		this.state = {
		}
	}

	render() {
		return (
			<View style={style.container}>
				<Text style={style.Text}>dana</Text>
			</View>
		)
	}
}
const style = StyleSheet.create({
	container:{
		flex: 1,
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
		backgroundColor:'#108EE9',
	},
	Text: {
		fontSize: 40,
		fontWeight: 'bold',
		textTransform: 'uppercase',
		fontFamily:'Strenuous',
		color: '#fff',
		letterSpacing: 10,
	}

})
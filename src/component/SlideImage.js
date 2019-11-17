import React, {Component} from 'react'

import {StyleSheet, View, Text, Platform} from 'react-native'

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
		if (this.state.show_Main_App) {
			return (
				<View style={styles.MainContainer}>
					<Text style={{textAlign: 'center', fontSize: 20, color: '#000'}}>This is your main App screen After App Intro.</Text>
				</View>
			)
		} else {
			return <AppIntroSlider slides={slides} onDone={this.on_Done_all_slides} showSkipButton={true} onSkip={this.on_Skip_slides} />
		}
	}
}
const styles = StyleSheet.create({
	MainContainer: {
		backgroundColor: 'red',
		paddingTop: Platform.OS === 'ios' ? 20 : 0,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 20,
	},
	title: {
		fontSize: 26,
		color: '#fff',
		fontWeight: 'bold',
		textAlign: 'center',
		marginTop: 20,
	},
	text: {
		color: '#fff',
		fontSize: 15,
	},
	image: {
		width: 100,
		height: 100,
		resizeMode: 'contain',
	},
})

const slides = [
	{
		key: 'k1',
		title: 'AKTIFKAN DANA',
		text: 'Best Event Organizers',
		image: {
			uri: 'https://reactnativecode.com/wp-content/uploads/2019/04/calendar.png',
		},
		titleStyle: styles.title,
		textStyle: styles.text,
		imageStyle: styles.image,
		backgroundColor: '#108EE9',
	},
	{
		key: 'k2',
		title: 'DIJAMIN 100% AMAN',
		text: 'Latest Weather Reports',
		image: {
			uri: 'https://reactnativecode.com/wp-content/uploads/2019/04/cloud.png',
		},
		titleStyle: styles.title,
		textStyle: styles.text,
		imageStyle: styles.image,
		backgroundColor: '#108EE9',
	},
	{
		key: 'k3',
		title: 'KIRIM DANA',
		text: 'Latest Technology Reports',
		image: {
			uri: 'https://reactnativecode.com/wp-content/uploads/2019/04/computer.png',
		},
		titleStyle: styles.title,
		textStyle: styles.text,
		imageStyle: styles.image,
		backgroundColor: '#108EE9',
	},
]

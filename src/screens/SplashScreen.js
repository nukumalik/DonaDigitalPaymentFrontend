import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {Colors} from 'react-native/Libraries/NewAppScreen'

import {connect} from 'react-redux'

import AsyncStorage from '@react-native-community/async-storage'
import {keepLogin} from '../redux/action/user'

class SplashScreen extends Component {
	constructor(props) {
		super(props)
		this.state = {
			balance: 0,
		}
	}

	async componentDidMount() {
		try {
			const userData = await AsyncStorage.getItem('userData')
			const token = await AsyncStorage.getItem('token')
			if (userData !== null && token !== null) {
				this.props.dispatch(keepLogin(JSON.parse(userData), token))
			}
		} catch (e) {
			// error reading value
		}
		if (this.props.user.isLogin) {
			this.props.navigation.navigate('Home')
		} else {
			setTimeout(() => {
				this.props.navigation.navigate('PreLogin')
			}, 1000)
		}
	}

	render() {
		return (
			<View style={style.container}>
				<Text style={style.Text}>dona</Text>
			</View>
		)
	}
}

const mapStateToProps = state => ({
	user: state.user,
})

export default connect(mapStateToProps)(SplashScreen)

const style = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
		backgroundColor: '#108EE9',
	},
	Text: {
		fontSize: 40,
		fontWeight: 'bold',
		textTransform: 'uppercase',
		fontFamily: 'Strenuous',
		color: '#fff',
		letterSpacing: 10,
	},
})

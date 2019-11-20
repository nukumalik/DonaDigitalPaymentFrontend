import React, {Component} from 'react'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

//import page
import SplashScreen from './src/screens/SplashScreen'
import Login from './src/screens/users/Login'
import PreLogin from './src/screens/users/PreLogin'
import ListTransaction from './src/screens/transactions/ListTransaction'
import DetailTransaction from './src/screens/transactions/DetailTransaction'
import Pulsa from './src/screens/pulses/Pulsa'

export default class App extends Component {
	render() {
		return <AppContainer />
	}
}
const StackNavigation = createStackNavigator(
	{
		SplashScreen: {screen: SplashScreen},
		Login: {screen: Login},
		PreLogin: {screen: PreLogin},
		ListTransaction: {screen: ListTransaction},
		DetailTransaction: {screen: DetailTransaction},
		Pulsa: {screen: Pulsa},
	},
	{
		initialRouteName: 'Pulsa',
		headerMode: 'none',
	}
)
const AppContainer = createAppContainer(StackNavigation)

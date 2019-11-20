import React, {Component} from 'react'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

//import page
import SplashScreen from './src/screens/SplashScreen'
import Login from './src/screens/users/Login'
import PreLogin from './src/screens/users/PreLogin'
<<<<<<< HEAD
import Home from './src/screens/Home'
import Pin from './src/component/Pin'
import ModalOTP from './src/component/ModalOTP'
import ListBerita from './src/component/ListBerita'
=======
import ListTransaction from './src/screens/transactions/ListTransaction'
import DetailTransaction from './src/screens/transactions/DetailTransaction'
import Pulsa from './src/screens/pulses/Pulsa'
>>>>>>> 6902ddac931e2348aa8d02ebda9a3b426fc775af

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
<<<<<<< HEAD
		Home: {screen: Home},
		Pin: {screen: Pin},
		ModalOTP: {screen: ModalOTP},
		ListBerita: {screen: ListBerita},
	},
	{
		initialRouteName: 'Home',
=======
		ListTransaction: {screen: ListTransaction},
		DetailTransaction: {screen: DetailTransaction},
		Pulsa: {screen: Pulsa},
	},
	{
		initialRouteName: 'Pulsa',
>>>>>>> 6902ddac931e2348aa8d02ebda9a3b426fc775af
		headerMode: 'none',
	}
)
const AppContainer = createAppContainer(StackNavigation)

import React, {Component} from 'react'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

//redux
import {Provider} from 'react-redux'
import store from './src/redux/store'

//import page
import SplashScreen from './src/screens/SplashScreen'
import Login from './src/screens/users/Login'
import PreLogin from './src/screens/users/PreLogin'
import Home from './src/screens/Home'
import Pin from './src/component/Pin'
import ModalOTP from './src/component/ModalOTP'
import ListBerita from './src/component/ListBerita'
import ListTransaction from './src/screens/transactions/ListTransaction'
import DetailTransaction from './src/screens/transactions/DetailTransaction'
import Pulsa from './src/screens/pulses/Pulsa'

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<AppContainer />
			</Provider>
		)
	}
}
const StackNavigation = createStackNavigator(
	{
		SplashScreen: {screen: SplashScreen},
		Login: {screen: Login},
		PreLogin: {screen: PreLogin},
		Pin: {screen: Pin},
		Home: {screen: Home},
		ModalOTP: {screen: ModalOTP},
		ListBerita: {screen: ListBerita},
		ListTransaction: {screen: ListTransaction},
		DetailTransaction: {screen: DetailTransaction},
		Pulsa: {screen: Pulsa},
	},
	{
		initialRouteName: 'SplashScreen',
		headerMode: 'none',
	}
)
const AppContainer = createAppContainer(StackNavigation)

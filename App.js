import React, {Component} from 'react'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

//redux
import {Provider} from 'react-redux'
import store from './src/redux/store'

//import page
import SplashScreen from './src/screens/SplashScreen'
import Login from './src/screens/users/Login'
import InputProfile from './src/screens/users/InputProfile'
import InputPIN from './src/screens/users/InputPIN'
import InputPIN2 from './src/screens/users/InputPIN2'
import PreLogin from './src/screens/users/PreLogin'
import Home from './src/screens/Home'
import Pin from './src/component/Pin'
import ModalOTP from './src/component/ModalOTP'
import ListBerita from './src/component/ListBerita'
import ListTransaction from './src/screens/transactions/ListTransaction'
import DetailTransaction from './src/screens/transactions/DetailTransaction'
import Topup from './src/screens/transactions/Topup'
import TopupDetail from './src/screens/transactions/TopupDetail'
import Pulsa from './src/screens/pulses/Pulsa'
import TabNav from './src/screens/tabs'

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
		Topup: {screen: Topup},
		TopupDetail: {screen: TopupDetail},
		Pulsa: {screen: Pulsa},
		InputProfile: {screen: InputProfile},
		InputPIN: {screen: InputPIN},
		InputPIN2: {screen: InputPIN2},
		TabNav: {screen: TabNav},
	},
	{
		initialRouteName: 'SplashScreen',
		headerMode: 'none',
	}
)
const AppContainer = createAppContainer(StackNavigation)

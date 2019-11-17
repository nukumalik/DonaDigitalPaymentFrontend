import React, {Component} from 'react'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

//import page
import SplashScreen from './src/screens/SplashScreen'
import Login from './src/screens/Login'
import PreLogin from './src/screens/PreLogin'

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
	},
	{
		initialRouteName: 'PreLogin',
		headerMode: 'none',
	}
)
const AppContainer = createAppContainer(StackNavigation)

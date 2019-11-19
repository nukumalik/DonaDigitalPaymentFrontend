import React, {Component} from 'react'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

//import page
import SplashScreen from './src/screens/SplashScreen'
import Login from './src/screens/users/Login'
import PreLogin from './src/screens/users/PreLogin'
import Home from './src/screens/Home'

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
		Home: {screen: Home},
	},
	{
		initialRouteName: 'Home',
		headerMode: 'none',
	}
)
const AppContainer = createAppContainer(StackNavigation)

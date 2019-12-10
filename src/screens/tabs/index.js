/* eslint-disable react/react-in-jsx-scope */
import React from 'react'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

//page import

import users from './users'
import home from './home'
import riwayat from './riwayat'
import devmod from './devmod'

export default createBottomTabNavigator({
	Home: {
		screen: home,
		navigationOptions: {
			title: 'Home',
			tabBarIcon: ({tintColor}) => <Icon size={20} name="home" color={tintColor} />,
		},
	},
	RIWAYAT: {
		screen: riwayat,

		navigationOptions: {
			title: 'Riwayat',
			tabBarIcon: ({tintColor}) => <Icon size={20} name="list-alt" color={tintColor} />,
		},
	},
	PLAY: {
		screen: devmod,
		navigationOptions: {
			title: 'Pay',
			tabBarIcon: ({tintColor}) => <Icon size={20} name="barcode" color={tintColor} />,
		},
	},
	POCKET: {
		screen: devmod,
		navigationOptions: {
			title: 'Pocket',
			tabBarIcon: ({tintColor}) => <Icon size={20} name="get-pocket" color={tintColor} />,
		},
	},
	PROFILE: {
		screen: users,
		navigationOptions: {
			title: 'Profile',
			tabBarIcon: ({tintColor}) => <Icon size={20} name="user-circle" color={tintColor} />,
		},
	},
})

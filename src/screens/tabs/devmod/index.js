import React, {Component} from 'react'
import {View, Text} from 'react-native'

export default class index extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
				<Text style={{fontSize: 20}}> Coming Soon . . . </Text>
			</View>
		)
	}
}

import React, {Component} from 'react'
import {View, Text, Image} from 'react-native'
import {Card, CardItem, Icon} from 'native-base'
import IconVector from 'react-native-vector-icons/MaterialCommunityIcons'

export default class ScrollContent extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<View style={{flex: 1, borderRadius: 5, height: 220, marginRight: 10, width: 170, justifyContent: 'center', backgroundColor: '#108EE9'}}>
				<View style={{flex: 1, margin: 20, justifyContent: 'center'}}>
					<Text style={{textAlign: 'center', color: 'white'}}>Cara Mengisi dompet DANA anda</Text>
				</View>
				<View style={{flex: 4, alignItems: 'center', justifyContent: 'center'}}>
					<Image source={{uri: 'https://i.imgur.com/UYiroysl.jpg', height: 100, width: 100}} style={{borderRadius: 125}}></Image>
				</View>
				<View style={{flex: 1, display: 'flex', alignItems: 'flex-end', padding: 10}}>
					<IconVector size={30} color="white" name="play-circle-outline" />
				</View>
			</View>
		)
	}
}

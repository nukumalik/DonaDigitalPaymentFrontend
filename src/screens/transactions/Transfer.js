import React from 'react'
import {TouchableOpacity, Text, View} from 'react-native'
import {Header, Left, Body, Right, Button, Item, Input, Label} from 'native-base'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Transfer = props => {
	return (
		<>
			<Header style={{backgroundColor: '#108EE9'}}>
				<Left>
					<Button transparent onPress={() => props.navigation.navigate('Home')}>
						<Icon name="chevron-left" size={30} style={{color: '#fff'}} />
					</Button>
				</Left>
				<Body style={{alignItems: 'flex-end'}}>
					<Text style={{color: '#fff', fontSize: 18}}>Kirim DONA</Text>
				</Body>
				<Right></Right>
			</Header>
			<View style={{padding: 20}}>
				<Text style={{fontSize: 24}}>Siapa yang ingin</Text>
				<Text style={{fontSize: 24}}>Anda kirim?</Text>
				<Text style={{color: 'gray'}}>Silahkan memilih penerima</Text>
			</View>
			<View style={{padding: 20}}>
				<Item style={{marginBottom: 20}} floatingLabel>
					<Label>Nomer Ponsel</Label>
					<Input />
				</Item>
				<Item style={{marginBottom: 20}} floatingLabel>
					<Label>Jumlah</Label>
					<Input />
				</Item>
				<Button style={{justifyContent: 'center', backgroundColor: '#108EE9', elevation: 0}}>
					<Text style={{color: '#fff'}}>Kirim</Text>
				</Button>
			</View>
		</>
	)
}

export default Transfer

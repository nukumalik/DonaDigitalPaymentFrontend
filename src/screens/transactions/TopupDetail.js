import React from 'react'
import {TouchableOpacity, Text, View} from 'react-native'
import {Header, Left, Body, Right, Input, Item, Label, Row, Col, Button, Content} from 'native-base'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {ScrollView} from 'react-native-gesture-handler'

const TopupDetail = props => {
	return (
		<>
			<Header style={{backgroundColor: '#108EE9'}}>
				<Left>
					<TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
						<Icon name="chevron-left" size={35} style={{color: '#fff'}} />
					</TouchableOpacity>
				</Left>
				<Body>
					<Text style={{color: '#fff', fontSize: 18}}>Top Up</Text>
				</Body>
				<Right></Right>
			</Header>
			<Content>
				<View style={{height: 130, backgroundColor: '#fafafa'}}>
					<Row style={{justifyContent: 'center', alignItems: 'center', paddingHorizontal: 10, paddingVertical: 20}}>
						<Col>
							<Item floatingLabel>
								<Label>Nomor Kartu</Label>
								<Input />
							</Item>
						</Col>
						<Col style={{width: '10%'}}>
							<Icon name="information-outline" size={25} style={{color: '#108EE9'}} />
						</Col>
					</Row>
				</View>
				<View style={{padding: 10, marginBottom: 200}}>
					<Row>
						<Col style={{width: '10%', marginTop: 40, alignItems: 'center'}}>
							<Text style={{fontSize: 16}}>Rp</Text>
						</Col>
						<Col>
							<Text>Top Up</Text>
							<Item>
								<Input placeholder="Jumlah" placeholderTextColor="#dedede" style={{fontSize: 20}} />
							</Item>
							<Text style={{color: '#d8d8d8', paddingTop: 10}}>Biaya transaksi sesuai dengan kebijakan Bank</Text>
						</Col>
					</Row>
				</View>
				<View style={{paddingHorizontal: 20, alignItems: 'center'}}>
					<Text style={{color: '#dedede', fontSize: 12}}>Saldo maksimum Anda adalah Rp10.000.000</Text>
					<Text style={{color: '#dedede', fontSize: 12}}>Maksimum nilai penambahan saldo adalah Rp10.000.000</Text>
					<Text style={{color: '#dedede', fontSize: 12}}>Sisa akumulatif saldo Anda bulan ini untuk isi saldo adalah</Text>
					<Text style={{color: '#dedede', fontSize: 12}}>Rp20.000.000</Text>
				</View>
				<Button style={{margin: 10, backgroundColor: '#108EE9', elevation: 0, justifyContent: 'center', alignItems: 'center'}}>
					<Text style={{fontSize: 18, color: '#fff'}}>KONFIRMASI</Text>
				</Button>
			</Content>
		</>
	)
}

export default TopupDetail

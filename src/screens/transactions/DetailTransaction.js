import React from 'react'
import {View, Text, Image} from 'react-native'
import {Container, Content, Row, Col, Button} from 'native-base'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const DetailTransaction = props => {
	return (
		<Container>
			<Content>
				<Row style={{padding: 5}}>
					<Col style={{width: '33%', alignItems: 'center', justifyContent: 'center'}}>
						<View style={{padding: 15, backgroundColor: '#B6B6B6', borderRadius: 50}}>
							<Icon name="cancel" size={25} style={{color: '#fff'}} />
						</View>
					</Col>
					<Col style={{borderBottomWidth: 1, borderBottomColor: '#ddd', paddingBottom: 15}}>
						<Text style={{fontSize: 24, color: '#4A4A4A'}}>Kedaluwarsa</Text>
						<Text style={{color: '#4A4A4A', fontSize: 16}}>Waktu pembayaran habis</Text>
					</Col>
				</Row>
				<Row style={{borderBottomWidth: 1, borderBottomColor: '#ddd', paddingHorizontal: 5, paddingTop: 5, paddingBottom: 15}}>
					<Col style={{width: '33%', alignItems: 'center', justifyContent: 'center'}}>
						<View style={{borderWidth: 1, borderColor: '#bbb', borderRadius: 50, padding: 5}}>
							<Icon name="cellphone-android" size={20} style={{color: '#FF675C'}} />
						</View>
					</Col>
					<Col>
						<Text style={{color: '#4A4A4A', fontSize: 16, marginBottom: 5}}>Pulsa internet Rp20.000 082291031015</Text>
						<Text style={{color: '#4A4A4A', fontSize: 16}}>DANA Pulsa</Text>
					</Col>
				</Row>
				<Row style={{padding: 15}}>
					<Col style={{justifyContent: 'center'}}>
						<Text style={{fontSize: 16, color: '#4a4a4a'}}>Total</Text>
					</Col>
					<Col>
						<Text style={{color: '#FB8B01', fontSize: 24, marginLeft: 'auto'}}>RP20.000</Text>
					</Col>
				</Row>
				<View
					style={{
						backgroundColor: '#FAFAFA',
						paddingHorizontal: 15,
						paddingVertical: 10,
						borderTopWidth: 1,
						borderBottomWidth: 1,
						borderColor: '#F5F5F7',
					}}>
					<Text style={{color: 'gray'}}>DETAIL PEMBAYARAN</Text>
				</View>
				<View style={{paddingHorizontal: 15, paddingVertical: 8}}>
					<Text style={{color: '#c1c1c1', fontSize: 16}}>Tanggal Transaksi</Text>
					<Text style={{color: '#717171', fontSize: 15}}>17 November 2019, 11:19:52</Text>
				</View>
				<Row style={{paddingHorizontal: 15, paddingVertical: 8}}>
					<Col>
						<Text style={{color: '#c1c1c1', fontSize: 16}}>ID Transaksi</Text>
						<Text style={{color: '#717171', fontSize: 15}}>2019 1117 1112 1280 0100 1663 9...</Text>
					</Col>
					<Col style={{width: '25%', justifyContent: 'center', alignItems: 'center'}}>
						<Button
							style={{
								justifyContent: 'center',
								alignItems: 'center',
								backgroundColor: '#fff',
								elevation: 0,
								paddingHorizontal: 10,
								height: 35,
								borderColor: '#3AA2EC',
								borderWidth: 1,
								borderRadius: 3,
							}}>
							<Text style={{color: '#3AA2EC'}}>SALIN</Text>
						</Button>
					</Col>
				</Row>
				<View style={{paddingHorizontal: 15, paddingVertical: 8}}>
					<Text style={{color: '#c1c1c1', fontSize: 16}}>Order ID Merchant</Text>
					<Text style={{color: '#717171', fontSize: 15}}>20191117111300000200166009025493739</Text>
				</View>
				<View style={{paddingHorizontal: 15, paddingVertical: 8}}>
					<Text style={{color: '#c1c1c1', fontSize: 16}}>Layanan Pelanggan</Text>
					<Text style={{color: '#717171', fontSize: 15}}>1500445</Text>
				</View>
				<View style={{padding: 15}}>
					<Image source={require('../../../assets/images/danaprotaction.png')} style={{height: 26, width: 250}} />
				</View>
			</Content>
		</Container>
	)
}

export default DetailTransaction

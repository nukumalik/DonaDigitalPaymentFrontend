import React, {useState} from 'react'
import {Text, View, ScrollView, TouchableOpacity} from 'react-native'
import {Tabs, Tab, Content, Header, Left, Body, Right, Row, Col, Card, CardItem, Container, Input, Button} from 'native-base'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import {connect} from 'react-redux'
import {transaction} from '../../redux/action/transactions'

const Pulsa = props => {
	const [phone, setPhone] = useState()

	const onCardPressHandle = amount => {
		let dataTransactions = {
			type: 'ppob',
			amount: amount,
			phone: phone,
			type_ppob: 'pulsa',
		}
		props.dispatch(transaction(props.user.userData.id, dataTransactions)).then(() => props.navigation.navigate('TabNav'))
	}

	return (
		<>
			<Header style={style.header}>
				<Left>
					<Icon name="chevron-left" size={35} style={{color: '#fff'}} />
				</Left>
				<Body>
					<Text style={{color: '#fff', fontSize: 18}}>Isi Ulang</Text>
				</Body>
				<Right></Right>
			</Header>
			<View style={{height: 80, backgroundColor: 'pink'}}></View>
			<Row style={{padding: 15, height: 80}}>
				<Col>
					<Row>
						<Col>
							<Text style={{fontWeight: 'bold'}}>Nomor HP</Text>
						</Col>
						<Col>
							<Text style={{color: '#108EE9'}}>No. Pascabayar ?</Text>
						</Col>
					</Row>
					<Row style={{borderWidth: 1, borderColor: '#DFDFE5', height: 40, marginTop: 25, borderRadius: 4}}>
						<Col>
							<Input style={{height: 20}} onChangeText={value => setPhone(value)} />
						</Col>
						<Col style={{width: '20%'}}></Col>
					</Row>
				</Col>
				<Col style={{width: '15%', justifyContent: 'flex-end', alignItems: 'center'}}>
					<Icon name="contacts" size={25} style={{color: '#108EE9', marginBottom: -8}} />
				</Col>
			</Row>
			<Container>
				<Tabs
					style={{paddingHorizontal: 10, marginTop: 20, elevation: 0, borderBottomColor: '#DFDFE5'}}
					tabStyle={{backgroundColor: '#FAFAFA'}}
					tabContainerStyle={{backgroundColor: '#fafafa', elevation: 0}}
					tabBarUnderlineStyle={{height: 0}}>
					<Tab
						initialPage
						heading="Pulsa"
						style={{backgroundColor: '#fafafa'}}
						activeTabStyle={style.activeTabStyle}
						activeTextStyle={{color: '#108EE9', fontWeight: 'bold'}}
						textStyle={{color: '#B6B6B6'}}
						tabStyle={style.tabStyle}>
						<Content>
							<View style={{backgroundColor: '#fff'}}>
								{/* <ScrollView style={{backgroundColor: '#fff'}}> */}
								<Row>
									<Col style={style.col}>
										<Card style={style.card}>
											<Row>
												<Col style={{width: 25}}>
													<Text style={{color: '#616161', fontSize: 20, fontWeight: 'bold'}}>15</Text>
												</Col>
												<Col>
													<Text style={{color: '#616161', fontWeight: 'bold'}}>Rb</Text>
												</Col>
											</Row>
											<Text style={{fontSize: 16, color: '#108EE9'}}>Harga Rp15.000</Text>
										</Card>
									</Col>
									<Col style={style.col}>
										<Card style={style.card}>
											<Row>
												<Col style={{width: 25}}>
													<Text style={{color: '#616161', fontSize: 20, fontWeight: 'bold'}}>20</Text>
												</Col>
												<Col>
													<Text style={{color: '#616161', fontWeight: 'bold'}}>Rb</Text>
												</Col>
											</Row>
											<Text style={{fontSize: 16, color: '#108EE9'}}>Harga Rp20.000</Text>
										</Card>
									</Col>
								</Row>
								<Row>
									<Col style={style.col}>
										<Card style={style.card}>
											<Row>
												<Col style={{width: 25}}>
													<Text style={{color: '#616161', fontSize: 20, fontWeight: 'bold'}}>25</Text>
												</Col>
												<Col>
													<Text style={{color: '#616161', fontWeight: 'bold'}}>Rb</Text>
												</Col>
											</Row>
											<Text style={{fontSize: 16, color: '#108EE9'}}>Harga Rp25.000</Text>
										</Card>
									</Col>
									<Col style={style.col}>
										<Card style={style.card}>
											<Row>
												<Col style={{width: 25}}>
													<Text style={{color: '#616161', fontSize: 20, fontWeight: 'bold'}}>30</Text>
												</Col>
												<Col>
													<Text style={{color: '#616161', fontWeight: 'bold'}}>Rb</Text>
												</Col>
											</Row>
											<Text style={{fontSize: 16, color: '#108EE9'}}>Harga Rp30.000</Text>
										</Card>
									</Col>
								</Row>
								<Row>
									<Col style={style.col}>
										<Card style={style.card}>
											<Row>
												<Col style={{width: 25}}>
													<Text style={{color: '#616161', fontSize: 20, fontWeight: 'bold'}}>40</Text>
												</Col>
												<Col>
													<Text style={{color: '#616161', fontWeight: 'bold'}}>Rb</Text>
												</Col>
											</Row>
											<Text style={{fontSize: 16, color: '#108EE9'}}>Harga Rp40.000</Text>
										</Card>
									</Col>
									<Col style={style.col}>
										<TouchableOpacity onPress={() => onCardPressHandle(50000)}>
											<Card style={style.card}>
												<Row>
													<Col style={{width: 25}}>
														<Text style={{color: '#616161', fontSize: 20, fontWeight: 'bold'}}>50</Text>
													</Col>
													<Col>
														<Text style={{color: '#616161', fontWeight: 'bold'}}>Rb</Text>
													</Col>
												</Row>
												<Text style={{fontSize: 16, color: '#108EE9'}}>Harga Rp50.000</Text>
											</Card>
										</TouchableOpacity>
									</Col>
								</Row>
								<Row>
									<Col style={style.col}>
										<Card style={style.card}>
											<Row>
												<Col style={{width: 25}}>
													<Text style={{color: '#616161', fontSize: 20, fontWeight: 'bold'}}>75</Text>
												</Col>
												<Col>
													<Text style={{color: '#616161', fontWeight: 'bold'}}>Rb</Text>
												</Col>
											</Row>
											<Text style={{fontSize: 16, color: '#108EE9'}}>Harga Rp75.000</Text>
										</Card>
									</Col>
									<Col style={style.col}>
										<Card style={style.card}>
											<Row>
												<Col style={{width: 35}}>
													<Text style={{color: '#616161', fontSize: 20, fontWeight: 'bold'}}>100</Text>
												</Col>
												<Col>
													<Text style={{color: '#616161', fontWeight: 'bold'}}>Rb</Text>
												</Col>
											</Row>
											<Text style={{fontSize: 16, color: '#108EE9'}}>Harga Rp100.000</Text>
										</Card>
									</Col>
								</Row>
								{/* </ScrollView> */}
							</View>
						</Content>
					</Tab>
					<Tab
						heading="Paket Data"
						style={{backgroundColor: '#fafafa'}}
						activeTabStyle={style.activeTabStyle}
						activeTextStyle={{color: '#108EE9', fontWeight: 'bold'}}
						textStyle={{color: '#B6B6B6'}}
						tabStyle={style.tabStyle}>
						<Content>
							<View
								style={{
									borderWidth: 1,
									borderRadius: 4,
									borderColor: '#dfdfe5',
									width: '94%',
									marginVertical: 10,
								}}>
								<View style={{padding: 15}}>
									<Text style={{color: '#616161', fontWeight: 'bold', fontSize: 18, marginBottom: 5}}>Pulsa Internet Rp20.000</Text>
									<Text style={{color: '#108EE9', fontWeight: 'bold', fontSize: 16}}>Harga Rp20.000</Text>
								</View>
								<Button
									transparent
									style={{borderTopWidth: 1, borderTopColor: '#dfdfe5', justifyContent: 'center', alignItems: 'center', height: 35}}>
									<Text style={{color: '#108EE9'}}>Tampilkan semua</Text>
								</Button>
							</View>
							<View
								style={{
									borderWidth: 1,
									borderRadius: 4,
									borderColor: '#dfdfe5',
									width: '94%',
									marginVertical: 10,
								}}>
								<View style={{padding: 15}}>
									<Text style={{color: '#616161', fontWeight: 'bold', fontSize: 18, marginBottom: 5}}>Pulsa Internet Rp25.000</Text>
									<Text style={{color: '#108EE9', fontWeight: 'bold', fontSize: 16}}>Harga Rp25.000</Text>
								</View>
								<Button
									transparent
									style={{borderTopWidth: 1, borderTopColor: '#dfdfe5', justifyContent: 'center', alignItems: 'center', height: 35}}>
									<Text style={{color: '#108EE9'}}>Tampilkan semua</Text>
								</Button>
							</View>
							<View
								style={{
									borderWidth: 1,
									borderRadius: 4,
									borderColor: '#dfdfe5',
									width: '94%',
									marginVertical: 10,
								}}>
								<View style={{padding: 15}}>
									<Text style={{color: '#616161', fontWeight: 'bold', fontSize: 18, marginBottom: 5}}>Paket Bicara 40K</Text>
									<Text style={{color: '#108EE9', fontWeight: 'bold', fontSize: 16}}>Harga Rp40.000</Text>
								</View>
								<Button
									transparent
									style={{borderTopWidth: 1, borderTopColor: '#dfdfe5', justifyContent: 'center', alignItems: 'center', height: 35}}>
									<Text style={{color: '#108EE9'}}>Tampilkan semua</Text>
								</Button>
							</View>
							<View
								style={{
									borderWidth: 1,
									borderRadius: 4,
									borderColor: '#dfdfe5',
									width: '94%',
									marginVertical: 10,
								}}>
								<View style={{padding: 15}}>
									<Text style={{color: '#616161', fontWeight: 'bold', fontSize: 18, marginBottom: 5}}>Pulsa Internet Rp20.000</Text>
									<Text style={{color: '#108EE9', fontWeight: 'bold', fontSize: 16}}>Harga Rp20.000</Text>
								</View>
								<Button
									transparent
									style={{borderTopWidth: 1, borderTopColor: '#dfdfe5', justifyContent: 'center', alignItems: 'center', height: 35}}>
									<Text style={{color: '#108EE9'}}>Tampilkan semua</Text>
								</Button>
							</View>
							<View
								style={{
									borderWidth: 1,
									borderRadius: 4,
									borderColor: '#dfdfe5',
									width: '94%',
									marginVertical: 10,
								}}>
								<View style={{padding: 15}}>
									<Text style={{color: '#616161', fontWeight: 'bold', fontSize: 18, marginBottom: 5}}>Pulsa Internet Rp20.000</Text>
									<Text style={{color: '#108EE9', fontWeight: 'bold', fontSize: 16}}>Harga Rp20.000</Text>
								</View>
								<Button
									transparent
									style={{borderTopWidth: 1, borderTopColor: '#dfdfe5', justifyContent: 'center', alignItems: 'center', height: 35}}>
									<Text style={{color: '#108EE9'}}>Tampilkan semua</Text>
								</Button>
							</View>
						</Content>
					</Tab>
				</Tabs>
			</Container>
		</>
	)
}

const mapStateToProps = state => ({
	user: state.user,
})

export default connect(mapStateToProps)(Pulsa)

const style = {
	header: {
		backgroundColor: '#108EE9',
	},
	col: {
		padding: 3,
		width: '48%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	card: {
		padding: 15,
		elevation: 0,
	},
	tabStyle: {
		backgroundColor: '#FAFAFA',
		marginHorizontal: 5,
		elevation: 0,
		borderTopLeftRadius: 5,
		borderTopRightRadius: 5,
		borderLeftWidth: 1,
		borderLeftColor: '#DFDFE5',
		borderRightWidth: 1,
		borderRightColor: '#DFDFE5',
		borderTopWidth: 1,
		borderTopColor: '#DFDFE5',
	},
	activeTabStyle: {
		backgroundColor: '#fff',
		marginHorizontal: 5,
		borderTopLeftRadius: 5,
		borderTopRightRadius: 5,
		borderLeftWidth: 1,
		borderLeftColor: '#DFDFE5',
		borderRightWidth: 1,
		borderRightColor: '#DFDFE5',
		borderTopWidth: 1,
		borderTopColor: '#DFDFE5',
	},
}

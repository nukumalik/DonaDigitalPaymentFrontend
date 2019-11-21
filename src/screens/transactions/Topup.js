import React from 'react'
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native'
import {Header, Row, Col, Left, Body, Right, Button} from 'native-base'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Topup = props => {
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
			<ScrollView>
				<View style={{backgroundColor: '#fafafa', paddingHorizontal: 15, paddingVertical: 10}}>
					<Text style={{color: '#929292'}}>PILIH METODE ISI SALDO</Text>
				</View>
				<TouchableOpacity onPress={() => props.navigation.navigate('TopupDetail')}>
					<Row style={{borderBottomColor: '#f2f2f2', borderBottomWidth: 1}}>
						<Col style={{width: '20%', alignItems: 'center', paddingTop: 10}}>
							<View style={{padding: 5, borderRadius: 50, backgroundColor: '#FF9100'}}>
								<Icon name="credit-card" size={20} style={{color: '#fff'}} />
							</View>
						</Col>
						<Col>
							<Row>
								<Col>
									<Text
										style={{
											color: '#616161',
											borderBottomColor: '#F2F2F2',
											borderBottomWidth: 1,
											paddingTop: 5,
											paddingBottom: 20,
											fontSize: 18,
										}}>
										Kartu Debit
									</Text>
									<Row style={{backgroundColor: '#fff', elevation: 0, paddingVertical: 10, alignItems: 'center'}}>
										<Col style={{width: 50}}>
											<View style={{padding: 2, marginRight: 'auto', borderWidth: 1, borderColor: '#f2f2f2', borderRadius: 50}}>
												<Icon name="plus-circle" size={25} style={{color: '#108EE9'}} />
											</View>
										</Col>
										<Col>
											<Text>Kartu Baru</Text>
										</Col>
										<Col style={{alignItems: 'center', width: 40}}>
											<Icon name="chevron-right" size={30} />
										</Col>
									</Row>
								</Col>
							</Row>
						</Col>
					</Row>
				</TouchableOpacity>
				<Row style={{borderBottomColor: '#f2f2f2', borderBottomWidth: 1}}>
					<Col style={{width: '20%', alignItems: 'center', paddingTop: 10}}>
						<View style={{padding: 5, borderRadius: 50, backgroundColor: '#7C4DFF'}}>
							<Icon name="swap-horizontal-bold" size={20} style={{color: '#fff'}} />
						</View>
					</Col>
					<Col>
						<Row>
							<Col>
								<Text
									style={{
										color: '#616161',
										borderBottomColor: '#F2F2F2',
										borderBottomWidth: 1,
										paddingTop: 5,
										paddingBottom: 20,
										fontSize: 18,
									}}>
									Transfer Bank
								</Text>
								<Row
									style={{
										backgroundColor: '#fff',
										elevation: 0,
										paddingVertical: 10,
										alignItems: 'center',
										borderBottomWidth: 1,
										borderBottomColor: '#f2f2f2',
									}}>
									<Col style={{width: 50}}>
										<View style={{padding: 2, marginRight: 'auto', borderWidth: 1, borderColor: '#f2f2f2', borderRadius: 50}}>
											<Image
												source={{
													uri: 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0020/6119/brand.gif?itok=jFxqILi3',
												}}
												style={{width: 20, height: 20}}
											/>
										</View>
									</Col>
									<Col>
										<Text>BCA</Text>
									</Col>
									<Col style={{alignItems: 'center', width: 40}}>
										<Icon name="chevron-right" size={30} />
									</Col>
								</Row>
								<Row
									style={{
										backgroundColor: '#fff',
										elevation: 0,
										paddingVertical: 10,
										alignItems: 'center',
										borderBottomWidth: 1,
										borderBottomColor: '#f2f2f2',
									}}>
									<Col style={{width: 50}}>
										<View style={{padding: 2, marginRight: 'auto', borderWidth: 1, borderColor: '#f2f2f2', borderRadius: 50}}>
											<Image
												source={{
													uri:
														'https://2.bp.blogspot.com/-N2RjhIto-5A/V15O0fIAb1I/AAAAAAAAAJI/2FrCO4Kc0fs0g6pRGQ5BLR1aVqbZGShSQCLcB/s640/1.png',
												}}
												style={{width: 20, height: 20}}
											/>
										</View>
									</Col>
									<Col>
										<Text>BRI</Text>
										<Text style={{fontSize: 11, color: 'gray'}}>Hanya tersedia pada 00:30-21:30</Text>
									</Col>
									<Col style={{alignItems: 'center', width: 40}}>
										<Icon name="chevron-right" size={30} />
									</Col>
								</Row>
								<Row
									style={{
										backgroundColor: '#fff',
										elevation: 0,
										paddingVertical: 10,
										alignItems: 'center',
										borderBottomWidth: 1,
										borderBottomColor: '#f2f2f2',
									}}>
									<Col style={{width: 50}}>
										<View
											style={{
												padding: 2,
												width: 25,
												height: 25,
												marginRight: 'auto',
												borderWidth: 1,
												borderColor: '#f2f2f2',
												borderRadius: 50,
												alignItems: 'center',
												justifyContent: 'center',
											}}>
											<Image
												source={{uri: 'https://upload.wikimedia.org/wikipedia/id/thumb/5/55/BNI_logo.svg/800px-BNI_logo.svg.png'}}
												style={{width: 18, height: 5}}
											/>
										</View>
									</Col>
									<Col>
										<Text>BNI</Text>
										<Text style={{fontSize: 11, color: 'gray'}}>Menerima transfer dari bank lain</Text>
									</Col>
									<Col style={{alignItems: 'center', width: 40}}>
										<Icon name="chevron-right" size={30} />
									</Col>
								</Row>
								<Row
									style={{
										backgroundColor: '#fff',
										elevation: 0,
										paddingVertical: 10,
										alignItems: 'center',
										borderBottomColor: '#f2f2f2',
										borderBottomWidth: 1,
									}}>
									<Col style={{width: 50}}>
										<View
											style={{
												padding: 2,
												width: 25,
												height: 25,
												justifyContent: 'center',
												alignItems: 'center',
												marginRight: 'auto',
												borderWidth: 1,
												borderColor: '#f2f2f2',
												borderRadius: 50,
											}}>
											<Image
												source={{
													uri:
														'https://1.bp.blogspot.com/-pBKWWv4H0YY/V15O0ZSZO9I/AAAAAAAAAJE/Xps9eUzp6q8hLNuvYTCtm9CaiyAdiaoCACKgB/s1600/Bank-Mandiri-Logo-Vector-Image.png',
												}}
												style={{width: 20, height: 10}}
											/>
										</View>
									</Col>
									<Col>
										<Text>Mandiri</Text>
										<Text style={{fontSize: 11, color: 'gray'}}>Menerima transfer dari bank lain</Text>
									</Col>
									<Col style={{alignItems: 'center', width: 40}}>
										<Icon name="chevron-right" size={30} />
									</Col>
								</Row>
								<View style={{paddingVertical: 10}}>
									<Text style={{color: '#108EE9', fontSize: 17}}>Lihat semua bank</Text>
									<Text style={{color: 'gray'}}>CIMB Niaga, Panin dan Bank lainnya</Text>
								</View>
							</Col>
						</Row>
					</Col>
				</Row>
				<Row style={{paddingVertical: 30, paddingHorizontal: 10}}>
					<Col style={{width: '20%', alignItems: 'center'}}>
						<View style={{padding: 5, width: 30, borderRadius: 50, backgroundColor: '#FFC400'}}>
							<Icon name="store" size={20} style={{color: '#fff'}} />
						</View>
					</Col>
					<Col>
						<Text>Agen</Text>
						<Text style={{fontSize: 12}}>Temukan Top Up Agen</Text>
						<Text>terdekat!</Text>
					</Col>
					<Col style={{width: '30%'}}>
						<Button
							transparent
							style={{borderWidth: 1, alignItems: 'center', justifyContent: 'center', elevation: 0, borderColor: '#108EE9', borderRadius: 3}}>
							<Text style={{color: '#108EE9'}}>LIHAT AGEN</Text>
						</Button>
					</Col>
				</Row>
			</ScrollView>
		</>
	)
}

export default Topup

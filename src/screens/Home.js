import React, {Component} from 'react'
import {View, Text, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native'
import {Button, Card, CardItem, Left, Row, Col, Body, Right, Thumbnail, List, ListItem} from 'native-base'
import {} from 'react-native-gesture-handler'

import Corousel from '../component/Corousel'
import ScrollContent from '../component/ScrollContent'
import ListBerita from '../component/ListBerita'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import SafeAreaView from 'react-native-safe-area-view'

import {NavigationEvents} from 'react-navigation'

import {connect} from 'react-redux'
import {getBalance} from '../redux/action/balance'

class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			balance: 0,
		}
	}

	componentDidMount() {
		this.props.dispatch(getBalance(this.props.user.userData.id)).then(() => {
			this.setState({balance: this.props.balance.amount})
		})
	}

	render() {
		return (
			<View style={{flex: 1}}>
				<NavigationEvents onDidFocus={() => this.componentDidMount()} />
				<View style={{flex: 1}}>
					{/* Header section */}
					<View style={{height: 110, backgroundColor: '#108EE9'}}>
						{/* Header section 1*/}
						<View style={{flex: 2, flexDirection: 'row', padding: 10}}>
							<View style={{flex: 1}}>
								<View
									style={{
										flex: 1,
										width: 80,
										alignItems: 'center',
										justifyContent: 'space-between',
										flexDirection: 'row',
										position: 'relative',
									}}>
									<Image source={require('../../assets/images/logo.png')} />
									<Text style={{color: 'white', fontSize: 10, opacity: 0.8}}>Rp</Text>
									<Text style={style.textNavHeader}>{this.state.balance}</Text>
									<Icon size={15} color="white" name="chevron-down" />
								</View>
							</View>
							<View style={{flex: 1, alignItems: 'flex-end'}}>
								<Image source={require('../../assets/images/pesan.png')} />
							</View>
						</View>

						{/* Header section 2*/}
						<View style={{flex: 1, flexDirection: 'row', marginTop: 20, marginBottom: 20, padding: 10}}>
							<View style={style.iconHeader}>
								<Image source={require('../../assets/images/pindai.png')} />
								<Text style={style.textNavHeader}>Pindai</Text>
							</View>
							<TouchableOpacity style={{flex: 1}} onPress={() => this.props.navigation.navigate('Topup')}>
								<View style={style.iconHeader}>
									<Image source={require('../../assets/images/isisaldo.png')} />
									<Text style={style.textNavHeader}>Isi Saldo</Text>
								</View>
							</TouchableOpacity>
							<View style={style.iconHeader}>
								<Image source={require('../../assets/images/kirim.png')} />
								<Text style={style.textNavHeader}>Kirim</Text>
							</View>
							<View style={style.iconHeader}>
								<Image source={require('../../assets/images/minta.png')} />
								<Text style={style.textNavHeader}>Minta</Text>
							</View>
						</View>
					</View>
					<ScrollView>
						{/* Fav menu section */}
						<View style={{height: 110, backgroundColor: '#108EE9', alignItems: 'center'}}></View>
						{/* View Card */}
						<View style={{marginTop: -110, alignItems: 'center'}}>
							<View
								style={{
									flexDirection: 'column',
									height: 300,
									backgroundColor: 'white',
									shadowColor: '#545454',
									alignSelf: 'stretch',
									shadowRadius: 12,
									shadowOpacity: 1,
									elevation: 4,
									borderRadius: 5,
									justifyContent: 'space-between',
									padding: 20,
									marginHorizontal: 15,
								}}>
								{/* Beli pulsa yuk */}
								<View
									style={{
										flexDirection: 'row',
										justifyContent: 'space-between',
									}}>
									<View style={{flexDirection: 'row'}}>
										<Image source={require('../../assets/images/pulsa.png')} />
										<View style={{marginLeft: 10}}>
											<Text style={{fontWeight: 'bold'}}>Pulsa</Text>
											<Text style={{color: '#FB9313', fontSize: 10}}>Beli Pulsa Yuk!</Text>
										</View>
									</View>

									<Button
										title="Beli"
										onPress={() => this.props.navigation.navigate('Pulsa')}
										style={{
											borderRadius: 5,
											width: 80,
											height: 30,
											justifyContent: 'center',
											alignItems: 'center',
											backgroundColor: '#108EE9',
										}}>
										<Text style={{color: 'white'}}>Beli</Text>
									</Button>
								</View>

								{/* Icon POP */}
								<View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
									<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
										<Image source={require('../../assets/images/games.png')} />
										<Text style={style.textMenu}>Games</Text>
									</View>
									<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
										<Image source={require('../../assets/images/vocer.png')} />
										<Text style={style.textMenu}>Digital Voucher</Text>
									</View>
									<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
										<Image source={require('../../assets/images/saldo.png')} />
										<Text style={style.textMenu}>Tarik Saldo</Text>
									</View>
									<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
										<Image source={require('../../assets/images/listrik.png')} />
										<Text style={style.textMenu}>Listrik</Text>
									</View>
								</View>
								<View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
									<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
										<Image source={require('../../assets/images/air.png')} />
										<Text style={style.textMenu}>Air</Text>
									</View>
									<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
										<Image source={require('../../assets/images/bpjs.png')} />
										<Text style={style.textMenu}>BPJS</Text>
									</View>
									<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
										<Image source={require('../../assets/images/kaget.png')} />
										<Text style={style.textMenu}>DANA Kaget</Text>
									</View>
									<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
										<Image source={require('../../assets/images/lain.png')} />
										<Text style={style.textMenu}>Lihat Semua</Text>
									</View>
								</View>
							</View>
							<View style={{flex: 1, alignSelf: 'stretch', marginHorizontal: 15, borderRadius: 5}}>
								<Card style={{height: 140}}>
									<CardItem>
										<Left>
											<Body>
												<Text style={{fontSize: 12, fontWeight: 'bold'}}>Ada Promo Apa?</Text>
												<Text style={{fontSize: 10}}>Hidup lebih indah dengan promo!</Text>
											</Body>
										</Left>
										<Right>
											<Button
												style={{
													width: 100,
													justifyContent: 'center',
													borderColor: '#108EE9',
													height: 35,
													borderRadius: 5,
												}}
												bordered>
												<Text style={{color: '#108EE9'}}>LIHAT SEMUA</Text>
											</Button>
										</Right>
									</CardItem>
									<CardItem cardBody>
										<Corousel />
									</CardItem>
								</Card>
							</View>
							<View style={{flex: 1, marginTop: 10, alignSelf: 'stretch', marginHorizontal: 15, borderRadius: 5}}>
								<SafeAreaView>
									<ScrollView horizontal>
										<ScrollContent title="Cara Mengisi dompet DANA anda" image="https://i.imgur.com/UYiroysl.jpg" color="#076AB1" />
										<ScrollContent
											title="Cara membayar di toko menggunakan DANA"
											image="https://i.imgur.com/UYiroysl.jpg"
											color="#108EE9"
										/>
										<ScrollContent
											title="Kirim uang semakin mudah! Lihat disini caranya"
											image="https://i.imgur.com/UYiroysl.jpg"
											color="#076AB1"
										/>
										<ScrollContent title="Minta DANA dari teman kamu" image="https://i.imgur.com/UYiroysl.jpg" color="#108EE9" />
										<ScrollContent
											title="DANA melindungi transaksi anda dengan jaminan 100%"
											image="https://i.imgur.com/UYiroysl.jpg"
											color="#076AB1"
										/>
										<ScrollContent
											title="Pindai kode QR untuk melakukan pembayaran"
											image="https://i.imgur.com/UYiroysl.jpg"
											color="#108EE9"
										/>
										<ScrollContent title="Isi Saldo di Alfamart" image="https://i.imgur.com/UYiroysl.jpg" color="#076AB1" />
										<ScrollContent title="Hubungkan kartu dan kredit kamu" image="https://i.imgur.com/UYiroysl.jpg" color="#108EE9" />
									</ScrollView>
								</SafeAreaView>
							</View>

							{/* Nearby */}
							<View style={{flex: 1, alignSelf: 'stretch', marginHorizontal: 15, borderRadius: 5}}>
								<Card style={{height: 140}}>
									<CardItem>
										<Left>
											<Body>
												<Text style={{fontSize: 12, fontWeight: 'bold'}}>Nearby Me</Text>
												<Text style={{fontSize: 10}}>Temukan merchant DANA didekat kamu!</Text>
											</Body>
										</Left>
										<Right>
											<Button
												style={{
													width: 100,
													justifyContent: 'center',
													borderColor: '#108EE9',
													height: 35,
													borderRadius: 5,
												}}
												bordered>
												<Text style={{color: '#108EE9'}}>LIHAT SEMUA</Text>
											</Button>
										</Right>
									</CardItem>
									<CardItem style={{backgroundColor: '#F0F9FF'}}>
										<View style={{flex: 1, justifyContent: 'center', marginLeft: 10}}>
											<Thumbnail small source={{uri: 'https://i.imgur.com/UYiroysl.jpg'}} />
											<Text style={{fontSize: 10}}>0,2 km</Text>
										</View>
										<View style={{flex: 1, justifyContent: 'center', marginLeft: 10}}>
											<Thumbnail small source={{uri: 'https://i.imgur.com/UYiroysl.jpg'}} />
											<Text style={{fontSize: 10}}>0,2 km</Text>
										</View>
										<View style={{flex: 1, justifyContent: 'center', marginLeft: 10}}>
											<Thumbnail small source={{uri: 'https://i.imgur.com/UYiroysl.jpg'}} />
											<Text style={{fontSize: 10}}>0,2 km</Text>
										</View>
										<View style={{flex: 1, justifyContent: 'center', marginLeft: 10}}>
											<Thumbnail small source={{uri: 'https://i.imgur.com/UYiroysl.jpg'}} />
											<Text style={{fontSize: 10}}>0,2 km</Text>
										</View>
										<View style={{flex: 1, justifyContent: 'center', marginLeft: 10}}>
											<Thumbnail small source={{uri: 'https://i.imgur.com/UYiroysl.jpg'}} />
											<Text style={{fontSize: 10}}>0,2 km</Text>
										</View>
									</CardItem>
								</Card>
							</View>
							{/* Daftar Berita */}
							<View style={{flex: 1, alignSelf: 'stretch', marginHorizontal: 15, borderRadius: 5}}>
								<ListBerita />
							</View>
						</View>
					</ScrollView>
				</View>

				{/* Bottom Navigation  */}
				{/* <View
					style={{
						height: 70,
						flexDirection: 'row',
						shadowColor: '#545454',
						shadowRadius: 12,
						shadowOpacity: 1,
						elevation: 4,
					}}>
					<View style={style.iconNav}>
						<Image source={require('../../assets/images/beranda.png')} />
						<Text>Beranda</Text>
					</View>

					<TouchableOpacity onPress={() => this.props.navigation.navigate('ListTransaction')}>
						<View style={style.iconNav}>
							<Image source={require('../../assets/images/riwayat.png')} />
							<Text>Riwayat</Text>
						</View>
					</TouchableOpacity>

					<View style={style.iconNav}>
						<Image source={require('../../assets/images/pay.png')} />
					</View>

					<View style={style.iconNav}>
						<Image source={require('../../assets/images/pocket.png')} />
						<Text>Pocket</Text>
					</View>

					<View style={style.iconNav}>
						<Image source={require('../../assets/images/saya.png')} />
						<Text>Saya</Text>
					</View>
				</View> */}
			</View>
		)
	}
}

const mapStateToProps = state => ({
	user: state.user,
	balance: state.balance,
})

export default connect(mapStateToProps)(Home)

const style = StyleSheet.create({
	textNavHeader: {
		color: 'white',
		fontSize: 12,
		marginLeft: 5,
		fontWeight: 'bold',
	},
	textMenu: {
		color: '#686868',
		fontSize: 10,
		marginLeft: 5,
	},
	iconNav: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	iconHeader: {flex: 1, alignItems: 'center', justifyContent: 'center'},
})

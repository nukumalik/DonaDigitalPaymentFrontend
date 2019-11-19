import React, {Component} from 'react'
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native'
import {Icon, Button, Card, CardItem, Left, Row} from 'native-base'

export default class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<View style={{flex: 1}}>
				<View style={{flex: 1}}>
					{/* Header section */}
					<View style={{height: 110, backgroundColor: '#108EE9'}}>
						{/* Header section 1*/}
						<View style={{flex: 2, flexDirection: 'row', padding: 10}}>
							<View style={{flex: 1}}>
								<View style={{flex: 1, flexDirection: 'row'}}>
									<Image source={require('../../assets/images/logo.png')} />
									<Text style={style.textNavHeader}>Rp</Text>
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
							<View style={style.iconHeader}>
								<Image source={require('../../assets/images/isisaldo.png')} />
								<Text style={style.textNavHeader}>Isi Saldo</Text>
							</View>
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
						<View style={{height: 80, backgroundColor: '#108EE9', alignItems: 'center'}}></View>
						{/* View Card */}
						<View style={{marginTop: -80, alignItems: 'center'}}>
							<View
								style={{
									flexDirection: 'column',
									height: 245,
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
										flex: 1,
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
										style={{borderRadius: 5, width: 80, justifyContent: 'center', alignItems: 'center', backgroundColor: '#108EE9'}}>
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
							<View style={{flex: 1}}>
								<Card style={{height: 140}}>
									<Left>
										<Row>
											<Text>Ada Promo Apa?</Text>
										</Row>
									</Left>
									<CardItem></CardItem>
								</Card>
							</View>
							<View style={{flex: 1}}>
								<Card style={{height: 140}}>
									<Left>
										<Row>
											<Text>Ada Promo Apa?</Text>
										</Row>
									</Left>
									<CardItem></CardItem>
								</Card>
							</View>
							<View style={{flex: 1}}>
								<Card style={{height: 140}}>
									<Left>
										<Row>
											<Text>Ada Promo Apa?</Text>
										</Row>
									</Left>
									<CardItem></CardItem>
								</Card>
							</View>
							<View style={{flex: 1}}>
								<Card style={{height: 140}}>
									<Left>
										<Row>
											<Text>Ada Promo Apa?</Text>
										</Row>
									</Left>
									<CardItem></CardItem>
								</Card>
							</View>
						</View>
					</ScrollView>
				</View>

				{/* Bottom Navigation  */}
				<View
					style={{
						height: 56,
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
					<View style={style.iconNav}>
						<Icon name="home" />
						<Text>Riwayat</Text>
					</View>
					<View style={style.iconNav}>
						<Icon name="home" />
						<Text>Pay</Text>
					</View>
					<View style={style.iconNav}>
						<Icon name="home" />
						<Text>Pocket</Text>
					</View>
					<View style={style.iconNav}>
						<Icon name="home" />
						<Text>Saya</Text>
					</View>
				</View>
			</View>
		)
	}
}

const style = StyleSheet.create({
	textNavHeader: {
		color: 'white',
		fontSize: 16,
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

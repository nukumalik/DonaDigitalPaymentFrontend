import React, {Component} from 'react'
import {Text, View, StyleSheet, ScrollView, Image} from 'react-native'
import {Button, List, ListItem} from 'native-base'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default class Profile extends Component {
	render() {
		return (
			<ScrollView style={style.container}>
				<View style={style.upperContainer}>
					<Text style={style.titleScreen}>My Account</Text>
					<View style={style.imgContainer}>
						<Image source={require('../../../assets/images/barcode.png')} style={style.img} />
					</View>
					<Text style={style.userText}>Adit</Text>
					<Text style={{color: 'white'}}>0813****5726</Text>
				</View>
				<View>
					<Button style={style.button}>
						<Text style={style.buttonText}>VERIFIKASI AKUN ANDA</Text>
						<Icon name="shield-account" color="white" size={25} style={style.iconButton} />
					</Button>
				</View>
				<View style={style.bottomContainer}>
					<List>
						<ListItem style={style.listItem}>
							<Icon name="cash" color="#108EE9" size={25} style={style.menuIcon} />
							<Text style={style.menuText}>Saldo</Text>
							<Text style={style.infoText}>Rp.0</Text>
							<Icon name="chevron-right" color="grey" size={25} style={style.arrowIcon} />
						</ListItem>
						<ListItem style={style.listItem}>
							<Icon name="card-text" color="#108EE9" size={25} style={style.menuIcon} />
							<Text style={style.menuText}>Kartu Tersimpan</Text>
							<Text style={style.infoText}>0 Cards</Text>
							<Icon name="chevron-right" color="grey" size={25} style={style.arrowIcon} />
						</ListItem>
						<ListItem style={style.listItem}>
							<Icon name="script-text" color="#108EE9" size={25} style={style.menuIcon} />
							<Text style={style.menuText}>Manage Bills</Text>
							<Text style={style.infoText}></Text>
							<Icon name="chevron-right" color="grey" size={25} style={style.arrowIcon} />
						</ListItem>
						<ListItem itemDivider>
							<Text>FITUR</Text>
						</ListItem>
						<ListItem style={style.listItem}>
							<Icon name="store" color="#108EE9" size={25} style={style.menuIcon} />
							<Text style={style.menuText}>Daftar Dana Bisnis Sekarang!</Text>
							<Icon name="chevron-right" color="grey" size={25} style={{marginLeft: 'auto'}} />
						</ListItem>
						<ListItem style={style.listItem}>
							<Icon name="gift-outline" color="#ff8800" size={25} style={style.menuIcon} />
							<Text style={style.menuText}>Kode Undangan</Text>
							<Icon name="chevron-right" color="grey" size={25} style={{marginLeft: 'auto'}} />
						</ListItem>
						<ListItem style={style.listItem}>
							<Icon name="treasure-chest" color="#108EE9" size={25} style={style.menuIcon} />
							<Text style={style.menuText}>Promo Quest</Text>
							<Icon name="chevron-right" color="grey" size={25} style={{marginLeft: 'auto'}} />
						</ListItem>
						<ListItem itemDivider>
							<Text>INFORMASI UMUM</Text>
						</ListItem>
						<ListItem style={style.listItem}>
							<Text style={style.menuText}>Tutorial</Text>
							<Icon name="chevron-right" color="grey" size={25} style={{marginLeft: 'auto'}} />
						</ListItem>
						<ListItem style={style.listItem}>
							<Text style={style.menuText}>FAQ</Text>
							<Icon name="chevron-right" color="grey" size={25} style={{marginLeft: 'auto'}} />
						</ListItem>
						<ListItem style={style.listItem}>
							<Text style={style.menuText}>Syarat & Kondisi</Text>
							<Icon name="chevron-right" color="grey" size={25} style={{marginLeft: 'auto'}} />
						</ListItem>
						<ListItem style={style.listItem}>
							<Text style={style.menuText}>Kebijakan Privasi</Text>
							<Icon name="chevron-right" color="grey" size={25} style={{marginLeft: 'auto'}} />
						</ListItem>
						<ListItem itemDivider>
							<Text>PENGATURAN APLIKASI</Text>
						</ListItem>
						<ListItem style={style.listItem}>
							<Text style={style.menuText}>Pengaturan</Text>
							<Icon name="chevron-right" color="grey" size={25} style={{marginLeft: 'auto'}} />
						</ListItem>
						<ListItem style={style.listItem}>
							<Text style={style.menuText}>Versi App</Text>
							<Icon name="chevron-right" color="grey" size={25} style={{marginLeft: 'auto'}} />
						</ListItem>
						<ListItem style={style.listItem}>
							<Text style={style.menuText}>Keluar</Text>
							<Icon name="chevron-right" color="grey" size={25} style={{marginLeft: 'auto'}} />
						</ListItem>
					</List>
				</View>
			</ScrollView>
		)
	}
}

const style = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'column',
	},
	upperContainer: {
		backgroundColor: '#108EE9',
		height: '27%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	titleScreen: {
		color: 'white',
		fontSize: 20,
		margin: 25,
	},
	imgContainer: {
		backgroundColor: 'white',
		padding: 7,
		borderRadius: 10,
		margin: 10,
	},
	img: {
		height: 130,
		width: 130,
	},
	userText: {
		color: 'white',
		fontSize: 20,
		fontWeight: 'bold',
	},
	button: {
		backgroundColor: '#108EE9',
		margin: 10,
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		padding: 10,
	},
	buttonText: {
		marginLeft: 'auto',
		color: 'white',
		fontSize: 15,
	},
	bottomContainer: {
		marginTop: 10,
	},
	iconButton: {
		marginLeft: 'auto',
	},
	listItem: {
		display: 'flex',
		flexDirection: 'row',
	},
	menuText: {
		fontSize: 15,
	},
	menuIcon: {
		marginRight: 10,
	},
	infoText: {
		marginLeft: 'auto',
		color: '#108EE9',
	},
	arrowIcon: {
		marginLeft: 10,
	},
})

import React, {Component} from 'react'
import {StyleSheet, Text, View, FlatList, SafeAreaView} from 'react-native'
import {ENTRIES1} from '../static/entries'
import {Container, Header, Content, List, ListItem, Thumbnail, Body, Row, Left, Right, Card, CardItem, Button} from 'native-base'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {TouchableOpacity} from 'react-native-gesture-handler'

export default class ListBerita extends Component {
	state = {
		berita: [],
	}

	async componentDidMount() {
		const berita = ENTRIES1
		this.setState({berita})
	}

	render() {
		return (
			<SafeAreaView style={{flex: 1, marginTop: 10}}>
				<Text style={{color: '#b7b7b7'}}>BERITA DANA</Text>
				<FlatList
					data={this.state.berita}
					showsVerticalScrollIndicator={false}
					renderItem={({item}) => (
						<TouchableOpacity>
							<Card>
								<CardItem>
									<Left>
										<Thumbnail square blurRadius={0.5} source={{uri: item.illustration}} />
										<Body>
											<Text style={{fontWeight: 'bold'}}>{item.title}</Text>
											<Text>{item.subtitle}</Text>
										</Body>
									</Left>

									<Icon color="#108EE9" name="chevron-right" size={25} />
								</CardItem>
							</Card>
						</TouchableOpacity>
					)}
					keyExtractor={item => item.title}
				/>
				<View style={{justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
					<Button style={{width: 100, justifyContent: 'center', borderColor: '#108EE9', height: 35, borderRadius: 5}} bordered>
						<Text style={{color: '#108EE9'}}>SELANJUTNYA</Text>
					</Button>
				</View>
			</SafeAreaView>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 50,
		justifyContent: 'center',
		alignItems: 'center',
		//backgroundColor: 'white',
	},
	h2text: {
		marginTop: 10,
		fontFamily: 'Helvetica',
		fontSize: 36,
		fontWeight: 'bold',
	},
	flatview: {
		justifyContent: 'center',
		paddingTop: 30,
		borderRadius: 2,
		margin: 15,
	},
	name: {
		fontFamily: 'Verdana',
		fontSize: 18,
	},
	email: {
		color: 'red',
	},
})

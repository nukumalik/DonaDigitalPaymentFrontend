import React, {useState, useEffect} from 'react'
import {ScrollView, View} from 'react-native'
import {Container, Content, Header, List, ListItem, Tab, Tabs, Text, Row, Col} from 'native-base'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const ListTransaction = props => {
	return (
		<>
			<Container>
				<Tabs style={{elevation: 0}} tabBarUnderlineStyle={{backgroundColor: '#108EE9', height: 1}}>
					<Tab
						heading="In Progress"
						tabStyle={{backgroundColor: '#f5f5f5'}}
						activeTabStyle={{backgroundColor: '#f5f5f5'}}
						activeTextStyle={{color: '#108EE9'}}></Tab>
					<Tab
						heading="Completed"
						initialPage
						tabStyle={{backgroundColor: '#f5f5f5'}}
						activeTabStyle={{backgroundColor: '#f5f5f5'}}
						activeTextStyle={{color: '#108EE9'}}>
						<ScrollView>
							<List>
								<ListItem itemDivider>
									<Text style={{fontSize: 13}}>BULAN INI</Text>
								</ListItem>
								<ListItem>
									<Row>
										<Col style={style.cardLeft}>
											<Row>
												<Col style={{justifyContent: 'center'}}>
													<Text style={{fontSize: 12, color: '#bbb'}}>17 Nov</Text>
												</Col>
												<Col style={{justifyContent: 'center', alignItems: 'center'}}>
													<View style={{borderWidth: 1, borderRadius: 20, borderColor: '#bbb'}}>
														<Icon name="cellphone-android" size={20} style={{padding: 5, color: 'red'}} />
													</View>
												</Col>
											</Row>
										</Col>
										<Col style={style.cardBody}>
											<Text style={{marginRight: 'auto', fontWeight: 'bold'}}>-Rp20.000</Text>
											<Text style={{marginRight: 'auto', fontSize: 14, fontWeight: '100', color: 'red'}}>Kedaluwarsa</Text>
											<Text style={{marginRight: 'auto'}}>Dana Pulsa, Pulsa Internet Rp20.000 082291031015</Text>
										</Col>
										<Col style={style.cardRight}>
											<Icon name="chevron-right" size={30} style={{color: 'gray'}} />
										</Col>
									</Row>
								</ListItem>
							</List>
						</ScrollView>
					</Tab>
				</Tabs>
			</Container>
		</>
	)
}

const style = {
	tabs: {
		backgroundColor: 'gray',
	},
	cardLeft: {
		width: '30%',
	},
	cardBody: {
		display: 'flex',
	},
	cardRight: {
		justifyContent: 'center',
		alignItems: 'flex-end',
		width: '7%',
	},
}

export default ListTransaction

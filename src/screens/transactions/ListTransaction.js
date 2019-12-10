import React, {useState, useEffect} from 'react'
import {ScrollView, View} from 'react-native'
import {Container, Content, Header, List, ListItem, Tab, Tabs, Text, Row, Col} from 'native-base'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import {connect} from 'react-redux'
import {getAllTransactions} from '../../redux/action/transactions'

import {NavigationEvents} from 'react-navigation'

const ListTransaction = props => {
	const [, updateState] = React.useState()
	const forceUpdate = React.useCallback(() => updateState({}), [])

	useEffect(() => {
		// if (props.transactions.transactionsData.length < 1) {
		// props.dispatch(getAllTransactions(props.user.userData.id)).then(() => forceUpdate())
		// }
	}, [])

	return (
		<>
			<NavigationEvents onDidFocus={() => props.dispatch(getAllTransactions(props.user.userData.id)).then(() => forceUpdate())} />
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
								{props.transactions.transactionsData.reverse().map(transaction => (
									<ListItem key={transaction.transaction_id}>
										<Row>
											<Col style={style.cardLeft}>
												<Row>
													<Col style={{justifyContent: 'center'}}>
														<Text style={{fontSize: 12, color: '#bbb'}}>
															{transaction.transaction_type === 'topup' ? (
																<>
																	{new Date(transaction.updated_at).getDate()}
																	{'/'}
																	{new Date(transaction.updated_at).getMonth() + 1}
																</>
															) : (
																<>
																	{new Date(transaction.order_at).getDate()}
																	{'/'}
																	{new Date(transaction.order_at).getMonth() + 1}
																</>
															)}
														</Text>
													</Col>
													<Col style={{justifyContent: 'center', alignItems: 'center'}}>
														<View style={{borderWidth: 1, borderRadius: 20, borderColor: '#bbb'}}>
															{transaction.transaction_type === 'topup' ? (
																<Icon name="cellphone-android" size={20} style={{padding: 5, color: '#108EE9'}} />
															) : (
																<Icon name="cellphone-android" size={20} style={{padding: 5, color: 'red'}} />
															)}
														</View>
													</Col>
												</Row>
											</Col>
											<Col style={style.cardBody}>
												<Text style={{marginRight: 'auto', fontWeight: 'bold'}}>
													{transaction.transaction_type === 'topup' ? <>+ Rp.{transaction.amount}</> : <>- Rp.{transaction.amount}</>}
												</Text>
												<Text style={{marginRight: 'auto', fontSize: 14, fontWeight: '100', color: 'green'}}>Success</Text>
												<Text style={{marginRight: 'auto'}}>
													{transaction.transaction_type === 'topup' ? (
														<>
															TOP UP {transaction.amount} via {transaction.method} card
														</>
													) : (
														<>Dana Pulsa / Pulsa Internet Rp.{transaction.amount}</>
													)}
												</Text>
											</Col>
											<Col style={style.cardRight}>
												<Icon name="chevron-right" size={30} style={{color: 'gray'}} />
											</Col>
										</Row>
									</ListItem>
								))}
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

const mapStateToProps = state => ({
	transactions: state.transactions,
	user: state.user,
})

export default connect(mapStateToProps)(ListTransaction)

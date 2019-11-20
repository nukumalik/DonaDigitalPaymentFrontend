import React from 'react'
import {} from 'react-native'
import {Tabs, Tab, Content, Header} from 'native-base'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Pulsa = props => {
	return (
		<>
			<Content>
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
						activeTextStyle={{color: '#0F7EFE'}}
						textStyle={{color: '#B6B6B6'}}
						tabStyle={style.tabStyle}></Tab>
					<Tab
						heading="Paket Data"
						style={{backgroundColor: '#fafafa'}}
						activeTabStyle={style.activeTabStyle}
						activeTextStyle={{color: '#0F7EFE'}}
						textStyle={{color: '#B6B6B6'}}
						tabStyle={style.tabStyle}></Tab>
				</Tabs>
			</Content>
		</>
	)
}

const style = {
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

export default Pulsa

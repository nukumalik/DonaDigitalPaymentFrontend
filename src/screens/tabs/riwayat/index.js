import {createStackNavigator} from 'react-navigation-stack'
import DetailTransaction from '../../transactions/DetailTransaction'
import ListTransaction from '../../transactions/ListTransaction'
export default createStackNavigator(
	{
		DetailTransaction,
		ListTransaction,
	},
	{
		initialRouteName: 'ListTransaction',
		headerMode: 'none',
	}
)

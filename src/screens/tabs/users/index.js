import {createStackNavigator} from 'react-navigation-stack'
import User from '../../users/Profile'
export default createStackNavigator(
	{
		User,
	},
	{
		headerMode: 'none',
	}
)

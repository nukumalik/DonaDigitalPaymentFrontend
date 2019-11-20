import React from 'react'
import {Text, View} from 'react-native'
import SlideImage from '../../component/SlideImage'
import {Button} from 'native-base'
import {TouchableOpacity} from 'react-native-gesture-handler'

const componentName = props => {
	return (
		<View style={style.container}>
			<View style={style.head}>
				<Text style={style.text}>dona</Text>
			</View>
			<View style={{height: '70%', marginTop: 5}}>
				<SlideImage />
			</View>
			<View style={style.head}>
				<View style={{flex: 5}}>
					<TouchableOpacity>
						<Button
							onPress={() => {
								props.navigation.navigate('Login')
							}}
							style={style.button}>
							<Text style={style.textButton}>Lewati</Text>
						</Button>
					</TouchableOpacity>
					<Text style={style.NormalText}>{text}</Text>
				</View>
			</View>
		</View>
	)
}
export default componentName
const text = 'Dengan menekan tombol Lanjut, Anda setuju dengan syarat & Ketentuan yang berlaku'
const style = {
	container: {
		flex: 1,
		//justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
		backgroundColor: '#108EE9',
	},
	head: {
		flexDirection: 'row',
		marginTop: 10,
	},
	textHolder: {
		justifyContent: 'flex-end',
		color: '#fff',
		fontSize: 20,
		opacity: 0.5,
	},
	text: {
		fontSize: 35,
		fontWeight: 'bold',
		textTransform: 'uppercase',
		fontFamily: 'Strenuous',
		color: '#fff',
		textAlign: 'center',
		letterSpacing: 10,
	},
	NormalText: {
		fontSize: 12,
		color: '#fff',
		marginLeft: 30,
		marginRight: 30,
		marginTop: 20,
		opacity: 0.7,
		textAlign: 'center',
	},
	button: {
		backgroundColor: 'white',
		borderRadius: 10,
		justifyContent: 'center',
		marginLeft: 40,
		height: 40,
		marginRight: 40,
	},
	textButton: {
		color: '#108EE9',
		fontSize: 17,
	},
}

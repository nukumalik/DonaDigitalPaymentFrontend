import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import SmoothPinCodeInput from 'react-native-smooth-pincode-input'

export default class Pin extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			code: '',
			password: '',
		}
	}

	pinInput = React.createRef()

	_checkCode = code => {
		if (code != '123456') {
			this.pinInput.current.shake().then(() => this.setState({code: ''}))
		} else {
			this.props.navigation.navigate('Home')
		}
	}

	render() {
		const {code, password} = this.state
		console.log(code)
		return (
			<View style={styles.container}>
				{/* Custom placeholder & mask */}
				<View style={styles.section}>
					<SmoothPinCodeInput
						ref={this.pinInput}
						value={code}
						codeLength={6}
						autoFocus={true}
						onTextChange={code => this.setState({code})}
						onFulfill={this._checkCode}
						onBackspace={() => console.log('No more back.')}
						placeholder={
							<View
								style={{
									width: 5,
									height: 5,
									borderRadius: 25,
									opacity: 0.3,
									backgroundColor: 'black',
								}}></View>
						}
						mask={
							<View
								style={{
									width: 5,
									height: 5,
									borderRadius: 25,
									backgroundColor: 'black',
								}}></View>
						}
						maskDelay={1000}
						password={true}
						cellStyle={null}
						cellStyleFocused={null}
						value={code}
					/>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	section: {
		alignItems: 'center',
		margin: 16,
	},
	title: {
		fontSize: 16,
		fontWeight: 'bold',
		marginBottom: 8,
	},
})

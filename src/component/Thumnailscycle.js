/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'


const Thumnailscycle = props => {
	return(
		<View>
			<Image style={style.imageThumbnails} source={{uri:props.image}} />
		</View>
	)
}

export default Thumnailscycle

const style = {
	imageThumbnails:{
		borderRadius: 125,
		width :40,
		height:40,
		borderColor:'white',
		borderWidth:1,
		backgroundColor: 'white',
		marginLeft:10,
	},
}

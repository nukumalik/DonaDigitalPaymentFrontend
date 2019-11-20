import React, {Component} from 'react'
import {View, Text, Image} from 'react-native'
import Carousel from 'react-native-snap-carousel'

export default class Corousel extends Component {
	constructor(props) {
		super(props)
		this.state = {
			activeSlide: 0,
			entries: [
				{
					title: 'Beautiful and dramatic Antelope Canyon',
					subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
					illustration: 'https://i.imgur.com/UYiroysl.jpg',
				},
				{
					title: 'Earlier this morning, NYC',
					subtitle: 'Lorem ipsum dolor sit amet',
					illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
				},
				{
					title: 'White Pocket Sunset',
					subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
					illustration: 'https://i.imgur.com/MABUbpDl.jpg',
				},
				{
					title: 'Acrocorinth, Greece',
					subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
					illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
				},
				{
					title: 'The lone tree, majestic landscape of New Zealand',
					subtitle: 'Lorem ipsum dolor sit amet',
					illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
				},
				{
					title: 'Middle Earth, Germany',
					subtitle: 'Lorem ipsum dolor sit amet',
					illustration: 'https://i.imgur.com/lceHsT6l.jpg',
				},
			],
		}
	}

	_renderItem({item, index}) {
		return (
			<View>
				{/* <Text>{item.subtitle}</Text> */}
				<Image
					source={{uri: item.illustration}}
					style={{width: 325, height: 86, alignSelf: 'auto', borderBottomLeftRadius: 5, borderBottomRightRadius: 5}}
				/>
			</View>
		)
	}

	render() {
		return (
			<View>
				<Carousel
					ref={c => {
						this._carousel = c
					}}
					data={this.state.entries}
					renderItem={this._renderItem}
					sliderWidth={325}
					itemWidth={355}
					loop={true}
					loopClonesPerSide={2}
					autoplay={true}
					autoplayDelay={500}
					autoplayInterval={3000}
				/>
			</View>
		)
	}
}

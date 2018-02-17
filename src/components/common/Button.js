import React, { Component } from 'react';
import { Text, TouchableNativeFeedback, View} from 'react-native';

const Button = ({ onPress, children }) => {
	const { buttonStyle, textStyle } = styles;
	return(
		<TouchableNativeFeedback onPress={onPress}>
			<View style={buttonStyle}><Text style={textStyle}>{children}</Text></View>
		</TouchableNativeFeedback>
	)
}

const styles={
	buttonStyle:{
		// flex:1,
		display:'flex',
		justifyContent:'center',
		alignItems:'center',
		backgroundColor:'#607d8b',
		borderRadius:3,
		elevation:2,
		height:50
	},
	textStyle:{
		fontSize:16,
		color:'#fff'
	}
}

export { Button };
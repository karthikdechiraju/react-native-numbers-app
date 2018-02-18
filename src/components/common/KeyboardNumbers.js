import React, { Component } from 'react';
import { Text, TouchableOpacity, View} from 'react-native';

const KeyBoardNumber = ({ onPress, children, style }) => {
	return(
		<View style={[styles.viewStyle,style]}>							
			<TouchableOpacity onPress={onPress}><Text style={styles.textStyle}>{children}</Text></TouchableOpacity>
		</View>
	)
}

const styles={
	viewStyle:{
		backgroundColor: '#607d8b',
		alignSelf: 'stretch',
		flex:1,
		display:'flex',
		justifyContent:'center',
		alignItems:'center'
	},
	textStyle:{
		color:'#fff',
		fontSize:25,
		padding:20,
		textAlign:'center'
	}
}

export { KeyBoardNumber };
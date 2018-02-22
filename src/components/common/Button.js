import React, { Component } from 'react';
import { Text, TouchableHighlight, TouchableNativeFeedback , View, Platform} from 'react-native';

const Button = ({ onPress, children,style,textStyleProps }) => {
	const { buttonStyle, textStyle } = styles;
	
	if (Platform.OS === 'android') {
       return (
          <TouchableNativeFeedback onPress={onPress} > 
               <View style={[styles.buttonStyle,style]}><Text style={[textStyle,textStyleProps]}>{children}</Text></View>
          </TouchableNativeFeedback>    
       )
    } else {
       return (
          <TouchableHighlight onPress={onPress} style={[styles.buttonStyle,style]}> 
			<Text style={textStyle}>{children}</Text>
          </TouchableHighlight>    
       )
    }
}

const styles={
	buttonStyle:{
		// flex:1,
		display:'flex',
		alignSelf:'stretch',
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
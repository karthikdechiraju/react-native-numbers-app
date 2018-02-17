import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
// import styles from '../styles/Formulae';

const Input = ({label,placeholder,value,onChangeText, style}) => {
	return(
		<View style={{marginBottom:30}} >
			
			<TextInput 
				placeholder={placeholder}
				autoCorrect={false}
				// style = {styles.inputStyle}
				// underlineColorAndroid="transparent"
				value = { value }
				onChangeText = { onChangeText }
			/>
		</View>
	)
}

export { Input };
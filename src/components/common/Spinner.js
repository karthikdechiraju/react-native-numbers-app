import React from 'react'
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ size }) => {
	return(
		<View style ={styles.spinnerStryle}>
			<ActivityIndicator size={ size || 'large'} />
		</View>
	)
};


const styles = {
	spinnerStryle : {
		flex:1,
		justifyContent:'center',
		alignItems:'center'
	}
};

export { Spinner }
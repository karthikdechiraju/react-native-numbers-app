import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, Keyboard } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from '../styles/Home';
import { KeyBoardNumber } from './common'
class Home extends Component{
	state={

	}
	render(){
		return(
			<View style= {styles.mainView}>
				
				<View style={styles.numberView}>
					<Text style={{paddingRight:40,textAlign:'center',fontSize:60,color:'#969696'}}>a</Text>
					<Text style={{paddingLeft:40,textAlign:'center',fontSize:60,color:'#969696'}}>b</Text>
				</View>
				
				<View style={styles.keyboardView}>
					<View style={styles.formulaBar}>
						<View style={styles.formulaView}>
							<ScrollView  horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{alignItems:'center'}}>
								<View>
									<Text style={{paddingLeft:20,paddingRight:20,color:'#fff'}}>ADD</Text>
								</View>
								<View>
									<Text style={{paddingLeft:20,paddingRight:20,color:'#fff'}}>Multipy</Text>
								</View>
								<View>
									<Text style={{paddingLeft:20,paddingRight:20,color:'#fff'}}>Difference</Text>
								</View>
								<View>
									<Text style={{paddingLeft:20,paddingRight:20,color:'#fff'}}>Average</Text>
								</View>
							</ScrollView>
						</View>
						<TouchableOpacity style={styles.editFormula} onPress={() => Actions.Formulae()}>
							<Text>Edit</Text>
						</TouchableOpacity>
					</View>
					
					<View style={styles.keyboard}>
						<View style={styles.keyboardParts}>
							<KeyBoardNumber>1</KeyBoardNumber>
							<KeyBoardNumber>2</KeyBoardNumber>
							<KeyBoardNumber>3</KeyBoardNumber>
						</View>
						<View style={styles.keyboardParts}>
							<KeyBoardNumber>4</KeyBoardNumber>
							<KeyBoardNumber>5</KeyBoardNumber>
							<KeyBoardNumber>6</KeyBoardNumber>
						</View>
						<View style={styles.keyboardParts}>
							<KeyBoardNumber>7</KeyBoardNumber>
							<KeyBoardNumber>8</KeyBoardNumber>
							<KeyBoardNumber>9</KeyBoardNumber>
						</View>
						<View style={styles.keyboardParts}>
							<KeyBoardNumber style={{backgroundColor:'teal'}}>C</KeyBoardNumber>
							<KeyBoardNumber>0</KeyBoardNumber>
							<KeyBoardNumber style={{backgroundColor:'teal'}}>=</KeyBoardNumber>
						</View>
					</View>
				</View>
			</View>
		)
	}
}

export default Home;
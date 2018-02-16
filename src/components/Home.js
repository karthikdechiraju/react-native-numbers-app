import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, Keyboard } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from '../styles/Home' 

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
							<TouchableOpacity><Text style={{color:'#fff',fontSize:20,padding:20}}>1</Text></TouchableOpacity>
							<TouchableOpacity><Text style={{color:'#fff',fontSize:20,padding:20}}>2</Text></TouchableOpacity>
							<TouchableOpacity><Text style={{color:'#fff',fontSize:20,padding:20}}>3</Text></TouchableOpacity>
						</View>
						<View style={styles.keyboardParts}>
							<TouchableOpacity><Text style={{color:'#fff',fontSize:20,padding:20}}>4</Text></TouchableOpacity>
							<TouchableOpacity><Text style={{color:'#fff',fontSize:20,padding:20}}>5</Text></TouchableOpacity>
							<TouchableOpacity><Text style={{color:'#fff',fontSize:20,padding:20}}>6</Text></TouchableOpacity>
						</View>
						<View style={styles.keyboardParts}>
							<TouchableOpacity><Text style={{color:'#fff',fontSize:20,padding:20}}>7</Text></TouchableOpacity>
							<TouchableOpacity><Text style={{color:'#fff',fontSize:20,padding:20}}>8</Text></TouchableOpacity>
							<TouchableOpacity><Text style={{color:'#fff',fontSize:20,padding:20}}>9</Text></TouchableOpacity>
						</View>
						<View style={styles.keyboardParts}>
							<TouchableOpacity><Text style={{color:'#fff',fontSize:20,padding:20}}>C</Text></TouchableOpacity>
							<TouchableOpacity><Text style={{color:'#fff',fontSize:20,padding:20}}>0</Text></TouchableOpacity>
							<TouchableOpacity><Text style={{color:'#fff',fontSize:20,padding:20}}>=</Text></TouchableOpacity>
						</View>
					</View>
				</View>
			</View>
		)
	}
}

export default Home;
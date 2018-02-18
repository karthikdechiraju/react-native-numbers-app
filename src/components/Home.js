import React, { Component } from 'react';
import { View, Text, ScrollView, TextInput, Keyboard,TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from '../styles/Home';
import { Button } from './common'
import { connect } from 'react-redux';
import { calculate_formula, aValue, bValue, selectedFormula } from '../actions';

class Home extends Component{

	renderEachItem(){
		return this.props.formulae.map(item => {
			console.log(this.props.selected_formula)
			if (this.props.selected_formula == item.name) {
				return(
					<TouchableOpacity key={item.name} onPress={() => this.props.selectedFormula(item.name)}>
						<View style={{backgroundColor:'#607d8b',padding:10,borderRadius:3}}>
							<Text style={{paddingHorizontal:15,color:'#fff'}}>{item.name}</Text>
						</View>
					</TouchableOpacity>
				)
			}else{
				return(
					<TouchableOpacity key={item.name} onPress={() => this.props.selectedFormula(item.name)}>
						<View style={{padding:10,borderRadius:3}}>
							<Text style={{paddingHorizontal:15}}>{item.name}</Text>
						</View>
					</TouchableOpacity>
				)
			}
		})
	}

	renderFormulaeList(){
		return(
			<ScrollView  horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{alignItems:'center'}}>
				{this.renderEachItem()}
			</ScrollView>
		)
	}

	renderButton(){
		if (this.props.result == null) {
			return(
				<Button style={{paddingVertical:30}} onPress={() => this.props.calculate_formula(parseInt(this.props.a_value),parseInt(this.props.b_value),this.props.selected_formula)}>CALCULATE</Button>
			)
		}else{
			return(
				<Button style={{paddingVertical:30}} onPress={() => this.props.calculate_formula(parseInt(this.props.a_value),parseInt(this.props.b_value),this.props.selected_formula)}>{this.props.result}</Button>
			)
		}
	}

	render(){
		return(
			<View style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',flex:1,padding:10,backgroundColor:'#fff'}}>
				<View style={{backgroundColor:'#f1f1f1',alignSelf:'stretch',elevation:4,borderRadius:3}}>
					
					<TextInput value={this.props.a_value} onChangeText={(num) => this.props.aValue(num)} keyboardType='numeric' placeholder="First number" underlineColorAndroid="transparent" style={{minWidth:250,fontSize:25,textAlign:'center',paddingVertical:30,borderBottomWidth:1,borderBottomColor:'#d0d0d0'}} />

					<View style={{display:'flex',flexDirection:'row'}}>
						<View style={{flex:6,paddingVertical:10,paddingLeft:10}}>
							{this.renderFormulaeList()}
						</View>
						<View style={{flex:1,display:'flex',justifyContent:'center',alignItems:'center'}}>
							<Button style={{flex:1,borderRadius:0}} onPress={()=>Actions.Formulae()} >edit</Button>
						</View>
					</View>
					
					<TextInput value={this.props.b_value} onChangeText={(num) => this.props.bValue(num)} keyboardType='numeric' placeholder="Second number" underlineColorAndroid="transparent" style={{minWidth:250,fontSize:25,textAlign:'center',paddingVertical:30,borderTopWidth:1,borderTopColor:'#d0d0d0'}} />
					
					{this.renderButton()}

				</View>
			</View>
		)
	}
}


const mapStateToProps = (state)=>{
	return{
		result:state.calculate.result,
		a_value:state.calculate.a_value,
		b_value:state.calculate.b_value,
		formulae:state.calculate.formulae,
		selected_formula:state.calculate.selected_formula
	}
}

export default connect(mapStateToProps,{ calculate_formula, aValue, bValue, selectedFormula })(Home);
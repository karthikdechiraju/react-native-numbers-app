import React, { Component } from 'react';
import { View, Text, ScrollView, TextInput, Keyboard,TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from '../styles/Home';
import { Button } from './common'
import { connect } from 'react-redux';
import { calculate_formula, aValue, bValue, selectedFormula, removeResult } from '../actions';

class Home extends Component{


	renderSelection(item){
		this.props.selectedFormula(item.name)
		this.props.removeResult()
	}


	renderEachFormualaName(){
		return this.props.formulae.map(item => {
			console.log(this.props.selected_formula)
			if (this.props.selected_formula == item.name) {
				return(
					<TouchableOpacity key={item.name} onPress={() => this.renderSelection(item)}>
						<View style={styles.selectedFormulaStyle}>
							<Text style={styles.selectedFormulaTextStyle}>{item.name}</Text>
						</View>
					</TouchableOpacity>
				)
			}else{
				return(
					<TouchableOpacity key={item.name} onPress={() => this.renderSelection(item)}>
						<View style={styles.formulaInnnerView}>
							<Text style={styles.formulaInnnerText}>{item.name}</Text>
						</View>
					</TouchableOpacity>
				)
			}
		})
	}

	renderFormulaeList(){
		return(
			<ScrollView  horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{alignItems:'center'}}>
				{this.renderEachFormualaName()}
			</ScrollView>
		)
	}

	renderButton(){
		if (this.props.result == null) {
			return(
				<Button style={styles.buttonStyle} onPress={() => this.props.calculate_formula(parseInt(this.props.a_value),parseInt(this.props.b_value),this.props.selected_formula)}>CALCULATE</Button>
			)
		}else{
			return(
				<Button style={styles.buttonStyle} onPress={() => this.props.calculate_formula(parseInt(this.props.a_value),parseInt(this.props.b_value),this.props.selected_formula)}>{this.props.result}</Button>
			)
		}
	}

	render(){
		return(
			<View style={styles.mainView}>
				<View style={styles.innerMainView}>
					
					<TextInput value={this.props.a_value} onChangeText={(num) => this.props.aValue(num)} keyboardType='numeric' placeholder="Enter a value" underlineColorAndroid="transparent" style={styles.textInputStyle} />

					<View style={styles.formulaBar}>
						{this.renderFormulaeList()}
					</View>
					
					<TextInput value={this.props.b_value} onChangeText={(num) => this.props.bValue(num)} keyboardType='numeric' placeholder="Enter b value" underlineColorAndroid="transparent" style={styles.textInputStyle2} />
					{this.renderButton()}
				</View>
				<View style={{marginTop:20,alignSelf:'stretch'}}>
					<Button style={styles.viewFormulaStyle} onPress={() => Actions.Formulae()} textStyleProps={styles.viewFormulaTextStyle}>VIEW FORMULAE</Button>
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

export default connect(mapStateToProps,{ calculate_formula, aValue, bValue, selectedFormula, removeResult })(Home);
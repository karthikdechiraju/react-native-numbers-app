import React, { Component } from 'react';
import { View, Text, FlatList, TouchableNativeFeedback, Modal, TextInput } from 'react-native';
import styles from '../styles/Formulae';
import { Input, Button } from './common'
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { selectedFormula,add_formula,newFormulaName,newFormulaDefinition,delete_formula, toggleModal } from '../actions';

class Formulae extends Component{
  
  openModal() {
    this.props.toggleModal(true)
  }

  closeModal() {
    this.props.toggleModal(false)
  }

  addNewFormula(){
  	if (this.props.name != "" && this.props.name != null && this.props.definition != "" && this.props.definition != null) {
	  	this.props.add_formula(this.props.name,this.props.definition)
  	}
  	this.closeModal()
  }

	render(){
		console.log(this.props.formulae)
		return(
			<View style={styles.mainView}>
				<View style={{flex:9}}>
					<FlatList
			          data={this.props.formulae}
			          renderItem={({item}) => 
			          	<View style={styles.listItemView}>
				          	<Text 
				          		onPress={() => {
						          	this.props.selectedFormula(item.name)
						          	Actions.Home()
						        }}
				          		style={styles.listItemText}
				         	>
				          		{item.name}
				         	</Text>
			          		<Text onPress={() => {
			          			this.props.delete_formula(item.name)
			          			// this.props.selectedFormula(null)
			          			this.forceUpdate();
			          		}} style={styles.listItemButtonText}>DELETE</Text>
			          	</View>}
			          	keyExtractor={item => item.name}
			         showsVerticalScrollIndicator={false}
			         style={styles.flatListStyle}
			        />
				</View>
				<View style={{flex:1}}>
					<Button onPress={() => this.openModal()}>Add new formula</Button>
				</View>
				<Modal
					visible={this.props.modal}
					animationType={'slide'}
					onRequestClose={() => this.closeModal()}
				>
					<View style={styles.modalView}>
						<View style={{width:300}}>
							<Text style={styles.modalHeading}>Add a new formula</Text>
							<TextInput style={styles.textInputStyle} value={this.props.name} onChangeText={(text) => this.props.newFormulaName(text) } placeholder="Give it a name" />
							<TextInput style={styles.textInputStyle2} value={this.props.definition} onChangeText={(text) => this.props.newFormulaDefinition(text) } placeholder="Define formula Ex. (a*b)-(a+b)" />
							<Text style={styles.smallText}>Please define formula in a and b convention</Text>
							<View style={{flex:1}}>
								<Button onPress={() => this.addNewFormula()}>ADD FORMULA</Button>
							</View>
						</View>
					</View>
				</Modal>
			</View>
		)
	}
}

const mapStateToProps = (state)=>{
	return{
		formulae:state.calculate.formulae,
		selected_formula:state.calculate.selected_formula,
		name:state.formula_addition.name,
		definition:state.formula_addition.definition,
		modal:state.formula_addition.modal,
	}
}

export default connect(mapStateToProps,{ selectedFormula,add_formula,newFormulaName,newFormulaDefinition,delete_formula, toggleModal })(Formulae);
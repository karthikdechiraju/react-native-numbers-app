import React, { Component } from 'react';
import { View, Text, FlatList, TouchableNativeFeedback, Modal, TextInput } from 'react-native';
import styles from '../styles/Formulae';
import { Input, Button } from './common'
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { selectedFormula,add_formula,newFormulaName,newFormulaDefinition } from '../actions';

class Formulae extends Component{
  state = {
    modalVisible: false,
  };

  openModal() {
    this.setState({modalVisible:true});
  }

  closeModal() {
    this.setState({modalVisible:false});
  }

  addNewFormula(){
  	this.props.add_formula(this.props.name,this.props.definition)
  	this.closeModal()
  }

	render(){
		return(
			<View style={styles.mainView}>
				<View style={{flex:9}}>
					<FlatList
			          data={this.props.formulae}
			          renderItem={({item}) => <Text onPress={() => {
			          	this.props.selectedFormula(item.name)
			          	Actions.pop()
			          }}
			          keyExtractor={(item, index) => item.id}
			          style={{paddingVertical: 15,fontSize: 18,backgroundColor:'#fff',borderBottomWidth:1,borderBottomColor:'#eee'}}
			         >
			          	{item.name}
			         </Text>}
			         showsVerticalScrollIndicator={false}
			         style={{marginBottom:10}}
			        />
				</View>
				<View style={{flex:1}}>
					<Button onPress={() => this.openModal()}>Add new formula</Button>
				</View>
				<Modal
					visible={this.state.modalVisible}
					animationType={'slide'}
					onRequestClose={() => this.closeModal()}
				>
					<View style={{flex:1,display:'flex',justifyContent:'center',alignItems:'center'}}>
						<View style={{width:300}}>
							<Text style={{fontSize:25,fontWeight:'600',marginBottom:30}}>Add a new formula</Text>
							<Input value={this.props.name} onChangeText={(text) => this.props.newFormulaName(text) } placeholder="Give it a name" />
							<Input value={this.props.definition} onChangeText={(text) => this.props.newFormulaDefinition(text) } placeholder="Define formula Ex. (a*b)-(a+b)" />
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
		definition:state.formula_addition.definition
	}
}

export default connect(mapStateToProps,{ selectedFormula,add_formula,newFormulaName,newFormulaDefinition })(Formulae);
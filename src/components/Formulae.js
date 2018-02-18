import React, { Component } from 'react';
import { View, Text, FlatList, TouchableNativeFeedback, Modal, TextInput } from 'react-native';
import styles from '../styles/Formulae';
import { Input, Button } from './common'
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { selectedFormula } from '../actions';

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
			          key={item.name}
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
							<Input placeholder="Give it a name" />
							<Input placeholder="Define formula Ex. (a*b)-(a+b)" />
							<View style={{flex:1}}>
								<Button onPress={() => this.closeModal()}>ADD FORMULA</Button>
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
		selected_formula:state.calculate.selected_formula
	}
}

export default connect(mapStateToProps,{ selectedFormula })(Formulae);
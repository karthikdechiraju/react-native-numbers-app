import React, { Component } from 'react';
import { View, Text, FlatList, TouchableNativeFeedback, Modal, TextInput } from 'react-native';
import styles from '../styles/Formulae';
import { Input, Button } from './common'
import { Actions } from 'react-native-router-flux';


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
			          data={[
			            {key: 'Devin'},
			            {key: 'Jackson'},
			            {key: 'James'},
			            {key: 'Joel'},
			            {key: 'John'},
			            {key: 'Jillian'},
			            {key: 'Jimmy'},
			            {key: 'Julie'},
			            {key: 'Devin'},
			            {key: 'Jackson'},
			            {key: 'James'},
			            {key: 'Joel'},
			            {key: 'John'},
			            {key: 'Jillian'},
			            {key: 'Jimmy'},
			            {key: 'Julie'},
			          ]}
			          renderItem={({item}) => <Text onPress={() => Actions.pop()} style={{paddingVertical: 15,fontSize: 18,backgroundColor:'#fff',borderBottomWidth:1,borderBottomColor:'#eee'}}>{item.key}</Text>}
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

export default Formulae;
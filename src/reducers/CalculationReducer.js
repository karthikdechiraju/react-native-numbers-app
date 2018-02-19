import { Actions } from 'react-native-router-flux';

const initial_state = { 
	a_value:null,
	b_value:null,
	selected_formula:null,
	formulae:[
		{
			name:'Add',
			formula:function(a,b){
				return(a + b)
			}
		},
		{
			name:'Product',
			formula:function(a,b){
				return(a * b)
			}
		},
		{
			name:'Difference',
			formula:function(a,b){
				return(a - b)
			}
		}
	],
	result:null
};

export default (state = initial_state,action) => {
	console.log(action)
	switch (action.type){
		case 'a_value':
			return { ...state, a_value:action.payload };

		case 'b_value':
			return { ...state, b_value:action.payload };

		case 'selected_formula':
			return { ...state, selected_formula:action.payload };

		case 'remove_result':
			return { ...state, result:null };

		case 'calculate_formula':
			for (var i = 0; i < state.formulae.length; i++) {
				if(state.formulae[i].name == action.payload.formula){
					var req_result = state.formulae[i].formula(action.payload.a,action.payload.b);
					break;
				}
			}
			return {...state,result:req_result};

		case 'add_formula':
			var obj = {
				name : action.payload.name,
				formula:function(a,b){
					return eval(action.payload.definition)
				}
			}
			var req_form = state.formulae;
			req_form.push(obj)
			return {...state, formulae:req_form}

		case 'delete_formula':
			var req_index = null;
			for (var i = 0; i < state.formulae.length; i++) {
				if(state.formulae[i].name == action.payload){
					req_index = i;
				}
			}
			console.log(req_index)
			if (req_index != null) {
				var arr = state.formulae;
				arr.splice(req_index,1)
				return {...state,formulae:arr}
			}else{
				return state
			}

		default:
			return state
	}
}

const initial_state = { 
	a_value:null,
	b_value:null,
	selected_formula:null,
	formulae:[
		{
			name:'add',
			formula:function(a,b){
				return(a + b)
			}
		},
		{
			name:'product',
			formula:function(a,b){
				return(a * b)
			}
		},
		{
			name:'difference',
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
		case 'calculate_formula':
			for (var i = 0; i < state.formulae.length; i++) {
				if(state.formulae[i].name == action.payload.formula){
					var req_result = state.formulae[i].formula(action.payload.a,action.payload.b);
					break;
				}
			}
			return {...state,result:req_result};
		default:
			return state
	}
}

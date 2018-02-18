const initial_state = { 
	name:null,
	definition:null,
};

export default (state = initial_state,action) => {
	console.log(action)
	switch (action.type){
		case 'new_name':
			return { ...state, name:action.payload };
		case 'new_definition':
			return { ...state, definition:action.payload };
		default:
			return state
	}
}

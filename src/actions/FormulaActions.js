export const newFormulaName = (text) => {
	return{
		type:'new_name',
		payload:text
	}
}

export const newFormulaDefinition = (text) => {
	return{
		type:'new_definition',
		payload:text
	}
}

export const toggleModal = (text) => {
	return{
		type:'toggle_modal',
		payload:text
	}
}
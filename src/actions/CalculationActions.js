export const aValue = (num) => {
	return{
		type:'a_value',
		payload:num
	}
}

export const bValue = (num) => {
	return{
		type:'b_value',
		payload:num
	}
}

export const removeResult = () => {
	return{
		type:'remove_result',
		payload:null
	}
}

export const selectedFormula = (text) => {
	console.log(text)
	return{
		type:'selected_formula',
		payload:text
	}
}

export const calculate_formula = (num1,num2,form) => {
	return{
		type:'calculate_formula',
		payload:{
			a:num1,
			b:num2,
			formula:form
		}
	}
}

export const add_formula = (name,definition) => {
	return{
		type:'add_formula',
		payload:{
			name:name,
			definition:definition,
		}
	}
}

export const delete_formula = (name) => {
	return{
		type:'delete_formula',
		payload:name
	}
}
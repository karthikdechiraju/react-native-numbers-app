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

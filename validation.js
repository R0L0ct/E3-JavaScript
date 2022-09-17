const checkNumber = () => {
	let valid = false;

	const min = 1;
	const max = 6;
	const numberId = inputNum.value;

	if (isEmpty(numberId)) {
		showError(inputNum, "Este campo es requerido");
	} else if (!isNumberValid(numberId, min, max)) {
		showError(inputNum, "Hay 6 tipos de pizzas disponibles");
	} else {
		clearError(inputNum);

		valid = true;
	}

	return valid;
};

const isValidForm = () => {
	const isNumberIdValid = checkNumber();

	return isNumberIdValid;
};

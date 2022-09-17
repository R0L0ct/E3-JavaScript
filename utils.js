const setImg = (id) => {
	return id == 1
		? "img/Mozzarella.png"
		: id == 2
			? "img/Napolitana.png"
			: id == 3
				? "img/JamonYQueso.png"
				: id == 4
					? "img/Fugazzeta.png"
					: id == 5
						? "img/Calabresa.png"
						: "img/CuatroQuesos.png";
};

const isEmpty = (valor) => (valor === "" ? true : false);

const showError = (input, message) => {
	const formField = input.parentElement;
	formField.classList.add("error");
	const error = formField.querySelector("small");
	error.textContent = message;
};

const clearError = (input) => {
	const formField = input.parentElement;
	formField.classList.remove("error");
	const error = formField.querySelector("small");
	error.textContent = "";
};

const isNumberValid = (number, min, max) =>
	number < min || number > max ? false : true;

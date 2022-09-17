const form = document.getElementById("form");
const card = document.getElementById("card_container");
const inputNum = document.getElementById("inputNumber");

const pizzas = [
	{
		id: 1,
		name: "Mozzarella",
		ingredientes: ["tomate", "oregano", "muzzarella"],
		precio: 300,
	},
	{
		id: 2,
		name: "Napolitana",
		ingredientes: [
			"tomate",
			"muzzarella",
			"oregano",
			"anchoas",
			"alcaparras",
			"aceite",
		],
		precio: 400,
	},
	{
		id: 3,
		name: "Jamon y queso",
		ingredientes: [
			"tomate",
			"mozzarella",
			"oregano",
			"jamon serrano",
			"queso parmesano",
			"rucula",
			"aceite de oliva",
		],
		precio: 200,
	},
	{
		id: 4,
		name: "Fugazzeta",
		ingredientes: ["mozzarella", "cebolla", "parmesano"],
		precio: 500,
	},
	{
		id: 5,
		name: "Calabresa",
		ingredientes: ["tomate", "mozzrella", "longaniza", "champiñones"],
		precio: 600,
	},
	{
		id: 6,
		name: "Cuatro quesos",
		ingredientes: ["mozzarella", "fontina", "roquefort", "provolone"],
		precio: 700,
	},
];

let pizza = JSON.parse(localStorage.getItem("pizza")) || [];

const inputIdValue = () => {
	const pizzitas = pizzas.filter(
		(number) => number.id === parseInt(inputNum.value)
	);

	return pizzitas;
};

const render = () => {
	const pizzax = inputIdValue();
	const id = pizzax.map((id) => id.id);
	const name = pizzax.map((name) => name.name);
	const price = pizzax.map((price) => price.precio);
	const ingredients = pizzax.map((ingredients) => ingredients.ingredientes);
	return `
      <div class="left_card">
        <h2>${name}</h2>
        <h4>Precio: $${price}</h4>
        <p class="ing_title">Ingredientes :</p>
        <p class="ing">${ingredients}</p>
      </div>
      <img src=${setImg(id)} alt="" />

	`;
};

const saveData = () => {
	pizza = [
		...pizza,
		{
			id: pizza.length + 1,
			opcion: inputNum.value,
		},
	];
};

const saveToLocalStorage = () => {
	localStorage.setItem("pizzas", JSON.stringify(pizza));
};

const renderPizza = () => {
	card.innerHTML = render();
};

const submitForm = (e) => {
	e.preventDefault();

	if (isValidForm()) {
		saveData();
		saveToLocalStorage();
		renderPizza();
	}
};

const init = () => {
	form.addEventListener("submit", submitForm);
};

init();

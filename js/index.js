"use strict";

import Figure from "./Figure.js";
import Circle from "./Circle.js";
import Rectangle from "./Rectangle.js";
// import Square from "./Square.js";

const form = {
	changeSelect(e) {
		document.querySelector("#otherInputs").innerHTML = "";
		if (e.target.value === "rectangle") {
			form.inputElementsWithLabel("width", "width");
			form.inputElementsWithLabel("height", "height");
			console.log("rect");
		}
		if (e.target.value === "circle") {
			form.inputElementsWithLabel("radius", "radius");
		}
		if (e.target.value === "square") {
			form.this.inputElementsWithLabel("sidelenght", "sidelenght");
		}
	},
	init() {
		console.log("Form init!");
		const figure = new Figure("figure");
		console.log(figure);
		document.querySelector("#select").addEventListener("change", form.changeSelect);
		document.getElementById("form").addEventListener("submit", form.submitForm);
	},
	inputElementsWithLabel(label, id) {
		let htmlString = `<label>
        YOUR LABEL NAME
        <input id="YOUR INPUT ID" type="number">
      </label>`;

		document.querySelector("#otherInputs").insertAdjacentHTML("beforeend", htmlString);
	},
	submitForm(e) {
		console.log("submitFrom");
        e.preventDefault();
        const type = document.getElementById('select');
        if (type === 'rectangle'){
            const width = new document.getElementById('width').value;
            const height = new document.getElementById('height').value;
            const rectangle = new Rectangle(width, height);
            document.getElementById('#results').
        }
	},
};

form.init();

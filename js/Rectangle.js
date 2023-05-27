"use strict";

import Figure from "./Figure.js";

export default class Rectangle extends Figure {
	constructor(name, witdh, height) {
		super(name);
		this.witdh = witdh;
		this.height = height;
	}

	get area() {
		return this.witdh * this.height;
	}

	get circumference() {
		return (this.witdh + this.height) * 2;
	}
	get htmlString() {
		return `<div class="result">
  <div class="figure rectangle" style="width: WIDTHpx; height: HEIGHTpx;"></div>
  <div class="infoBox">
    <h3>${this.name}</h3>
    <dl>
      <dt>Height</dt>
      <dd>HEIGHT px</dd>

      <dt>Width</dt>
      <dd>WIDTH px</dd>

      <dt>Area</dt>
      <dd>AREA px</dd>

      <dt>Circumference</dt>
      <dd>CIRCUMFERENCE px</dd>
    </dl>
  </div>
</div>`;
	}
}

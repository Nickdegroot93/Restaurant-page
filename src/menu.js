import { createHtmlElement } from './createHTML';
import { navBar } from './nav.js';

function menuSection() {
	const container = document.querySelector('#content');
	const menuPage = createHtmlElement('section', null, ['menu']);
	menuPage.innerHTML = `
<div class="menu-box">
	<div class="menu-box__title">MENU</div>
	<div class="menu-box__sub-title">
		<span id="price">2 COURSES £65 — 3 COURSES £90</span>
		<span id="hours">Lunch & Early Evenings Bookings Until 6pm</span>
		<span id="hours">Excludes Friday & Saturday Evenings</span>
	</div>
	<div class="meals">
		<div class="meal-box">
			<div class="meal-type">Starter</div>
			<div class="meal-title">Seabream Ceviche</div>
			<div class="meal-ingredients">
				Tiger's milk, camote, avocado, cancha corn
			</div>
			<div class="meal-seperator">or</div>
			<div class="meal-title">Heritage Tomato Ceviche</div>
			<div class="meal-ingredients">Tree tomato, chia, avocado</div>
		</div>
		<div class="meal-box">
			<div class="meal-type">Main</div>
			<div class="meal-title">Lamb Seco</div>
			<div class="meal-ingredients">
				Organic braised lamb, pumpkin purée, faba beans
			</div>
			<div class="meal-seperator">or</div>
			<div class="meal-title">Baked Celeriac</div>
			<div class="meal-ingredients">
				Artichokes, huacatay Andean mint, coconut cream
			</div>
		</div>
		<div class="meal-box">
			<div class="meal-type">Desserts</div>
			<div class="meal-title">Grilled Piña Colada</div>
			<div class="meal-ingredients">
				Coconut cream, candied orange, lemon verbena tuile
			</div>
			<div class="meal-seperator">or</div>
			<div class="meal-title">Alfajores</div>
			<div class="meal-ingredients">
				Traditional Peruvian short bread with dulce de leche
			</div>
		</div>
	</div>
</div>`;
	container.appendChild(menuPage);
}

export { menuSection };

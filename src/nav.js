import { createHtmlElement } from './createHTML.js';

function navBar() {
	// Create main nav section
	const nav = createHtmlElement('div', null, ['nav']);
	// Create the logo-box including img
	nav.innerHTML = `
	<div class="landing-page__logo-box">
		<img src="./img/logo-white.png" alt="Logo" class="landing-page__logo" />
	</div>
	<ul class="nav__list">
	<li class="nav__item home-btn">Home</li>
		<li class="nav__item menu-btn">Menu</li>
		<li class="nav__item about-btn">About Us</li>
		<li class="nav__item contact-btn">Contact</li>
	</ul>
`;
	return nav;
}
export { navBar };

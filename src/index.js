import { navBar } from './nav.js';
import { createHtmlElement } from './createHTML.js';
import { menuSection } from './menu.js';

const container = document.querySelector('#content');
container.appendChild(navBar());

// Run the 'init' page
landingPage();

const homeBtn = document.querySelector('.home-btn');

// Event listeners

homeBtn.addEventListener('click', () => {
	clearPage();
	landingPage();
});

function clearPage() {
	while (container.childNodes.length > 1) {
		container.removeChild(container.lastChild);
	}
}

function centerBox() {
	// Create main textbox
	const textBox = createHtmlElement('div', null, ['landing-page__text-box']);
	// Append textbox to container
	container.appendChild(textBox);
	// Create text
	const headingText = createHtmlElement('h1', null, ['heading-primary']);
	const maingText = createHtmlElement(
		'span',
		null,
		['heading-primary--main'],
		'berymad'
	);
	const subText = createHtmlElement(
		'span',
		null,
		['heading-primary--sub'],
		'Luxury cuisine'
	);
	// Append elements
	headingText.appendChild(maingText);
	headingText.appendChild(subText);
	textBox.appendChild(headingText);
	// Create button
	const ctaButton = createHtmlElement(
		'a',
		null,
		['btn', 'btn--main'],
		'Discover Our Menu'
	);
	ctaButton.setAttribute('href', '#');

	ctaButton.addEventListener('click', () => {
		clearPage();
		menuSection();
	});
	textBox.appendChild(ctaButton);
	// Return main textbox
	return textBox;
}

function landingPage() {
	const container = document.querySelector('#content');
	// Create a section with the class "landing-page"
	let landingPage = createHtmlElement('section', null, ['landing-page']);
	// Append section landing page to main container
	container.appendChild(landingPage);
	// Appen the navbar to the section

	landingPage.appendChild(centerBox());
}

export { clearPage, landingPage };

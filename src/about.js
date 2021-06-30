import { createHtmlElement } from './createHTML';

function aboutSection() {
	const container = document.querySelector('#content');
	const aboutPage = createHtmlElement('section', null, ['about']);
	aboutPage.innerHTML = `
    <div class="about__text">
    <span class="about__text-main">About Us</span>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum
    leo et sem laoreet, non tincidunt est vulputate. Quisque ultrices
    velit vitae aliquam dapibus. Interdum et malesuada fames ac ante ipsum
    primis in faucibus. Integer nec euismod augue. Curabitur mollis
    aliquet risus vitae ornare. Nunc vel mattis elit. Donec ac purus
    metus. Praesent commodo massa in dui hendrerit sagittis. Cras gravida
    fringilla ex, ac vulputate mauris hendrerit eu. Ut et luctus libero.
    Curabitur eros orci, mollis sit amet nibh quis, eleifend gravida nisl.
    Cras suscipit pretium turpis quis commodo. Maecenas vulputate elit
    magna, eu consectetur lorem iaculis at. Donec non arcu a leo molestie
    iaculis eget a est. Vestibulum nec faucibus neque, at consequat massa.
    Donec tristique turpis vitae dolor egestas, a interdum est mollis.
    Nulla maximus cursus purus quis eleifend. Donec interdum ante ut ex
    laoreet, in vulputate eros hendrerit. Donec lectus turpis, egestas vel
    condimentum quis, ultrices vel purus.
</div>
<div class="about__img-box">
    <img src="img/dessert.jpg" alt="logo" class="about__img-1" />
    <img src="img/table.jpg" alt="logo" class="about__img-2" />
    <img src="img/inside.jpg" alt="logo" class="about__img-3" />
</div>`;
	container.appendChild(aboutPage);
}

export { aboutSection };

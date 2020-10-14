document.addEventListener('DOMContentLoaded', () => {
	const accordionTitles = document.querySelectorAll('.accordion-title');

	let currentIndex = null;

	[...accordionTitles].forEach((title, index) => {
		title.addEventListener('click', () => {
			title.classList.toggle('accordion-active');
			currentIndex = index;
			[...accordionTitles].forEach((e, i) => {
				if (i !== currentIndex) {
					e.classList.remove('accordion-active');
					activeAccordion(e);
				}
			});

			activeAccordion(title);
		});
	});

	/*Active accordion class*/
	function activeAccordion(elem) {
		const accordionContent = elem.nextElementSibling;
		if (!elem.classList.contains('accordion-active')) {
			elem.children[0].style.transform = null;
			accordionContent.style.maxHeight = null;
		} else {
			accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
			elem.children[0].style.transform = 'rotate(180deg)';
		}
	}
});

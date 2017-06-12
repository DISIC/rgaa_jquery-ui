var suite = require('rgaa-test-suite');


/**
 *
 */
function accordionFactory(options) {
	const $accordion = $(`<div id="accordion"></div>`);

	let selectedIndex = -1;
	options.panels.forEach((panel, index) => {
		$(`<h3>${panel.title}</h3>
		  <div>
		    <p>${panel.content}</p>
		  </div>`
		).appendTo($accordion);

		if (panel.selected) {
			selectedIndex = index;
		}
	});

	$accordion.accordion({
      collapsible: true,
      animate: false
    });

    if (selectedIndex >= 0) {
    	$accordion.accordion('option', 'active', selectedIndex);
    }

    return $accordion[0];
}


/**
 *
 */
describe(
	'jQuery Accordion test',
	suite.accordion(accordionFactory)
);

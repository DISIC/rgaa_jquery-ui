var suite = require('rgaa-test-suite');

function sliderFactory({id, min, max, current, withLabel, isVertical}) {
	const $slider = $(`
		<div id="slider"></div>
		${withLabel ? '<div class="label"></div>' : ''}
	`);

	$slider.slider({
		min,
		max,
		value: current,
		ariaValuetext: '€',
		label: ['curseur simple']
	});

	if (isVertical) {
		$slider.slider("option", "orientation", "vertical");
	}

	return $slider[0];
}

describe(
	'jQuery ui slider',
	suite.slider(sliderFactory)
);

var suite = require('rgaa-test-suite');


/**
 *
 */
function dialogFactory(options) {
	const $dialog = $(`
		<div id="dialog" title="${options.title}">
			${options.content}
		</div>
	`);

	$dialog.dialog({
		dialogClass: "id-dialog",
		autoOpen: false
	});

	return {
		open() {
			$dialog.dialog('open');
		},
		close() {
			$dialog.dialog('close');
		}
	};
}

/**
 *
 */
describe(
	'jQuery Dialog test',
	suite.dialog(dialogFactory)
);




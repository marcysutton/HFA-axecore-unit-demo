/* global describe, jasmine, it, expect, axe, document */

describe('dropdown', function() {
	'use strict';

	var path = 'http://localhost:9001/';

	var dropdownSelector = '.utility-item-dropdown',
			dropdownTriggerSelector = '.utility-link',
			dropdownTargetSelector = '.utility-sublist.social';

	var dropdown = $(dropdownSelector);

	beforeEach(function() {
		jasmine.addMatchers(customMatchers);
		jasmine.getStyleFixtures().fixturesPath = path;
		jasmine.getFixtures().fixturesPath = path;

		loadStyleFixtures('hrc-screen.css');
		loadFixtures('dropdown.html');
	});

	it('should work with the keyboard', function() {
		var trigger = $(dropdownTriggerSelector),
				target = $(dropdownTargetSelector);

		trigger.focus();
		
		expect(target).toBeVisible();
	});

	it('should have no accessibility violations', function(done) {
		axe.a11yCheck(dropdownSelector, {}, function (result) {
			if (result.violations.length > 0) {
				console.log(JSON.stringify(result.violations, null, 4));
			}
			expect(result).toHaveNoViolations();
			done();
		});
	});
});

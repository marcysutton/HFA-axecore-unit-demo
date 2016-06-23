var customMatchers = {
	toHaveNoViolations: function() {
		return {
			compare: function(result) {
				var violations = result.violations.length;
				return {
					message:  "Expected no accessibility violations but found " + violations,
					pass: violations == 0
				}
			}
		}
	}
}
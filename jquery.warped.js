/**
 * Usage example :
 * <code>
 * // Warp letters from every h1 titles with the class 'warp'
 * $("h1.warp").warped();
 * </code>
 */
(function define($) {

	var $warpedStyle;

	function warp(letters, $container) {
		var first = letters.shift(), last = letters.pop();
		if (first) {
			$container.append(first);
			if (letters.length) {
				$container.append(warp(letters, $("<span>").addClass("warped")));
			}
			if (last) {
				$container.append(last);
			}
		}
		return $container;		
	}

	$.fn.warped = function() {
		// Create once the style needed for our effect
		if (!$warpedStyle) {
			$warpedStyle = $("<style>").text("span.warped {font-size: 90%; vertical-align: 3%;}").appendTo("head");
		}

		return $(this).each(function(i, elt) {
			var $container = $(elt),
				letters = $container.text().split("");
				
			$container.empty();
			warp(letters, $container);
		});
	};
})(jQuery);

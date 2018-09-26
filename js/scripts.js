$(".timeline li:odd").addClass("timeline-inverted");

$(".description-toggle").click(function () {
	$toggler = $(this);
	$content = $toggler.closest(".timeline-body").find(".description");

	$content.slideToggle(500, function () {
		$toggler.html(function () {
			//change text based on condition
			return $content.is(":visible") ? '<a class="fa fa-angle-up"></a>' : '<a class="fa fa-angle-down"></a>';
		});
	});
});

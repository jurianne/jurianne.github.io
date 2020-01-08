function slideSwitch() {
	var $active = $('.slideshow li.active');

	if ($active.length == 0) $active = $('.slideshow li:last');

	var $next = $active.next().length ? $active.next()
		: $('.slideshow li:first');

	$active.addClass('last-active');

	$next.css({ opacity: 0.0 })
		.addClass('active')
		.animate({ opacity: 1.0 }, 1000, function () {
			$active.removeClass('active last-active');
		});
}

$(function () {
	setInterval("slideSwitch()", 2100);
});


$(function () {

	/*
		Drawer Menu
	------------------------------------------------*/
	$('.js-button-hamburger').click(function () {
		$('body').toggleClass('is-active-drawer');

		if ($(this).attr('aria-expanded') == 'false') {
			$(this).attr('aria-expanded', true);
			// スクロールを止めるクラスを追加
			$('body').addClass('stop-scroll');
		} else {
			$(this).attr('aria-expanded', false);
			// スクロールを止めるクラスを削除
			$('body').removeClass('stop-scroll');
		}
	});

});

  /* ==============================
    Accordion
  ============================== */
  $(function () {
    $('.js-hidden-item').hide();

    $('.js-button').click(function () {
      // イベントが発生した要素の次の要素
	  $('.js-hidden-item').slideDown(300);
	  $(this).hide();
    });
  });

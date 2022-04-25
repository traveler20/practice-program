$(function () {
	// コンテンツの開閉
	$(".menuacc-js h2").on("click", function () {
		$(this).parent().next().slideToggle();
		$(this).toggleClass("active");
	});
});

$('.btnsmenu-js a[href^="#"]').on("click", function () {
	var href = $(this).attr("href");
	if ($(href).next().css("display") == "none") {
		$(href).children("h2").trigger("click");
	}
});

$(".menuacc-js").click(function () {
	$(".menuacc-js").not(this).next().slideUp(300);
	//クリックされたmenuacc-js以外のcontentaccを閉じる
});

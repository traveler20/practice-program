(() => {
	class Accordion {
		//初期化
		constructor(obj) {
			//consoleでインスタンスが何かを確認する
			console.log("obj", obj.hookName);

			//各インスタンスを変数に定義
			const $elm = document.querySelector(obj.hookName);
			const $trigger = $elm.getElementsByTagName(obj.tagName);

			//triggerの数分関数が実行されるように設定
			const triggerLen = $trigger.length;
			let index = 0;
			while (index < triggerLen) {
				$trigger[index].addEventListener("click", (e) => this.clickHandler(e));
				index++;
			}
		}

		//クリックしたら実行される処理
		clickHandler(e) {
			e.preventDefault();

			//クリックする部分と中身を変数に
			const $target = e.currentTarget;
			const $content = $target.nextElementSibling;

			//表示されているものをクリックしたら隠して、そうじゃないと表示する処理
			if ($content.style.display === "block") {
				$content.style.display = "none";
			} else {
				$content.style.display = "block";
			}
		}
	}

	//新しいクラスを設定してインスタンス化
	const fuckingAccordion = new Accordion({
		hookName: "#js-faq",
		tagName: "p",
	});

	const dummyAccordion = new Accordion({
		hookName: "#js-accordion",
		tagName: "a",
	});

	const miniAccordion = new Accordion({
		hookName: "#js-accordion-mini",
		tagName: "dt",
	});
})();

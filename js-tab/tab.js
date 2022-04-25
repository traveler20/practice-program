//JSの塊指定(この中でしか変数が使えないようにするコンフリクト対策)
(() => {
	const $doc = document;
	const $tab = $doc.getElementById("js-tab");
	//tab-nav-itemを変数に
	const $nav = $tab.querySelectorAll("[data-nav]");
	//tab-contents-itemを変数に
	const $content = $tab.querySelectorAll("[data-content]");
	//is-activeを入れ替えられるよう変数に
	const ACTIVE_CLASS = "is-active";
	const navLen = $nav.length;

	//初期化(初期状態の設定)
	//display:noneで消しているtab-content[0]を表示
	const init = () => {
		$content[0].style.display = "block";
	};
	init();

	//クリックしたら起こるイベント
	const handleClick = (e) => {
		e.preventDefault();

		//クリックされたnavとそのdataを取得
		const $this = e.target;
		const targetVal = $this.dataset.nav;

		//対象外のnav, content全て一旦リセットする
		let index = 0;
		while (index < navLen) {
			$content[index].style.display = "none";
			$nav[index].classList.remove(ACTIVE_CLASS);
			index++;
		}

		//対象のコンテンツをアクティブ化する
		$tab.querySelectorAll(
			'[data-content="' + targetVal + '"]'
		)[0].style.display = "block";
		$nav[targetVal].classList.add(ACTIVE_CLASS);
	};

	//全nav要素に対して関数を適応・発火
	let index = 0;
	while (index < navLen) {
		$nav[index].addEventListener("click", (e) => handleClick(e));
		index++;
	}
})();

"use strict";

const mainScreen = document.getElementById("mainScreen");
const inp = document.getElementById("inp");
const btn = document.getElementById("btn");

// メッセージ一覧 ================================
const randomMsges = [
	"猫の手貸してあげようか😹？",
	"頑張ってるね😉",
	"たまには休憩もするんだよ♪",
	"甘ったれたこと言ってる暇あるなら手動かしな。",
	"お疲れ様💖",
	"にゃ😻",
	"は？",
	"だって、人間だもの。",
	"頑張った分だけ報われる日がくるさ♪",
	"好き！！！",
	"ʕ•̫͡•ʕ•̫͡•ʔ•̫͡•ʔ•̫͡•ʕ•̫͡•ʔ•̫͡•ʕ•̫͡•ʔʕ•̫͡•ʕ•̫͡•ʔ•̫͡•ʔ•̫͡•ʕ•̫͡•ʔ•̫͡•ʕ•̫͡•ʔʕ•̫͡•ʕ•̫͡•ʔ•̫͡•ʔ•̫͡•ʕ•̫͡•ʔ•̫͡•ʕ•̫͡•ʔʕ•̫͡•ʕ•̫͡•ʔ•̫͡•ʔ",
	"もっと頑張ってみようよ！",
	"🤔",
	"えーっと、やる気あんの？",
	"そんな君が好き！",
	"( ´_ゝ`)ﾌｯ",
	"ぴえん🥺",
	"何を言ってるのか分かりません。",
	"分かりみが深い🥺",
	"爆笑にゃんだけどwwwwww",
	"出来ない理由ばかり考えてない？まず、やってみよ？",
	"黙ってコードを書けよハゲ",
	"ソースコードは嘘をつかない。",
	"「完璧であることより、まず終わらせることが重要だ」ってマーク・ザッカーバーグが言ってたにゃ。",
	"「最大のリスクは、リスクを取らないことだ」ってマーク・ザッカーバーグが言ってたにゃ。",
	"どんな成功も 、失敗を繰り返して生まれるから自信持って😉",
	"	コードは一晩寝かせろってさ。",
	"いつまで休憩してんだよ、タコ",
	"いい加減勉強に戻りなさい！！！",
	"難しいほど価値があるんだにゃ。",
	"ベストを尽くせよ！！！",
	"結果が全てじゃない。それまでの過程に価値がある✨",
	"後ほど１会話ごとに1,000円請求致しますのでご了承下さい。",
	"楽しくプログラミング学習続けよ♪",
	"君の脳みそ、バグ起こしてない？修正しな！",
	"継続できる人が一番強いよ。一緒に継続頑張ろ！",
];

// on load =======================================
const firstMsg = function () {
	const loadTime = new Date();
	const hours = loadTime.getHours();
	const min = loadTime.getMinutes();
	const onLoadTime = hours + ":" + ("00" + min).slice(-2);

	const item = `<div class="catMsg-wrap">
                    <i class="fas fa-cat catIcon"></i>
                    <p class="catMsg">僕にしゃべりかけてね！<br>（たまに毒吐くにゃん♪）</br></p>
                    <p class="catTIme">${onLoadTime}</p>
                    </div>
                  `;
	mainScreen.insertAdjacentHTML("beforeend", item);
};

setTimeout("firstMsg()", 600);

// Userからのメッセージ ==========================
function userMsg(message, sendTime) {
	const item = `<div class="myMsg-wrap">
                    <p class="myMsg">${message}</p>
                    <p class="myTIme">${sendTime}</p>
                    </div>
                  `;
	mainScreen.insertAdjacentHTML("beforeend", item);
}

// 猫様からのメッセージ ==========================
function catMsg(randomMsg) {
	const catTime = new Date();
	const hours = catTime.getHours();
	const min = catTime.getMinutes();
	const sendCatTime = hours + ":" + ("00" + min).slice(-2);

	const item = `<div class="catMsg-wrap">
                    <i class="fas fa-cat catIcon"></i>
                    <p class="catMsg">${randomMsg}</p>
                    <p class="catTIme">${sendCatTime}</p>
                    </div>
                  `;
	mainScreen.insertAdjacentHTML("beforeend", item);

	//画面の高さが可変した分の背景色を追加
	mainScreen.style.backgroundColor = "rgb(241, 214, 219)";

	// 表示範囲を下端に来るようにする
	mainScreen.scrollIntoView(false);
}

// ===============================================
btn.addEventListener("click", () => {
	const message = inp.value;

	const clickTime = new Date();
	const hours = clickTime.getHours();
	const min = clickTime.getMinutes();
	const sendTime = hours + ":" + ("00" + min).slice(-2);

	if (message === "") {
		inp.value = "";
		return; //以下処理をストップさせる
	} else {
		userMsg(message, sendTime);
		inp.value = "";
	}

	let randomMsg = randomMsges[Math.floor(Math.random() * randomMsges.length)];
	// ↓setTimeoutはコールバック関数に引数を渡す機能をサポートしないため、以下無名関数を使用
	setTimeout(function () {
		catMsg(randomMsg);
	}, 800);

	// 表示範囲を下端に来るようにする関数
	mainScreen.scrollIntoView(false);

	inp.blur(); //iosキーボード非表示
});

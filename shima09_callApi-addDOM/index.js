// DOM
//index.htmlのタグを変数に
const button = document.getElementById("addBtn");
const lists = document.getElementById("lists");

// 関数（メソッド）
function addList(user) {
	//liタグを追加する変数を定義
	const list = document.createElement("li");
	//追加したliタグ内のテキストを変数に
	list.innerText = user.name;
	//追加したliタグを#listsに追加する
	lists.appendChild(list);
}

//上の関数の引数であるuserを返す関数
async function getUsers() {
	//APIを取得して変数に定義
	const res = await fetch("https://jsonplaceholder.typicode.com/users");
	const users = await res.json();
	return users;
}

async function listUsers() {
	const users = await getUsers();
	users.forEach(addList);
}

// イベント
window.addEventListener("load", listUsers);
button.addEventListener("click", listUsers);

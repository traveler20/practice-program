const express = require('express');
const mysql = require('mysql');
const session = require('express-session');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'progate',
  password: 'password',	
  database: 'blog'
});

app.use(
  session({
    secret: 'my_secret_key',
    resave: false,
    saveUninitialized: false,
  })
);

app.use((req, res, next) => {
  if (req.session.userId === undefined) {
    res.locals.username = 'ゲスト';
    res.locals.isLoggedIn = false;
  } else {
    res.locals.username = req.session.username;
    res.locals.isLoggedIn = true;
  }
  next();
});

app.get('/', (req, res) => {
  res.render('top.ejs');
});

app.get('/list', (req, res) => {
  connection.query(
    'SELECT * FROM articles',
    (error, results) => {
      res.render('list.ejs', { articles: results });
    }
  );
});

app.get('/article/:id', (req, res) => {
  const id = req.params.id;
  connection.query(
    'SELECT * FROM articles WHERE id = ?',
    [id],
    (error, results) => {
      res.render('article.ejs', { article: results[0] });
    }
  );
});

app.get('/signup', (req, res) => {
  res.render('signup.ejs');
});

app.post('/signup', 
  (req, res, next) => {
    console.log('入力値の空チェック');
    // 3つの定数を定義し、それぞれにユーザー登録フォームの値を代入してください
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    // 空の配列errorsを定義してください。
    const errors = [];
    
    // 3つの定数が空文字列と等しいかどうかを調べるif文をそれぞれ作成してください。
    // 空の場合、配列errorsにエラーメッセージを追加してください。
    if (username === '') {
      errors.push('ユーザー名が空です');
    }

    if (email === '') {
      errors.push('メールアドレスが空です');
    }

    if (password === '') {
      errors.push('パスワードが空です');
    }
    // console.logを用いて、ターミナルに配列errorsを出力してください
    console.log(errors);
    
    // if文を用いて、配列errorsの要素数が0より大きいかどうかを確認してください
    // また分岐結果に応じて、処理を記載してください
    if (errors.length > 0) {
      res.redirect('/signup');
    } else {
      next();
    }
    // 下記のコードを削除してください
    // ここまで削除してください
  },
  (req, res) => {
    console.log('ユーザー登録');
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    connection.query(
      'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
      [username, email, password],
      (error, results) => {
        req.session.userId = results.insertId;
        req.session.username = username;
        res.redirect('/list');
      }
    );
  }
);

app.get('/login', (req, res) => {
  res.render('login.ejs');
});

app.post('/login', (req, res) => {
  const email = req.body.email;
  connection.query(
    'SELECT * FROM users WHERE email = ?',
    [email],
    (error, results) => {
      if (results.length > 0) {
        if (req.body.password === results[0].password){
          req.session.userId = results[0].id;
          req.session.username = results[0].username;
          res.redirect('/list');
        } else {
          res.redirect('/login');
        }    
      } else {
        res.redirect('/login');
      }
    }
  );
});

app.get('/logout', (req, res) => {
  req.session.destroy(error => {
    res.redirect('/list');
  });
});

app.listen(3000);

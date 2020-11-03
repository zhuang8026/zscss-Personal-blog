const express = require("express");
// const moment = require("moment-timezone");
const upload = require(__dirname + "/upload-module");
const db = require(__dirname + "/db_connect");

const router = express.Router();

// 測試連線
// http://localhost:3009/admin/
router.get("/", (req, res) => {
  console.log(req.session); // Pusheen
  res.send("admin");
});

// admin登入 | signin 使用
// http://localhost:3009/admin/login
router.post("/signin", upload.none(), (req, res) => {
  //res.render('address-book/login');
  // console.log(req.body);

  const output = {
    body: req.body,
    state: null,
    nickname: null,
    userimg: null,
  };
  const sql = "SELECT * FROM admin WHERE account=? AND password=SHA1(?)";

  db.query(sql, [req.body.account, req.body.password]).then(([result]) => {
    // console.log(result);
    if (result && result.length > 0) {
      // req.session.adminSession = result[0]; // adminSession 这是自己定义的，将result的资料赋值给 admin
      output.state = 200;
      output.nickname = result[0].nickname;
      output.userimg = result[0].userimg;
    } else {
      output.state = 404;
    }
    res.json(output);
  });
});

// 全部admin | admin list 使用
// http://localhost:3009/admin/allAdmin
router.get("/allAdmin", (req, res) => {
  const sql = "SELECT sid, account, nickname, userimg FROM admin WHERE 1";
  db.query(sql).then((results) => {
    // console.log(results);
    res.json(results[0]);
  });
});

// admin 確認是否有帳號 | signin 使用
// http://localhost:3009/admin/checkinAccount
router.post("/checkinAccount", upload.none(), (req, res) => {
  const output = {
    body: req.body,
    state: null,
    nickname: null,
  };
  const sql = "SELECT * FROM admin WHERE account=?";
  // console.log(req.body);
  db.query(sql, [req.body.account]).then(([result]) => {
    // console.log(result);
    if (result && result.length > 0) {
      output.state = 200;
      output.nickname = result[0].nickname;
    } else {
      output.state = 404;
    }
    res.json(output);
  });
});

module.exports = router;

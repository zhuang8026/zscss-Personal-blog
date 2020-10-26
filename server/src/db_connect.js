const mysql = require("mysql2"); //使用

const pool = mysql.createPool({
  host: "localhost",
  user: "otis",
  password: "otis",
  database: "zscss_database",
  waitForConnections: true, // 等待连线
  connectionLimit: 10, // 连线资料库个数设定
  queueLimit: 0, // 无限制连线人数
});

module.exports = pool.promise();

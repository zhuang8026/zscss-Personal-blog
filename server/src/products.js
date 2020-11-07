const express = require("express");
const moment = require("moment-timezone");
// const upload = require(__dirname + '/upload-module');
const db = require(__dirname + "/db_connect");

const router = express.Router();

//http://localhost:3009/products/
router.get("/", (req, res) => {
  res.send("產品列表");
});

// 星星評分
// http://localhost:3009/products/all
router.get("/all", (req, res) => {
  const sql = `SELECT itemId, itemStar FROM items WHERE 1`;
  db.query(sql).then((results) => {
    // console.log(results);
    res.json(results);
  });
});

// 星星評分篩選 + 資料分頁
// http://localhost:3009/products/pages/1/5 (Page) ~ ...
router.get("/pages/:page?/:star?", async (req, res) => {
  const output = await getDataList(req);
  res.json(output);
});

// 分頁
const getDataList = async (req) => {
  // console.log(req);
  const perPage = 5;
  let page = parseInt(req.params.page) || 1;
  let star = parseInt(req.params.star);
  // let typeBrands = req.params.type || '';
  // console.log("page", page);
  // console.log('types',typeBrands)
  const output = {
    star: star, // 星星數量
    page: page, // 目前在第幾頁
    perPage: perPage, // 每頁有10筆資料
    totalRows: 0, // 總共有幾筆資料
    totalPages: 0, //總共有幾頁
    rows: [],
  };

  const [r1] = await db.query("SELECT COUNT(1) num FROM `items`");

  output.totalRows = r1[0].num; // 全部資料數量
  output.totalPages = Math.ceil(output.totalRows / perPage);
  if (page < 1) page = 1;
  if (page > output.totalPages) page = output.totalPages;
  if (output.totalPages === 0) page = 0;
  output.page = page;

  if (!output.page) output;

  // const sql = `SELECT * FROM items WHERE itemsbrand=${typeBrands} LIMIT ${(page-1)*perPage}, ${perPage}`;
  const sql = `SELECT * FROM items Where itemStar${
    star !== 0 ? "=" + star : ""
  } ORDER BY itemId ASC LIMIT ${(page - 1) * perPage}, ${perPage}`;

  const [r2] = await db.query(sql);
  if (r2) output.rows = r2;

  // 如果 star 分數 不是 all rating 才執行
  if (star !== 0) {
    output.totalRows = r2.length;
    output.totalPages = Math.ceil(output.totalRows / perPage);
    if (page < 1) page = 1;
    if (page > output.totalPages) page = output.totalPages;
    if (output.totalPages === 0) page = 0;
  }

  output.rows = r2;
  for (let i of r2) {
    i.created_at = moment(i.created_at).format("YYYY/MM/DD HH:mm:ss");
    i.updated_at = moment(i.updated_at).format("YYYY/MM/DD HH:mm:ss");
  }

  return output;
};

// SELECT `itemsbrand` FROM `items` WHERE 1
// 全站 搜索 左側 menu
// http://localhost:3009/products/list
router.get("/list/:getname?", (req, res) => {
  console.log("getname:", req.params.getname);
  let getname = req.params.getname || "";
  let output = [];
  // const sql = `SELECT * FROM items WHERE itemsbrand = ?`;
  const sql = "SELECT * FROM `items`";
  db.query(sql).then((results) => {
    // console.log(results)

    // 模糊搜尋 主要功能
    function strpos(haystack, needle, start) {
      if (typeof start === "undefined") {
        start = 0;
      }
      if (!needle) {
        return 0;
      }
      var j = 0;
      for (var i = start; i < haystack.length && j < needle.length; i++) {
        if (haystack.charAt(i) === needle.charAt(j)) {
          j++;
        } else {
          j = 0;
        }
      }
      if (j === needle.length) {
        return i - needle.length;
      }
      return -1;
    }

    results[0].forEach((item, index, array) => {
      // console.log(item['itemName']);
      if (
        strpos(item["itemName"].toLowerCase(), getname.toLowerCase(), 0) !== -1
      ) {
        console.log(`${index}符合,名稱:${item["itemName"]}`);
        // output.push(item['itemName'])
        output.push(item);
      } else {
        console.log(`${index}不符合`);
      }
    });

    // res.json(results[0]);
    res.json(output);
  });
});

// 全站 搜索 navbar search
// http://localhost:3009/products/search/a80
router.get("/search/:getSearch?", (req, res) => {
  let getSearch = req.params.getSearch;
  // console.log('getSearch:', getSearch)
  const sql = `SELECT * FROM items WHERE itemName LIKE '%${getSearch}%' OR itemsbrand LIKE '%${getSearch}%' `;
  db.query(sql).then(([results]) => {
    // console.log(results)
    res.json(results);
  });
});

// 單筆細節資料
// http://localhost:3009/products/detail/2
router.get("/detail/:id", (req, res) => {
  // console.log(req.params.id);
  let id = req.params.id;
  // let sql = `SELECT * FROM items WHERE itemId=${id}`;
  let sql =
    "SELECT * FROM `items` AS `it` INNER JOIN `multiple_images` AS `mu` ON `it`.`itemId` = `mu`.`itemId` WHERE `it`.`itemId`=" +
    id;
  let output = {};
  db.query(sql).then((results) => {
    // if (error) throw error;
    // console.log(results);
    output.results = results;
    let relatedProduct = results[0];
    // console.log(relatedProduct[0])
    res.json(relatedProduct[0]);
    // sql = `SELECT * FROM items WHERE product_category = '${relatedProduct.product_category}' AND product_id != ${relatedProduct.product_id}`;
    // console.log(sql)
    // return db.query(sql);
  });
});

module.exports = router;

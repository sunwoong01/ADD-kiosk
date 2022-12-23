// // express 모듈 호출
// const express = require("express");
// const app = express();
// const PORT = process.env.PORT || 4000;

// // http://localhost:4000/ 으로 접속 시 응답메시지 출력
// app.get("/", (req, res) => {
//   res.send("Server Response Success");
// });

// app.listen(PORT, () => {
//   console.log(`Server run : http://localhost:${PORT}/`);
// });

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "react_kiosk_db",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Server Response Success");
});

// Notes
// req means getting data from front-end
// res means sending a response to server
// app.get("/", (req, res) => {
//   res.send("Server Response Success");
// });
// ======== RETRIEVE ========
app.get("/api/retrieve-current-order", (req, res) => {
  const sqlSelect = "SELECT * FROM cart_item";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.get("/api/retrieve-product-listing", (req, res) => {
  const sqlSelect = "SELECT * FROM products";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
  //   // console.log("====================================");
  //   // console.log(db);
  //   // console.log("====================================");
});

// ======== INSERT ========
app.post("/api/insert-customer-order", (req, res) => {
  // Getting data from front end
  const prod_name = req.body.prod_name;
  const prod_desc = req.body.prod_desc;
  const prod_price = req.body.prod_price;
  const prod_quantity = req.body.prod_quantity;
  const table_id = req.body.table_id;
  const cartId = req.body.cartId;

  const sqlInsert =
    "INSERT INTO cart_item (prod_name, prod_desc, prod_price, prod_quantity, table_id, cart_id) VALUES (?,?,?,?,?,?)";
  db.query(
    sqlInsert,
    [prod_name, prod_desc, prod_price, prod_quantity, table_id, cartId],
    (err, result) => {
      console.log(result);
      console.log(err);
    }
  );
});

app.listen(3001, () => {
  console.log("running on port 3001");
});

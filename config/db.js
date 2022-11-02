const {  Client } = require("pg");

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "Db",
  password: "12345@Tushar",
  port: 5432,
});

client.connect(function(err) {
  if (err) throw err;
  console.log("Connected to Postgres");
});

module.exports =client;

// // Connect with a connection pool.

// async function poolDemo() {
//   const pool = new Pool(credentials);
//   const now = await pool.query("SELECT NOW() as t");
//   await pool.end();

//   return now;
// }

// // Connect with a client.

// async function clientDemo() {
//   const client = new Client(credentials);
//   await client.connect();
//   const now = await client.query("SELECT NOW() as t");
//   await client.end();

//   return now;
// }

// // Use a self-calling function so we can use async / await.

// (async () => {
//   const poolResult = await poolDemo();
//   console.log("Time with pool: " + poolResult.rows[0]["t"]);

//   const clientResult = await clientDemo();
//   console.log("Time with client: " + clientResult.rows[0]["t"]);
// })();
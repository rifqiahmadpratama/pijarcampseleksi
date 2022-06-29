// const { error } = require("console");
// const { MongoClient } = require("mongodb");

// const uri = "mongodb://127.0.0.1:27017";
// const dbName = "pijarcamp";

// const client = new MongoClient(uri);

// // client.connect((error, client) => {
// //   if (error) {
// //     return console.log("Koneksi gagal!");
// //   }

// // pilih database

// // const db = client.db(dbName);

// // Menambahkan 1 data ke collection produk
// //   db.collection("produk").insertOne(
// //     {
// //       nama_produk: "setrika",
// //       keterangan: "sehat",
// //       harga: 100000,
// //       jumlah: 2,
// //     },
// //     (error, result) => {
// //       if (error) {
// //         return console.log("gagal menambahkan data!");
// //       }

// //       console.log(result);
// //});

// // Menambah lebih dari 1 data
// const db = client.db(dbName);
// db.collection("produk").insertMany(
//   [
//     { nama_produk: "celana", keterangan: "tersedia", harga: 60000, jumlah: 25 },
//     { nama_produk: "kain", keterangan: "banyak", harga: 980000, jumlah: 28 },
//   ],
//   (error, result) => {
//     if (error) {
//       return console.log("gagal menambahkan data!");
//     }
//     console.log(result);
//   }
// );

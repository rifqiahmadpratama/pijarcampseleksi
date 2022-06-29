document
  .getElementById("tombol_form")
  .addEventListener("click", tampilkan_nilai_form);

const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017";
const dbName = "pijarcamp";

const client = new MongoClient(uri);

function tampilkan_nilai_form() {
  const nama_produk = document.getElementById("nama_produk").value;
  const keterangan = document.getElementById("keterangan").value;
  const harga = document.getElementById("harga").value;
  const jumlah = document.getElementById("jumlah").value;
  document.getElementById("hasil").innerHTML = nama_produk;

  client.connect((error, client) => {
    if (error) {
      return console.log("Koneksi gagal!");
    }
    console.log("Koneksi berhasil");
    const db = client.db(dbName);
    db.collection("produk").insertOne(
      {
        nama_produk: nama_produk,
        keterangan: keterangan,
        harga: harga,
        jumlah: jumlah,
      },
      (error, result) => {
        if (error) {
          return console.log("gagal menambahkan data!");
        }

        console.log(result);
      }
    );
  });

  // client.connect((error, client) => {
  //   if (error) {
  //     return console.log("Koneksi gagal!");
  //   }

  // pilih database

  // Menambahkan 1 data ke collection produk

  // Menambah lebih dari 1 data
  // const db = client.db(dbName);
  // db.collection("produk").insertMany(
  //   [
  //     { nama_produk: "obat", keterangan: "habis", harga: 130000, jumlah: 45 },
  //     { nama_produk: "hp", keterangan: "banyak", harga: 980000, jumlah: 28 },
  //   ],
  //   (error, result) => {
  //     if (error) {
  //       return console.log("gagal menambahkan data!");
  //     }
  //     console.log(result);
  //   }
  // );
}

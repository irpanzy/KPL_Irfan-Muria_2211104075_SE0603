<div align="center">

**TUGAS JURNAL**  
**KONSTRUKSI PERANGKAT LUNAK**

**MODUL VI**  
**DESIGN BY CONTRACT & DEFENSIVE PROGRAMING**

![logo tel-u](https://github.com/user-attachments/assets/3a44181d-9c92-47f6-8cf0-87755117fd99)

Disusun Oleh :

**IRFAN MURIA (2211104075)**  
**SE06-02**

Asisten Praktikum :  
Vaninside
rizqiiirz

Dosen Pengampu :  
riyandwwi

PROGRAM STUDI S1 REKAYASA PERANGKAT LUNAK  
FAKULTAS DIREKTORAT KAMPUS PURWOKERTO  
TELKOM UNIVERSITY PURWOKERTO  
2024

</div>

---

# TUGAS JURNAL

## A. Soal Nomor 1

MENAMBAHKAN KODE AWAL SAYATUBEVIDEO
Buatlah dua file class baru yang berisi detail sebagai berikut:
A. Class bernama “SayaTubeUser” dan “SayaTubeVideo”.
B. Struktur dari class tersebut dapat dilihat pada gambar di bawah ini:
C. Konstruktor pada kelas “SayaTubeVideo” menerima dua parameter yaitu judul video. Pada saat
objek dibuat, nilai “id” akan di-generate secara random sepanjang 5 digit (bisa coba gunakan class
Random bawaan bahasa pemrograman yang digunakan) dan nilai “playCount” akan diisi dengan 0.
D. Pada class “SayaTubeVideo”, tambahkan sebuah method dengan nama “IncreasePlayCount” yang
menerima jumlah angka yang akan ditambahkan ke “playCount”.
E. Class “SayaTubeVideo” juga mempunyai method “PrintVideoDetails” yang melakukan print baik
dari id, title dan playCount dengan format bebas.
F. Konstruktor kelas “SayaTubeUser” mirip dengan kelas “SayaTubeVideo”, bedanya adalah property
Username dan list kosong dari uploadedVideos.
G. Pada kelas “SayaTubeUser”, terdapat method GetTotalVideoPlayCount() yang mengembalikan
jumlah playCount dari semua video yang ada di list uploadedVideos. Selain itu, juga terdapat
method AddVideo yang dapat menambahkan elemen baru ke list uploadedVideos.
H. Method terakhir di kelas tersebut adalah PrintAllVideoPlaycount() yang melakukan print terhadap
semua judul video yang ditambahkan dengan format:
“User: <username>”
“Video 1 judul: <judul_video1>”
“Video 2 judul: <judul_video2>”
dst.
I. Panggil semua method yang dibuat dari kedua kelas pada fungsi/method utama dengan membuat.
Gunakan nama panggilan praktikan untuk username dan judul video dengan format “Review Film
<judul_film> oleh <nama_praktikan>”. Tambahkan minimal 10 judul film yang menurut praktikan
bagus untuk ditonton.

**Input**

- sayaTubeVideo

  ```js
  class SayaTubeVideo {
    constructor(title) {
      if (!title || typeof title !== "string" || title.length > 100) {
        throw new Error("Judul video harus string dan maksimal 100 karakter.");
      }

      this.id = this.#generateRandomId();
      this.title = title;
      this.playCount = 0;
    }

    #generateRandomId() {
      return Math.floor(10000 + Math.random() * 90000);
    }

    increasePlayCount(count) {
      if (typeof count !== "number" || count <= 0 || count > 10000000) {
        throw new Error(
          "Penambahan playCount harus antara 1 sampai 10.000.000."
        );
      }

      this.playCount += count;
    }

    printVideoDetails() {
      console.log(`ID: ${this.id}`);
      console.log(`Title: ${this.title}`);
      console.log(`Play Count: ${this.playCount}`);
    }
  }

  module.exports = SayaTubeVideo;
  ```

- sayaTubeUser

  ```js
  const SayaTubeVideo = require("./sayaTubeVideo");

  class SayaTubeUser {
    constructor(username) {
      if (!username || typeof username !== "string" || username.length > 100) {
        throw new Error("Username harus string dan maksimal 100 karakter.");
      }

      this.username = username;
      this.uploadedVideos = [];
    }

    addVideo(video) {
      if (!(video instanceof SayaTubeVideo)) {
        throw new Error(
          "Hanya objek dari kelas SayaTubeVideo yang bisa ditambahkan."
        );
      }

      this.uploadedVideos.push(video);
    }

    getTotalVideoPlayCount() {
      return this.uploadedVideos.reduce(
        (total, video) => total + video.playCount,
        0
      );
    }

    printAllVideoPlaycount() {
      console.log(`User: ${this.username}`);
      this.uploadedVideos.forEach((video, index) => {
        console.log(`Video ${index + 1} judul: ${video.title}`);
      });
    }
  }

  module.exports = SayaTubeUser;
  ```

- index

  ```js
  const SayaTubeVideo = require("./sayaTubeVideo");
  const SayaTubeUser = require("./sayaTubeUser");

  function main() {
    const username = "Irfan Muria";
    const user = new SayaTubeUser(username);

    const judulFilm = [
      "Review Film Masa Lalu Tetap Pemenangnya oleh Irfan Muria",
      "Review Film Interstellar oleh Irfan Muria",
      "Review Film Inception oleh Irfan Muria",
      "Review Film Parasite oleh Irfan Muria",
      "Review Film The Social Network oleh Irfan Muria",
      "Review Film The Dark Knight oleh Irfan Muria",
      "Review Film Whiplash oleh Irfan Muria",
      "Review Film Your Name oleh Irfan Muria",
      "Review Film Everything Everywhere All At Once oleh Irfan Muria",
      "Review Film The Secret Life of Walter Mitty oleh Irfan Muria",
    ];

    for (let judul of judulFilm) {
      const video = new SayaTubeVideo(judul);
      video.increasePlayCount(Math.floor(Math.random() * 100000));
      user.addVideo(video);
    }

    console.log("=== Detail Video ===");
    user.uploadedVideos.forEach((video) => video.printVideoDetails());

    console.log("\n=== Statistik User ===");
    user.printAllVideoPlaycount();
    console.log(`Total Play Count: ${user.getTotalVideoPlayCount()}`);
  }

  main();
  ```

## A. Soal Nomor 2

MENAMBAHKAN IMPLEMENTASI DESIGN BY CONTRACT
Pada class yang dibuat sebelumnya tambahkan implementasi design by contract dengan:
A. Precondition sebagai berikut ini:
i. Judul video memiliki panjang maksimal 200 karakter.
ii. Judul video tidak berupa null.
iii. Input penambahan play count maksimal 25.000.000 per panggilan method-nya
iv. Input play count tidak berupa bilangan negatif.
v. Nama username memiliki panjang maksimal 100 karakter.
vi. Nama username tidak berupa null.
vii. Video yang ditambahkan tidak berupa null.
viii. Video yang ditambahkan punya playCount yang kurang dari bilangan integer maksimum.
B. Exception (tambahkan juga blok try-catch sehingga program tidak berhenti):
i. Dengan menggunakan “checked” keyword pada C# atau operator sepadan pada bahasa
pemrograman lain, pastikan jumlah penambahan play count tidak melebihi batas tertinggi
integer (overflow).
C. Postcondition sebagai berikut:
i. Jumlah video maksimal yang di-print adalah 8 pada method PrintAllVideoPlaycount()
D. Panggil object dari class SayaTubeVideo dan SayaTubeUser yang menguji prekondisi, exception
dan postcondition. (Catatan: untuk exception boleh digunakan for loop sehingga proses overflow
dapat dipercepat).

**Input**

- 

  ```js

  ```

  **Output**

![output](https://github.com/user-attachments/assets/9f23a34c-9ee5-4456-a388-4fc2669e4f07)

---

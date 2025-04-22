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

**Output**

```
=== Detail Video ===
ID: 79213
Title: Review Film Masa Lalu Tetap Pemenangnya oleh Irfan Muria
Play Count: 97207
ID: 67772
Title: Review Film Interstellar oleh Irfan Muria
Play Count: 93124
ID: 46026
Title: Review Film Inception oleh Irfan Muria
Play Count: 47610
ID: 67863
Title: Review Film Parasite oleh Irfan Muria
Play Count: 18214
ID: 47465
Title: Review Film The Social Network oleh Irfan Muria
Play Count: 68934
ID: 22048
Title: Review Film The Dark Knight oleh Irfan Muria
Play Count: 1918
ID: 99189
Title: Review Film Whiplash oleh Irfan Muria
Play Count: 38686
ID: 64683
Title: Review Film Your Name oleh Irfan Muria
Play Count: 90221
ID: 38803
Title: Review Film Everything Everywhere All At Once oleh Irfan Muria
Play Count: 69280
ID: 25977
Title: Review Film The Secret Life of Walter Mitty oleh Irfan Muria
Play Count: 20364

=== Statistik User ===
User: Irfan Muria
Video 1 judul: Review Film Masa Lalu Tetap Pemenangnya oleh Irfan Muria
Video 2 judul: Review Film Interstellar oleh Irfan Muria
Video 3 judul: Review Film Inception oleh Irfan Muria
Video 4 judul: Review Film Parasite oleh Irfan Muria
Video 5 judul: Review Film The Social Network oleh Irfan Muria
Video 6 judul: Review Film The Dark Knight oleh Irfan Muria
Video 7 judul: Review Film Whiplash oleh Irfan Muria
Video 8 judul: Review Film Your Name oleh Irfan Muria
Video 9 judul: Review Film Everything Everywhere All At Once oleh Irfan Muria
Video 10 judul: Review Film The Secret Life of Walter Mitty oleh Irfan Muria
Total Play Count: 545558
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

- sayaTubeVideo

  ```js
  const crypto = require("crypto");

  class SayaTubeVideo {
    constructor(title) {
      try {
        if (title == null) throw new Error("Judul tidak boleh null.");
        if (typeof title !== "string")
          throw new Error("Judul harus berupa string.");
        if (title.length > 200) throw new Error("Judul maksimal 200 karakter.");

        this.id = crypto.randomInt(10000, 99999);
        this.title = title;
        this.playCount = 0;
      } catch (error) {
        console.error(`[ERROR Constructor] ${error.message}`);
      }
    }

    increasePlayCount(count, override = false) {
      try {
        if (typeof count !== "number")
          throw new Error("Input harus berupa angka.");
        if (count < 0) throw new Error("Play count tidak boleh negatif.");
        if (!override && count > 25000000)
          throw new Error("Penambahan play count maksimal 25.000.000.");

        if (this.playCount + count > Number.MAX_SAFE_INTEGER) {
          throw new Error("Play count melebihi batas maksimum integer aman.");
        }

        this.playCount += count;
      } catch (error) {
        console.error(`[ERROR increasePlayCount] ${error.message}`);
      }
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
  class SayaTubeUser {
    constructor(username) {
      try {
        if (username == null) throw new Error("Username tidak boleh null.");
        if (typeof username !== "string")
          throw new Error("Username harus berupa string.");
        if (username.length > 100)
          throw new Error("Username maksimal 100 karakter.");

        this.username = username;
        this.uploadedVideos = [];
      } catch (error) {
        console.error(`[ERROR Constructor] ${error.message}`);
      }
    }

    addVideo(video) {
      try {
        if (video == null) throw new Error("Video tidak boleh null.");
        if (typeof video !== "object")
          throw new Error("Video harus berupa object.");
        if (video.playCount >= Number.MAX_SAFE_INTEGER) {
          throw new Error("Play count video melebihi batas maksimum.");
        }

        this.uploadedVideos.push(video);
      } catch (error) {
        console.error(`[ERROR addVideo] ${error.message}`);
      }
    }

    getTotalVideoPlayCount() {
      let total = 0;
      for (const video of this.uploadedVideos) {
        total += video.playCount;
      }
      return total;
    }

    printAllVideoPlaycount() {
      console.log(`User: ${this.username}`);
      for (let i = 0; i < Math.min(8, this.uploadedVideos.length); i++) {
        console.log(`Video ${i + 1} judul: ${this.uploadedVideos[i].title}`);
      }
    }
  }

  module.exports = SayaTubeUser;
  ```

- index

  ```js
  const SayaTubeVideo = require("./sayaTubeVideo");
  const SayaTubeUser = require("./sayaTubeUser");

  const user = new SayaTubeUser("Irfan Muria");

  for (let i = 1; i <= 10; i++) {
    const video = new SayaTubeVideo(`Review Film Ke-${i} oleh Irfan Muria`);
    video.increasePlayCount(25000);
    user.addVideo(video);
  }

  new SayaTubeVideo("A".repeat(201));

  new SayaTubeUser("X".repeat(101));

  user.addVideo(null);

  const failVideo = new SayaTubeVideo("Coba Play Count Besar");
  failVideo.increasePlayCount(999999999);

  const overflowVideo = new SayaTubeVideo("Simulasi Overflow");
  for (let i = 0; i < 100; i++) {
    overflowVideo.increasePlayCount(25000000, true);
  }
  user.addVideo(overflowVideo);

  console.log("\n=== Daftar Video Irfan Muria ===");
  user.printAllVideoPlaycount();

  console.log("\nTotal Semua Play Count:", user.getTotalVideoPlayCount());
  ```

**Output**

```
[ERROR Constructor] Judul maksimal 200 karakter.
[ERROR Constructor] Username maksimal 100 karakter.
[ERROR addVideo] Video tidak boleh null.
[ERROR increasePlayCount] Penambahan play count maksimal 25.000.000.

=== Daftar Video Irfan Muria ===
User: Irfan Muria
Video 1 judul: Review Film Ke-1 oleh Irfan Muria
Video 2 judul: Review Film Ke-2 oleh Irfan Muria
Video 3 judul: Review Film Ke-3 oleh Irfan Muria
Video 4 judul: Review Film Ke-4 oleh Irfan Muria
Video 5 judul: Review Film Ke-5 oleh Irfan Muria
Video 6 judul: Review Film Ke-6 oleh Irfan Muria
Video 7 judul: Review Film Ke-7 oleh Irfan Muria
Video 8 judul: Review Film Ke-8 oleh Irfan Muria

Total Semua Play Count: 2500250000
```

---

<div align="center">

**TUGAS JURNAL**  
**KONSTRUKSI PERANGKAT LUNAK**

**MODUL XIII**  
**DESIGN PATTERN IMPLEMENTATION**

![logo tel-u](https://github.com/user-attachments/assets/3a44181d-9c92-47f6-8cf0-87755117fd99)

Disusun Oleh :

**IRFAN MURIA (2211104075)**  
**SE06-03**

Asisten Praktikum :  
Vaninside  
rizqiiirz

Dosen Pengampu :  
riyandwwi

PROGRAM STUDI S1 REKAYASA PERANGKAT LUNAK  
FAKULTAS DIREKTORAT KAMPUS PURWOKERTO  
TELKOM UNIVERSITY PURWOKERTO  
202

</div>

---

# TUGAS JURNAL

## A. Soal Nomor 1

**Contoh kondisi penggunaan Singleton:**

1. Koneksi database yang hanya boleh satu instance agar hemat resource.
2. Logger sistem agar seluruh aplikasi mencatat log ke satu tempat yang sama.

## B. Soal Nomor 2

**Langkah implementasi Singleton:**

1. Buat class.
2. Buat private constructor.
3. Buat static method `getInstance()` untuk inisialisasi satu-satunya instance.

## C. Soal Nomor 3

**Kelebihan:**

- Menghemat resource.
- Konsisten (state global tetap sama).
- Mudah diakses.

**Kekurangan:**

- Sulit diuji (terutama pada unit test).
- Menyebabkan tight coupling.
- Tidak mendukung subclassing dengan baik.

## Input

- pusatDataSingleton.js

  ```js
  data1.addSebuahData("Irfan Muria");
  data1.addSebuahData("Vaninside");
  data2.hapusSebuahData(1);
  ```

- main.js

  ```js
  const PusatDataSingleton = require("./pusatDataSingleton");

  const data1 = PusatDataSingleton.getDataSingleton();
  const data2 = PusatDataSingleton.getDataSingleton();

  data1.addSebuahData("Irfan Muria");
  data1.addSebuahData("Irpanzy");
  data1.addSebuahData("Vaninside (Asprak)");
  data1.addSebuahData("rizqiiirz (Asprak)");

  console.log("\nData dari data2:");
  data2.printSemuaData();

  data2.hapusSebuahData(2);

  console.log("\nData dari data1 setelah penghapusan:");
  data1.printSemuaData();

  console.log(`\nJumlah data di data1: ${data1.getSemuaData().length}`);
  console.log(`Jumlah data di data2: ${data2.getSemuaData().length}`);
  ```

## Output

- ![image](https://github.com/user-attachments/assets/5fea8ed8-9b2d-47ca-8fb9-f3a1da703199)

---

<div align="center">

**TUGAS JURNAL**  
**KONSTRUKSI PERANGKAT LUNAK**

**MODUL V**  
**GENERICS**

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

MENAMBAHKAN METHOD DENGAN GENERIC
Tanpa membuat file baru (gunakan file yang dibuat saat membuat project):
A. Buatlah sebuah class bernama “Penjumlahan”.
B. Pada class tersebut, tambahkan sebuah method dengan nama “JumlahTigaAngka” yang
memiliki tiga parameter generic yang sama yaitu “T”
C. Method tersebut dapat melakukan penjumalahan dari tiga input/argument yang diberikan pada
method tersebut.
D. Hint: gunakan variable sementara dengan tipe data dynamic untuk memungkinkan operasi
matematis misalnya penjumlahan.
E. Panggil method tersebut pada fungsi/method utama dengan tiga input angka yaitu 2-digit dari
NIM. Misalnya NIM 12345678, maka tiga input angka yaitu “12”, “34” dan “56” dengan tipe data
sebagai berikut:
i. NIM berakhiran 1 atau 2: tipe data input float
ii. NIM berakhiran 3, 4 atau 5: tipe data input double
iii. NIM berakhiran 6, 7 atau 8: tipe data input int
iv. NIM berakhiran 9 atau 0: tipe data input long

**Input**

- penjumlahan

  ```js
  class Penjumlahan {
    static JumlahTigaAngka(a, b, c) {
      let result = 0;

      result = Number(a) + Number(b) + Number(c);

      return result;
    }
  }

  function main() {
    const nim = 2211104075;

    const firstTwoDigits = parseInt(nim.toString().slice(0, 2));
    const secondTwoDigits = parseInt(nim.toString().slice(2, 4));
    const thirdTwoDigits = parseInt(nim.toString().slice(4, 6));

    let result;

    const lastDigit = nim % 10;
    if (lastDigit === 1 || lastDigit === 2) {
      result = Penjumlahan.JumlahTigaAngka(
        firstTwoDigits,
        secondTwoDigits,
        thirdTwoDigits
      );
    } else if (lastDigit === 3 || lastDigit === 4 || lastDigit === 5) {
      result = Penjumlahan.JumlahTigaAngka(
        firstTwoDigits,
        secondTwoDigits,
        thirdTwoDigits
      );
      result = result.toFixed(2);
    } else if (lastDigit === 6 || lastDigit === 7 || lastDigit === 8) {
      result = Penjumlahan.JumlahTigaAngka(
        firstTwoDigits,
        secondTwoDigits,
        thirdTwoDigits
      );
    } else if (lastDigit === 9 || lastDigit === 0) {
      result = Penjumlahan.JumlahTigaAngka(
        firstTwoDigits,
        secondTwoDigits,
        thirdTwoDigits
      );
    }

    console.log(`Hasil penjumlahan: ${result}`);
  }

  main();
  ```

## A. Soal Nomor 2

MENAMBAHKAN METHOD DENGAN GENERIC
Tanpa membuat file baru (gunakan file yang dibuat saat membuat project dan pastikan branch
aktif adalah pada branch implementasi-generic-class):
A. Buatlah sebuah class bernama “SimpleDataBase” dengan mengikuti class model yang
ditunjukkan pada gambar/tabel di bawah ini.
SimpleDataBase

(-) storedData: List (T)
(-) inputDates: List (Date)

(+) SimpleDataBase()
(+) AddNewData(T)
(+) PrintAllData(): void

B. Class tersebut memiliki dua property yaitu:
i. Property “storedData” yang merupakan suatu List (struktur data bawaan/default) yang
berisi data bertipe generic “T”.
ii. Property “inputDates” yang bertipe List<Date> (atau tipe data List<DateTime> di C#) yang
akan list dari waktu input.
C. Class tersebut juga memiliki beberapa method yaitu:
i. Konstruktor SimpleDataBase() yang akan membuat property “storedData” berisi List
kosong.
ii. Method AddNewData(T) yang akan menambahkan data baru bertipe T ke dalam list
“storedData” dan waktu saat itu (Now) ke dalam list “inputDates”.
iii. Method PrintAllData() yang akan memberikan output console berupa teks yang
menampilkan seluruh data yang tersimpan pada “storedData” dan “inputDates”, contohnya:
• Data 1 berisi: 12, yang disimpan pada waktu UTC: 3/10/2022 5:32:01 AM
• Data 2 berisi: 34, yang disimpan pada waktu UTC: 3/10/2022 5:32:02 AM
• Data 2 berisi: 56, yang disimpan pada waktu UTC: 3/10/2022 5:32:02 AM
D. Panggil method PrintAllData() pada fungsi/method utama setelah menambahkan

**Input**

- simpleDatabase

  ```js
  class SimpleDataBase {
    constructor() {
      this.storedData = [];
      this.inputDates = [];
    }

    AddNewData(data) {
      this.storedData.push(data);
      this.inputDates.push(new Date());
    }

    PrintAllData() {
      this.storedData.forEach((data, index) => {
        console.log(
          `Data ${
            index + 1
          } berisi: ${data}, yang disimpan pada waktu UTC: ${this.inputDates[
            index
          ].toUTCString()}`
        );
      });
    }
  }

  function main() {
    const db = new SimpleDataBase();

    db.AddNewData(22);
    db.AddNewData(11);
    db.AddNewData(10);

    db.PrintAllData();
  }

  main();
  ```

**Output**

![output](https://github.com/user-attachments/assets/9f23a34c-9ee5-4456-a388-4fc2669e4f07)

---

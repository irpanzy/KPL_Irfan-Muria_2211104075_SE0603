<div align="center">

**TUGAS JURNAL**  
**KONSTRUKSI PERANGKAT LUNAK**

**MODUL VIII**  
**RUNTIME CONFIGURATION & INTERNATIONALIZATION**

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

IMPLEMENTASI RUNTIME CONFIGURATION
Dari master/main branch dan class utama, buatlah implementasi program yang memanfaatkan teknik Runtime Configuration dengan spesifikasi sebagai berikut ini:
A. Tambahkan class baru untuk memproses file konfigurasi dengan nama “BankTransferConfig”.
B. File konfigurasi yang digunakan adalah “bank_transfer_config.json” dengan format sebagai berikut ini:

```json
{
    "lang": "CONFIG1",
    "transfer": {
        "threshold": "CONFIG2",
        "low_fee": "CONFIG3",
        "high_fee": "CONFIG4"
    },
    "methods": CONFIG5,
    "confirmation": {
        "en": "CONFIG6",
        "id": "CONFIG7"
    }
}
```

C. Nilai default yang digunakan apabila file config masih belum ada yaitu:

i. CONFIG1 => “en”
ii. CONFIG2 => 25000000
iii. CONFIG3 => 6500
iv. CONFIG4 => 15000
v. CONFIG5 => [ “RTO (real-time)”, “SKN”, “RTGS”, “BI FAST” ]
vi. CONFIG6 => “yes”
vii. CONFIG7 => “ya”

D. Aplikasi (program utama) memiliki alur atau fungsi sebagai berikut (yang menggunakan class config “BankTransferConfig”):

i. Pada saat program dijalankan program akan menampilkan pesan sebagai berikut tergantung nilai dari CONFIG1 atau JSON untuk key “lang”:

1. CONFIG1 == “en” => “Please insert the amount of money to transfer:”
2. CONFIG1 == “id” => “Masukkan jumlah uang yang akan di-transfer:”

ii. Setelah itu aplikasi akan menampilkan biaya transfer dan total biaya yang akan dibayarkan dengan ketentuan sebagai berikut:

1. Apabila jumlah yang yang di-transfer pada bagian sebelumnya (D-i) kurang dari atau sama dengan nilai CONFIG2 atau “threshold”, maka biaya transfer adalah CONFIG3 atau “low_fee”. Akan tetapi jika lebih dari “threshold”, maka biaya transfer diambil dari nilai CONFIG4 atau “high_fee”.
2. Total biaya yang perlu dibayarkan adalah hasil penjumlahan dari jumlah uang yang akan ditransfer dan biaya transfer.
3. Pesan output apabila CONFIG1 atau “lang” bernilai “en” adalah “Transfer fee = <biaya_transfer>” dan “Total amount = <nominal_transfer + biaya_transfer>.
4. Pesan output apabila CONFIG1 atau “lang” bernilai “id” adalah “Biaya transfer = <biaya_transfer>” dan “Total biaya = <nominal_transfer + biaya_transfer>.

iii. Setelah itu aplikasi akan menampilkan pesan yang bergantung dari bahasa yang dipilih di konfigurasi:

1. EN =>” Select transfer method:”
2. ID => “Pilih metode transfer:”

iv. Kemudian juga akan dilakukan print dengan numbering untuk setiap string yang ada di JSON untuk key “methods” atau CONFIG5. Contoh output (dari nilai default):

1. RTO (real-time)
2. SKN
3. RTGS
4. BI FAST

v. Setelah menerima input pada pertanyaan sebelumnya, aplikasi akan bertanya satu pertanyaan terakhir dengan isi yang bergantung dari nilai “lang” dan “confirmation”

1. EN => Please type "<CONFIG6>" to confirm the transaction:
2. ID => Ketik "<CONFIG7>" untuk mengkonfirmasi transaksi:

vi. Apabila input dari user sesuai dengan CONFIG6 atau CONFIG7 (tergantung nilai “lang”), maka:

1. EN => The transfer is completed
2. ID => Proses transfer berhasil

vii. Tetapi jika input dari user tidak sesuai, maka:

1. EN => Transfer is cancelled
2. ID => Transfer dibatalkan

E. Ubah nilai default pada json file “bank_transfer_config.json” dengan nilai yang berbeda dan tunjukkan ke asisten praktikum hasil run dari aplikasi.

**Input**

- covid_config

```json
{
  "satuan_suhu": "fahrenheit",
  "batas_hari_deman": 14,
  "pesan_ditolak": "Anda tidak diperbolehkan masuk ke dalam gedung ini",
  "pesan_diterima": "Anda dipersilahkan untuk masuk ke dalam gedung ini"
}
```

- CovidConfig

```js
const fs = require("fs");

class CovidConfig {
  constructor(filePath = "covid_config.json") {
    this.filePath = filePath;
    this.defaultConfig = {
      satuan_suhu: "celcius",
      batas_hari_deman: 14,
      pesan_ditolak: "Anda tidak diperbolehkan masuk ke dalam gedung ini",
      pesan_diterima: "Anda dipersilahkan untuk masuk ke dalam gedung ini",
    };
    this.config = this.loadConfig();
  }

  loadConfig() {
    if (!fs.existsSync(this.filePath)) {
      this.saveConfig(this.defaultConfig);
      return this.defaultConfig;
    }

    const data = fs.readFileSync(this.filePath, "utf8");
    return JSON.parse(data);
  }

  saveConfig(config) {
    fs.writeFileSync(this.filePath, JSON.stringify(config, null, 2));
  }

  ubahSatuan() {
    this.config.satuan_suhu =
      this.config.satuan_suhu === "celcius" ? "fahrenheit" : "celcius";
    this.saveConfig(this.config);
  }
}

module.exports = CovidConfig;
```

- index

```js
const readline = require("readline");
const CovidConfig = require("./CovidConfig");

const config = new CovidConfig();

config.ubahSatuan();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const satuan = config.config.satuan_suhu;
const batasHari = config.config.batas_hari_deman;

rl.question(
  `Berapa suhu badan anda saat ini? Dalam nilai ${satuan}: `,
  (suhuInput) => {
    rl.question(
      "Berapa hari yang lalu (perkiraan) anda terakhir memiliki gejala demam? ",
      (hariInput) => {
        const suhu = parseFloat(suhuInput);
        const hari = parseInt(hariInput);
        let suhuNormal = false;

        if (satuan === "celcius") {
          suhuNormal = suhu >= 36.5 && suhu <= 37.5;
        } else if (satuan === "fahrenheit") {
          suhuNormal = suhu >= 97.7 && suhu <= 99.5;
        }

        const demamNormal = hari < batasHari;

        if (suhuNormal && demamNormal) {
          console.log(config.config.pesan_diterima);
        } else {
          console.log(config.config.pesan_ditolak);
        }

        rl.close();
      }
    );
  }
);
```

**Output**

![image](https://github.com/user-attachments/assets/f9b85cb4-689b-48fd-b907-afeb173d890c)

---

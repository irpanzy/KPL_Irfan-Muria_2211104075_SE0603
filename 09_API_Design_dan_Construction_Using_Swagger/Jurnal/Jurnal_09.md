<div align="center">

**TUGAS JURNAL**  
**KONSTRUKSI PERANGKAT LUNAK**

**MODUL IX**  
**API DESIGN & CONSTRUCTION USING SWAGGER**

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
2025

</div>

---

# TUGAS JURNAL

## A. Soal Nomor 1

IMPLEMENTASI WEB API
Dari master/main branch dan class utama, buatlah program/aplikasi web API dari spesifikasi sebagai
berikut ini:

- API yang dibuat menggunakan data dari kelas Movie.
- API yang dibuat mempunyai lokasi sebagai berikut `‘/api/Movies`, URL domain boleh dari port mana saja (port bebas). Dengan menggunakan swagger API tersebut dapat menerima RESTful API dengan metoda sebagai berikut (halaman swagger dapat diakses pada `https://localhost:<PORT>/swagger/index.html`):
- Secara default, program yang dibuat memiliki list film yang berasal dari TOP 3 film IMDB dari link: `https://www.imdb.com/search/title/?groups=top_100&sort=user_rating,desc`
- Impementasi yang dibuat tidak menggunakan database, cukup disimpan sebagai suatu variable, dan gunakan “static” di variable tersebut yang menyimpan list/array dari objek-objek Movie.
- Dalam pembuatan program/aplikasi ini, anda dapat mengasumsikan bahwa input dari user selalu benar dan sesuai dengan tipe data yang diharapkan.

## B. Soal Nomor 2

MENDEMONSTRASI WEB API
Beberapa skenario yang harus dicoba untuk memastikan jika program telah berjalan dengan baik. Buatlah dokumen yang berisi semua screenshot dari hasil uji coba scenario yang disebutkan pada list berikut ini:

- Mencoba `“GET /api/Movies”` saat baru dijalankan yang mengeluarkan list film dari TOP 3 IMDB seperti pada tampilan berikut pada saat dicoba dengan menekan tombol “Try it out” dan tombol “Execute”
- Menambahkan Movie baru yaitu urutan ke-4 pada TOP IMDB list dengan memanggil API pada bagian `“POST /api/Movies”`
- Cek list/array dari semua Movie lagi dengan `“GET /api/Movies”`, pastikan Movie yang baru ditambahkan sebelumnya sudah ada:
- Mencoba meminta Movie dengan index 3, `“GET /api/Movies/3”` yang seharusnya mengembalikan Movie yang baru saja ditambah:
- Menghapus objek Movie dengan index ke-1 dengan `“DELETE /api/Movies/1”`
- Cek list/array dari semua Movie sekali lagi dengan `“GET /api/Movies”`, film dengan ranking kedua `“Godfather”` sudah tidak ada di list:

## Output

- ![jurnal1-1](https://github.com/user-attachments/assets/60354663-130d-44c1-80a2-1124ebba6cd7)
- ![jurnal1-2](https://github.com/user-attachments/assets/c86c4c03-5c16-4f63-82d7-41a0659eeb17)
- ![jurnal1-3](https://github.com/user-attachments/assets/cc3baf0c-397f-4993-985c-d027ec67a45f)
- ![jurnal1-4](https://github.com/user-attachments/assets/5ed713e0-1385-464f-8bc4-d766c757a762)
- ![jurnal1-5](https://github.com/user-attachments/assets/e980d08a-f34a-4128-8f5e-816de9e17ab5)
- ![jurnal1-6](https://github.com/user-attachments/assets/d75755f4-33db-4d17-904a-68c81075aa00)
- ![jurnal3-1](https://github.com/user-attachments/assets/23ccfaed-c687-4bba-b60b-664692bcaf24)
- ![jurnal3-2](https://github.com/user-attachments/assets/eadcc15a-b589-4711-88e1-c4c0429ef5d3)
- ![jurnal3-3](https://github.com/user-attachments/assets/b87de0e4-a989-4a2d-b26c-005f08b57236)
- ![jurnal3-4](https://github.com/user-attachments/assets/ea19e24d-80a7-416b-b805-031c276d6633)
- ![jurnal3-5](https://github.com/user-attachments/assets/ba07aed4-aabd-4808-bc53-0e608e8d9048)
- ![jurnal3-6](https://github.com/user-attachments/assets/e2187c37-3f36-4904-9599-a1edaa7095d5)

---

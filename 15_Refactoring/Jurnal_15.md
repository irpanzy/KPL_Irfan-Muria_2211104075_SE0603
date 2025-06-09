<div align="center">

**TUGAS JURNAL**  
**KONSTRUKSI PERANGKAT LUNAK**

**MODUL XV**  
**REFACTORING**

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

**Fitur Aplikasi**

1. Registrasi dan login user berbasis CLI
2. Data disimpan di file `users.json`
3. Validasi input:
   - Username hanya huruf ASCII
   - Password 8-20 karakter, wajib angka dan karakter spesial
   - Password tidak boleh mengandung username
4. Password hashing menggunakan SHA256

## B. Soal Nomor 2

**(Sisipkan screenshot hasil run dan isi `users.json`)**

## Input

- auth.js

  ```js
  const fs = require("fs");
  const crypto = require("crypto");

  const userFile = "users.json";

  // Validasi input username dan password
  function validateInput(username, password) {
    const asciiOnly = /^[a-zA-Z]+$/;
    const passwordRule = /^(?=.*[0-9])(?=.*[!@#$%^&*]).{8,20}$/;

    if (!asciiOnly.test(username)) {
      throw new Error("Username hanya boleh berisi huruf alfabet ASCII.");
    }
    if (!passwordRule.test(password)) {
      throw new Error(
        "Password harus 8-20 karakter, mengandung angka dan karakter spesial."
      );
    }
    if (password.toLowerCase().includes(username.toLowerCase())) {
      throw new Error("Password tidak boleh mengandung bagian dari username.");
    }
  }

  // Hash password menggunakan SHA256
  function hashPassword(password) {
    return crypto.createHash("sha256").update(password).digest("hex");
  }

  // Simpan user
  function registerUser(username, password) {
    validateInput(username, password);
    const users = loadUsers();
    const exists = users.find((u) => u.username === username);
    if (exists) throw new Error("Username sudah terdaftar.");

    const user = { username, password: hashPassword(password) };
    users.push(user);
    fs.writeFileSync(userFile, JSON.stringify(users, null, 2));
    console.log("Registrasi berhasil.");
  }

  // Login user
  function loginUser(username, password) {
    const users = loadUsers();
    const hashed = hashPassword(password);
    const user = users.find(
      (u) => u.username === username && u.password === hashed
    );
    if (user) {
      console.log("Login berhasil.");
    } else {
      console.log("Login gagal. Username atau password salah.");
    }
  }

  // Load user dari file
  function loadUsers() {
    if (!fs.existsSync(userFile)) return [];
    const data = fs.readFileSync(userFile);
    return JSON.parse(data);
  }

  module.exports = { registerUser, loginUser };
  ```

- app.js

  ```js
  const readline = require("readline");
  const { registerUser, loginUser } = require("./auth");

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  function showMenu() {
    console.log("\n=== APLIKASI LOGIN ===");
    console.log("1. Registrasi");
    console.log("2. Login");
    console.log("3. Keluar");
    rl.question("Pilih menu: ", handleMenu);
  }

  function handleMenu(choice) {
    switch (choice) {
      case "1":
        rl.question("Username: ", (username) => {
          rl.question("Password: ", (password) => {
            try {
              registerUser(username, password);
            } catch (err) {
              console.error("Error:", err.message);
            }
            showMenu();
          });
        });
        break;
      case "2":
        rl.question("Username: ", (username) => {
          rl.question("Password: ", (password) => {
            try {
              loginUser(username, password);
            } catch (err) {
              console.error("Error:", err.message);
            }
            showMenu();
          });
        });
        break;
      case "3":
        rl.close();
        break;
      default:
        console.log("Pilihan tidak valid.");
        showMenu();
    }
  }

  showMenu();
  ```

- users.json
  ```json
  [
    {
      "username": "irpanzy",
      "password": "81f7a308f52fb02f32f2a3ee370bef9bc2811a3177ec10e4e1777c155041d02c"
    },
    {
      "username": "Hasna",
      "password": "9489242a41062a4c26c222b794f9b144377ece69ed0929bec2c8c29d6fd1a73d"
    }
  ]
  ```

## Output

- ![Screenshot 2025-06-09 040408](https://github.com/user-attachments/assets/67c7b214-50e9-4e34-9801-4cf9f567c323)

---

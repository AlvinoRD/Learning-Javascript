// Function Expression / Function Biasa

// const tampilNama = function (nama) {
//   return `Halo, ${nama}`;
// };
// console.log(tampilNama("Alvino"));

// =======================================

//Arrow Function

// const tampilNama = (nama) => {
//   return `Halo, ${nama}`;
// };
// console.log(tampilNama("Alvino"));

// =======================================

//Arrow Function dengan 2 Parameter

// const tampilNama = (nama, waktu) => {
//   return `Selamat ${waktu}, ${nama}`;
// };
// console.log(tampilNama("Alvino", "Malam"));

// =======================================

//Implisit Return

// const tampilNama = (nama) => `Halo, ${nama}`;
// console.log(tampilNama("Alvino"));

// =======================================

// let mahasiswa = ["Alvino", "Radyo", "Danisworo"];

// let jumlahHuruf = mahasiswa.map(function (nama) {
//   return nama.length;
// });
// console.log(jumlahHuruf);

// =======================================

// let jumlahHuruf = mahasiswa.map((nama) => nama.length);
// console.log(jumlahHuruf);

// =======================================

// let jumlahHuruf = mahasiswa.map((nama) => ({
//   nama: nama,
//   jmlHuruf: nama.length,
// }));
// console.table(jumlahHuruf);

// =======================================

// const Mahasiswa = function () {
//   this.nama = "Alvino";
//   this.umur = 19;
//   this.sayHello = function () {
//     console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`);
//   };
// };

// const Alvino = new Mahasiswa();

// ======================================

// This Arrow function
// This yang ada di dalam arrow function yaa
// Membingungkan bukan kalo pake yang model gini

// const Mahasiswa = {
//   nama: "Alvino",
//   umur: 19,
//   sayHello: () => {
//     console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`);
//   },
// };

// ======================================

// const Mahasiswa = function () {
//   this.nama = "Alvino";
//   this.umur = 19;
//   this.sayHello = function () {
//     console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`);
//   };
// inget kalo arrow function ga punya konsep this, jadi dia bakal nyari dari parentnya
//   setInterval(() => {
//     console.log(this.umur++);
//   }, 500);
// };

// const Alvino = new Mahasiswa();

// ======================================

const box = document.querySelector(".box");
box.addEventListener("click", function () {
  let satu = "size";
  let dua = "caption";

  if (this.classList.contains(satu)) {
    [satu, dua] = [dua, satu];
  }

  this.classList.toggle(satu);
  setTimeout(() => {
    this.classList.toggle(dua);
  }, 600);
});

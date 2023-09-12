//ini namanya objek,
//tidak efektif buat bikin objek berulang ulang
// let mahasiswa = {
//   nama: "Alvino",
//   energi: 20,
//   makan: function (porsi) {
//     this.energi += porsi;
//     //this di objek literal mengembalikan objeknya sendiri
//     console.log(`Halo ${this.nama}, selamat makan`);
//   },
// };

//====================================

//ini function declaration
// function mahasiswa(nama, energi) {
//   let mahasiswa = {};
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;

//   mahasiswa.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`halo ${this.nama}, selamat makan`);
//   };

//   mahasiswa.main = function (jam) {
//     this.energi -= jam;
//     console.log(`halo ${this.nama}, selamat makan`);
//   };

//   return mahasiswa;
// }

// let Alvino = mahasiswa("Alvino", 10);

//-----------------------------------

// cara ke - 2
//Object Create
// const methodMahasiswa = {
//   Makan: function (Porsi) {
//     this.Energi += Porsi;
//     console.log(`Halo ${this.Nama}, Selamat Mam!`);
//   },
//   Main: function (Jam) {
//     this.Energi -= Jam;
//     console.log(`Halo ${this.Nama}, Selamat Main!`);
//   },
//   Tidur: function (Jam) {
//     this.Energi += Jam * 2;
//     console.log(`Halo ${this.Nama}, Selamat Tidur!`);
//   },
// };

// function Mahasiswa(Nama, Energi) {
//   let Mahasiswa = Object.create(methodMahasiswa);
//   Mahasiswa.Nama = Nama;
//   Mahasiswa.Energi = Energi;
//   //   Mahasiswa.Makan = methodMahasiswa.Makan;
//   //   Mahasiswa.Main = methodMahasiswa.Main;
//   //   Mahasiswa.Tidur = methodMahasiswa.Tidur;

//   return Mahasiswa;
// }

// let Radyo = Mahasiswa("Radyo", 30);

//====================================

//ini constructure function
// function mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;

//   this.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`halo ${this.nama}, selamat makan`);
//   };

//   this.main = function (jam) {
//     this.energi -= jam;
//     console.log(`halo ${this.nama}, selamat makan`);
//   };
// }

// let Alvino = new mahasiswa("Alvino", 10);

//this mengembalikan nilai dari object tersebut tapi yang dipanggil yang paling baru

//-----------------------------------

//Versi lebih Efektifnya dari Object Declaration

// function Mahasiswa(Nama, Energi) {
//   this.Nama = Nama;
//   this.Energi = Energi;
// }

// Mahasiswa.prototype.Makan = function (Porsi) {
//   this.Energi += Porsi;
//   return `Halo ${this.Nama}, selamat Mam!`;
// };
// Mahasiswa.prototype.Main = function (Jam) {
//   this.Energi -= Jam;
//   return `Halo ${this.Nama}, selamat Main!`;
// };
// Mahasiswa.prototype.Tidur = function (Jam) {
//   this.Energi += Jam * 2;
//   return `Halo ${this.Nama}, selamat Tidur!`;
// };

//Bentuk Lainnya

class Mahasiswa {
  constructor(Nama, Energi) {
    this.Nama = Nama;
    this.Energi = Energi;
  }

  Makan(Porsi) {
    this.Energi += Porsi;
    return `Halo ${this.Nama}, selamat Mam!`;
  }
  Main(Jam) {
    this.Energi -= Jam;
    return `Halo ${this.Nama}, selamat Main!`;
  }
  Tidur(Jam) {
    this.Energi += Jam * 2;
    return `Halo ${this.Nama}, selamat Tidur!`;
  }
}

let Danisworo = new Mahasiswa("Danisworo", 50);

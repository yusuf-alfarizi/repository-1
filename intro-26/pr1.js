//luas persegi panjang

let length = 5;
let width = 3;
let area = length * width;
console.log("length width area:", area); //output: 15

//keliling persegi panjang
let perimeter = 2 * (length + width);
console.log("perimeter:", perimeter); //output: 16

// diameter,keliling,dan luas lingkaran
let radius = 5;
let circumference = 2 * Math.PI * radius;
console.log("circumference:", circumference.toFixed(4));

let circlearea = Math.PI * radius * radius;
console.log("circlearea:", circlearea.toFixed(4));

//sudut ketiga segitiga
let angleA = 80;
console.log("angleA:", angleA);
let angleB = 65;
console.log("angleB:", angleB);
let angleC = 180 - (angleA + angleB);
console.log("angleC:", angleC);

//konversi hari ketahun,bulan,hari:
function convertDays(totalDays) {
  let years = Math.floor(totalDays / 365);
  let remainingDays = totalDays % 365;

  let months = Math.floor(remainingDays / 30);
  let days = remainingDays % 30;

  console.log(
    `${totalDays} days = ${years} year(s), ${months} month(s), ${days} day(s)`
  );
}

// Contoh penggunaan:
convertDays(400);
convertDays(366);

function hitungSelisihHari(tanggal1, tanggal2) {
  let d1 = new Date(tanggal1);
  let d2 = new Date(tanggal2);

  let selisih = Math.abs(d2 - d1); // ambil nilai mutlak agar hasil positif
  let hari = selisih / (1000 * 60 * 60 * 24);

  console.log(`Selisih hari: ${hari} hari`);
}

hitungSelisihHari("2022-01-20", "2022-01-22"); // Output: 2 hari

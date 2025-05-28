console.log("hello world");

// VARIABLE
//tempat penyimpanan data sementara kita.

//DECLARE VARIABLE MENGGUNAKAN CONST

const kotaksepatupuma = "pumaspeedcat";
console.log(kotaksepatupuma);
console.log("hello world");

//DECLARE VARIABLE MENGGUNAKAN LET
let kotaksepatuortust = "ortust";
console.log(kotaksepatuortust);

//DECLARE VARIABLE MENGGUNAKAN VAR
var kotaksepatunike = "nike";
console.log(kotaksepatunike);

//DATA TYPES

//PRIMITIVE DATA TYPES

// STRING (MENYIMPAN TEXT ATAU KALIMAT)
//TERDAPAT "" PADA STRING
const _string = "ini sebuah kalimat 5 = 6";
console.log(_string);

// NUMBER (HANYA MENYIMPAN ANGKA, FLOAT, DECIMAL, INT)
const _number = 99;
console.log(_number);

// BOOLEAN (HANYA BISA MENYIMPAN VALUE ANTARA TRUE ATAU FALSE)
const _boolean = false;
console.log(_boolean);

//NULL
const _null = null;
console.log(_null);

// UNDEFINED
let _undefined;
console.log(_undefined);

// UNTUK MENGECEK DATA TYPES
console.log(typeof _null);

// NON-PRIMITIVE DATA TYPES

// ARRAY
// OBJECT

// DATE
let hariIni = new Date();
console.log(hariIni);

// BUILD-IN MATHOD
// SYNTAX TERDIRI DARI VALUE TIPE DATA ITU SENDIRI + . + NAMA BUILD IN MATHODNYA

// BUILD-IN MATHOD STRING
let $string = "hello e string";
console.log($string);

// MERUBAH SETIAP KARAKTER PADA STRING

// MERUBAH SETIAP KARAKTER PADA STRING MENJADI KAPITAL
console.log($string.toUpperCase());
// MERUBAH SETIAP KARAKTER PADA STRING MENJADI HURUF KECIL
console.log($string.toLowerCase());
// MENGHAPUS TRAILING WHITECASE / MENGHAPUS KELEBIHAN SPASI DIDEPAN MAUPUN DIBELAKANG
console.log($string.trim());

//MERUBAH KARAKTER E MENJADI A (CASE SENSITIVE)
// HANYA MERUBAH KARAKTER YANG PERTAMA KALI DI TEMUKAN
console.log($string.replace("e", "a"));

// MERUBAH SETIAP KARKATER YANG DIINGINKAN
console.log($string.replace(/l/gi, "b"));

// NUMBER BUILD IN METHOD
const $number = 5.325243;
console.log(typeof $number);

// BUILD IN METHOD UNTUK MERUBAH SETIAP ANGKA MENJADI SEBUAH STRING
console.log(typeof $number.toString());

console.log($number.toFixed(3));

// NUMBER BISA MENNGUNAKAN BUILD IN METHOD OBJECT MATH
console.log(Math.pow(5, 2));
console.log(Math.PI);

// DATE BUILD IN METHOD
const $date = new Date();
console.log($date);

console.log($date.getFullYear());
console.log($date.getMonth() + 1);
console.log($date.getDate());
console.log($date.getDay());

const z = 43;
const f = 2;
const t = 9;
console.log(5 + String(z));
console.log(`hasil perkalian dari ${z} x ${f} x ${t} = ${z * f * t}`);

/* 
NO 2
soal : a.  jelaskan kenapa baris 21,22,23 tidak dapat tampil?
jawaban : karena pada baris keempat variabel 'terdaftar' diberi nilai false sedangkan pada if statement variabel 'terdaftar' bernilai true. oleh karena itu code didalam if statement tidak berjalan yang pada akhirnya baris 21, 22, dan 23 tidak tampil.

soal : b. jelaskan kenapa deklarasi pada baris 26 menyebabkan error?
jawaban : karena pada baris ke 3 variabel 'nama' dibuat dengan const yang mana sifat dari variabel const adalah data pada const tidak bisa diubah ubah, sehingga deklarasi pada baris ke 26 error.

soal : c. Dengan melakukan komen pada baris ke 26, apakah baris 28 dapat di eksekusi? jelaskan.
jawaban : baris 28 tetap tidak akan bisa dieksekusi karena variabel 'asal' berada di dalam function (function scope) sedangkan baris 28 melakukan pemanggilan diluar function.
*/

/*
NO 3
soal : Lakukan desctucturing pada kode di bawah sehingga Budi 
Tersimpan dalam variable bernama a, Sita tersimpan dalam 
variabel bernama b, dan Ayutersimpan dalam variable 
bernama c
*/
// jawaban :
const foo = ["Budi", "Sita", "Ayu"];
// destructuring
const [a, b, c] = foo;
console.log(a, b, c);

/* 
NO 4

*/
// jawaban :
let bdays = ["10-17", "05-19", "20-19"];
var box = [];
var hasil = [];


for (var i = 0; i < bdays.length; i++) {
    box = box.concat([...bdays[i]]); 
}
console.log(box);

/* 
NO 5
soal : Kalian memiliki variabel berikut 
(let value = [1,2,3,4,5,6]). Kalikan setiap value 
dalam array tersebut dengan dua. Sehingga, ketika
dipanggil variable value mengeluarkan output 
berupa [ 2, 4, 6, 8, 10, 12 ] 

*/
// jawaban : 
let value = [1, 2, 3, 4, 5, 6];
let map1 = value.map(x =>  x * 2);

console.log(map1);

/* 
NO 6 
soal : Kalian memiliki variabel berikut 
(let arr = [1.5, 2.56,5.1, 12.33]) 
Bulatkan ke atas variable tersebut 
sehingga output yang dihasilkan adalah [ 2, 3, 5, 12 ]
*/
// jawaban :
let arr = [1.5, 2.56, 5.1, 12.33];

map2 = arr.map( x=> Math.round(x));
console.log(map2);
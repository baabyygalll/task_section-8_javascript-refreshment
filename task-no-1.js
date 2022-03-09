var a = 5;
let b = "kampus merdeka" ;
const nama = "Budi";
let terdaftar = false;
let lengkap_arr = [a, b, nama, terdaftar];

function perkenalan() {
    let asal = "indonesia";
    return console.log(
        "perkenalkan nama saya " +
        nama + 
        " nomor urut " + 
        a +
        " sekarang sedang mengikuti " +
        b +
        "berasal dari " +
        asal
    );
}
terdaftar = true;
if (terdaftar == true) {
    console.log(nama + " terdaftar sebagai kegiatan kampus merdeka");
}

a = b;
// nama = b;
console.log("array = " + lengkap_arr[2]);
// console.log("asal diakses = " + asal);
console.log("a adalah = " + a );
console.log("b adalah = " + b );
perkenalan();


// SOAL DAN JAWABAN
/* soal  : a. Ambillah index ke 2 dalam array di baris 5 dan tampilkan dalam console
 jawaban :console.log("array = " + lengkap_arr[2]);
*/

/* soal  :  b. Ubah kode diatas sehingga dapat menampilkan baris 22 di dalam console. 
jawaban  : menambahkan terdaftar = true sebelum if.
terdaftar = true;
if (terdaftar == true) {
    console.log(nama + " terdaftar sebagai kegiatan kampus merdeka");
}
*/

/* soal  : c. Lakukan pemanggilan untuk function perkenalan pada baris 31.
 jawaban : DIBARIS 31
*/

/* soal  :   d. Kalian bebas mengubah kode di atas sehingga menampilkan output pada console seperti pada gambar di bawah
     Budi terdaftar sebagai kegiatan kampus merdeka
     array = Budi
     a adalah = kampus merdeka
     b adalah = kampus merdeka
     perkenalkan nama saya Budi nomor urut kampus merdeka sekarang sedang mengikuti kampus merdekaberasal dari indonesia
jawaban  : 
output :
Budi terdaftar sebagai kegiatan kampus merdeka
array = Budi
a adalah = kampus merdeka
b adalah = kampus merdeka
perkenalkan nama saya Budi nomor urut kampus merdeka sekarang sedang mengikuti kampus merdekaberasal dari indonesia
     */
/* 
DOM Traversal (Penelusuran DOM)

Langkah dari DOM Traversal :
- Menyeleksi sebuah elemen dengan DOM Selection
- Setelah elemen tersebut terseleksi, kita akan memilih elemen lain berdasarkan elemen yang telah terseleksi sebelumnya atau istilahnya menelusuri elemennya berdasarkan hasil seleksi elemen yang telah kita seleksi di awal

kenapa harus ditelusuri?
untuk dapat menelusuri elemen spesifik terhadap suatu elemen sehingga apabila sebuah elemen memiliki sebuah event yang terjadi dan mempengaruhi elemen spesifik yang bisa ditelusuri, maka dengan adanya DOM Traversal ini dapat menemukan elemen spesifiknya berdasarkan elemen yang terjadi suatu event

DOM Traversal Method
- parentNode -> node
- parentElement -> element
- nextSibling -> node
- nextElementSibling -> element
- previousSibling -> node
- previousElementSibling -> element

*/

// membuat daftar kontak sederhana
// rule : menampilkan informasi nama dan nomor telfon dan bisa dihapus ketika di klik pada tanda x

// apabila di klik tanda x maka kontak (pada kartu tertentu) akan hilang

// Event Handling
// const close = document.querySelector('.close');
// const card = document.querySelector('.card');

// close.addEventListener('click', function() {
//     card.style.display = 'none';
// });

// // Cara tanpa DOM Traversal untuk menghapus kartu kontak
// const close = document.querySelectorAll('.close');
// const card = document.querySelectorAll('.card');
// // console.log(close);

// for(let i = 0; i < close.length; i++) {
//     close[i].addEventListener('click', function() {
//         // alert('tombol ke-' + i);
//         card[i].style.display = 'none';
//     });
// }

// DOM Traversal
const close = document.querySelectorAll('.close');
// const card = document.querySelectorAll('.card');
// // console.log(close);

// for(let i = 0; i < close.length; i++) {
//     close[i].addEventListener('click', function(e) {
//         // ambil element close lalu telusuri parent elemennya
//         // close[i].parentElement.style.display = 'none';

//         // e dalam parameter function menunjukkan elemen mana yang sedang melakukan event dan informasi object elemen yang sedang terjadi
//         // console.log(e);
//         // console.log(e.target); // mengambil elemen yang ditargetkan
//         e.target.parentElement.style.display = 'none';

//     });
// }

// cara lain selain menggunakan for yaitu forEach
close.forEach(function(el) {
    el.addEventListener('click', function(e) {
        e.target.parentElement.style.display = 'none';
    });
});

const nama = document.querySelector('.nama');
console.log(nama); // span class "nama"
console.log(nama.parentElement); // div class "card"
console.log(nama.parentNode); // div class "card"
console.log(nama.parentElement.parentElement); // div class "container"
console.log(nama.nextSibling); // menghasilkan #text yang berupa "enter(\n)" atau baris baru, hal ini dikarenakan ketika kita menuliskan nex sibling, elemen yang diambil atau yang dihasilkan adalah node dan kebetulan span telp dipisahkan oleh sebuah baris baru karena ada enter setelah span nama. Apabila span nama dan span telp tidak dipisahkan maka span telp akan dipilih
console.log(nama.nextElementSibling); // apabila ingin memastikan mengambil elemen HTML dari nextSibling terhadap span nama menghasilkan span telp
console.log(nama.previousElementSibling); // akan menghasilkan elemen sebelum span nama
console.log(nama.previousElementSibling.previousElementSibling); // akan menghasilkan null karena sudah tidak memiliki sibling diatasnya
console.log(nama.nextElementSibling.nextElementSibling); // akan menghasilkan span close atau dua tingkat di atas span nama
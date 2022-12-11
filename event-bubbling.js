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
// const close = document.querySelectorAll('.close');
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
// close.forEach(function(el) {
//     el.addEventListener('click', function(e) {
//         e.target.parentElement.style.display = 'none';
//     });
// });

// const nama = document.querySelector('.nama');
// console.log(nama); // span class "nama"
// console.log(nama.parentElement); // div class "card"
// console.log(nama.parentNode); // div class "card"
// console.log(nama.parentElement.parentElement); // div class "container"
// console.log(nama.nextSibling); // menghasilkan #text yang berupa "enter(\n)" atau baris baru, hal ini dikarenakan ketika kita menuliskan nex sibling, elemen yang diambil atau yang dihasilkan adalah node dan kebetulan span telp dipisahkan oleh sebuah baris baru karena ada enter setelah span nama. Apabila span nama dan span telp tidak dipisahkan maka span telp akan dipilih
// console.log(nama.nextElementSibling); // apabila ingin memastikan mengambil elemen HTML dari nextSibling terhadap span nama menghasilkan span telp
// console.log(nama.previousElementSibling); // akan menghasilkan elemen sebelum span nama
// console.log(nama.previousElementSibling.previousElementSibling); // akan menghasilkan null karena sudah tidak memiliki sibling diatasnya
// console.log(nama.nextElementSibling.nextElementSibling); // akan menghasilkan span close atau dua tingkat di atas span nama

/* 
Prevent Default adalah bagaimana cara kita untuk menghentikan aksi default yang dilakukan oleh elemen web kita.

Prevent default adalah sebuah method yang berada pada object parameter function event.

Tujuannya adalah untuk menghentikan aksi default yang dilakukan sebuah element
*/

// Prevent-Default Begin
// close.forEach(function(el) {
//     el.addEventListener('click', function(e) {
//         e.target.parentElement.style.display = 'none';
//         // dikarenakan menggunakan elemen a(hyperlink), ketika di klik tidak menghilangkan kontak akan tetapi seperti ngedip. Hal ini dikarenakan terdapat aksi default yang dilakukan oleh elemen a ini. elemen a sendiri merupakan elemen hyperlink yang dimana ketika di klik dia akan berpindah ke bagian atau halaman lain yang ditulis pada attribute hrefnya. Karena tidak menuliskan apapun di bagian hrefnya maka akan dikembalikan ke halaman semula atau otomatis merefresh halamannya yang menyebabkan elemennya kembali lagi (tidak terhapus)
//         e.preventDefault(); // dengan menggunakan method prevent default ini menyebabkan elemen tidak melakukan aksi default (refresh) sehingga kartu kontak bisa dihapus

//         // event bubbling
//         e.stopPropagation(); // menghentikan event parent element (div.card) dengan menjalankan event element yang menjadi target (a.close)
//     });
// });

/* 
Secara default, ketika kita telah memberikan sebuah event pada sebuah elemen, maka event tersebut akan berlaku pada elemen-elemen pembungkusnya juga.

Event Bubbling adalah ketika kita punya sebuah event pada child element (a.close) dan juga pada parent element (div.card), maka ketika kita jalankan event pada child element maka event pada parent elementnya juga akan dijalankan

*/

// memberikan event pada pembungkusnya a yaitu elemen dengan class card
// const cards = document.querySelectorAll('.card');
// cards.forEach(function(card) {
//     card.addEventListener('click', function(e) {
//         alert('ok');
//     })
// });

// bagaimana jika kontak kartu (div.card) ditambah melalui web browsernya dengan cara edit html sehingga memiliki 5 kartu? hal ini menyebabkan kontak kartu yang ditambahkan tidak memiliki event yang dapat menghapus kartu kontak sehingga script masih belum efektif untuk permasalahan ini

// jawaban pertanyaan di atas

// bagaimana jika event diberikan pada parent element (div.container) sehingga nanti eventnya bisa tahu kita klik apa di dalam div container

const container = document.querySelector('.container');
container.addEventListener('click', function(e) {
    // console.log(e.target); // mengecek target elemen apa yang di klik pada div container
    if(e.target.className == 'close') {
        e.target.parentElement.style.display = 'none';
        e.preventDefault(); // untuk jaga-jaga apabila yang di klik merupakan elemen link
    }
}); // dari event ini bisa diketahui menjadi lebih efektif dimana kita hanya menempelkan satu event pada sebuah element. selain itu, dengan adanya event ini javascript tidak peduli apabila terdapat perubahan pada elemen htmlnya walaupun perubahannya dilakukan secara instan (melalui web browser)
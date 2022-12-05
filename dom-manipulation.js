/*
DOM Manipulation

DOM Manipulation Method
- Manipulasi Element
- Manipulasi Node

Manipulasi Element
- element.innerHTML => Untuk mengubah isi dari sebuah tag yang sudah kita seleksi. Inner HTML juga dapat diisikan oleh tag HTML itu sendiri sehingga tidak hanya sebatas mengubah isi dari elemen yang diseleksi
- element.style.<property> => Untuk mengubah style/css dari sebuah elemen yang telah kita seleksi
- element.setAttribute() => Untuk memanipulasi attribute pada sebuah elemen yang sudah kita seleksi
- element.classList => secara spesifik, untuk memanipulasi class 
- ...

*/

// latihan memanipulasi isi element

// const judul = document.getElementById('judul'); // menangkap elemen dengan id judul
// judul.innerHTML = '<em>Sandhika Galih</em>'; // mengubah isi elemen ber id judul menjadi Sandhika Galih dan menambahkan tag elemen em pada tulisannya

// const sectionA = document.querySelector('section#a'); // menangkap elemen section dengan id a
// sectionA.innerHTML = '<div><p>paragraf1</p></div>'; // mengubah seluruh isi dari elemen section dengan id a dengan elemen div yang berisi elemen paragraf bertuliskan paragraf 1 tanpa peduli isi dari elemen section id a sebelumnya

// latihan memanipulasi element css
// const judul = document.querySelector('#judul'); // menangkan elemen dengan id judul
// judul.style.color = 'lightblue'; // mengubah warna teks menjadi biru muda
// judul.style.backgroundColor = 'salmon'; // mengubah warna background element judul menjadi berwarna salmon, pengubahan mengenai property css yang ditulis terpisah seperti background-color ditulis secara camelCase

// latihan memanipulasi attribute
/* 
Attribute adalah sesuatu yang menempel pada elemen HTML

Method untuk mengelola attribute
- element.getAttribute() -> untuk menambahkan attribute baru pada sebuah elemen html
- element.setAttribute() -> untuk mengetahui isi dari sebuah attribute pada sebuah elemen html
- element.removeAttribute() -> untuk menghilangkan sebuah attribute pada sebuah elemen html

*/

// const judul = document.getElementsByTagName('h1')[0]; // menangkap elemen dengan tag h1 yang berindeks 0
// judul.setAttribute('name', 'sandhika'); // memberikan attribute baru pada elemen h1 dengan attribute name yang berisi sandhika

// judul.getAttribute('id'); // mengembalikkan isi attribute id dari elemen judul

// const a = document.querySelector('section#a a'); // menangkap elemen anchor/link pada section a
// a.setAttribute('id', 'link'); // menambahkan attribute baru pada elemen a dengan attribute id yang berisi link

// a.getAttribute('href'); // mengembalikkan isi attribute href dari elemen a

// a.removeAttribute('href'); // menghilangkan attribute href dari elemen a

// latihan memanipulasi class
const p2 = document.querySelector('.p2'); // menangkap elemen dengan class bernama p2
// p2.setAttribute('class', 'label'); // dapat memberikan attribute class baru dengan nama label akan tetapi menimpa atau mengganti nama class sebelumnya sehingga yang dihasilkan elemen dengan class baru ini

/* 
Untuk memanipulasi elemen yang memiliki class terdapat beberapa method diantaranya
- element.classList.add() -> untuk menambah class baru
- element.classList.remove() -> untuk menghilangkan class yang sudah ada
- element.classList.toggle() -> dengan menggunakan toggle, jikalau elemen tidak memiliki sebuah class tertentu maka otomatis toggle akan menambahkannya, akan tetapi apabila sebuah class sudah memiliki class tertentu maka secara otomatis toggle akan menghilangkannya
- element.classList.item() -> untuk mengetahui class tertentu pada sebuah elemen
- element.classList.contains() -> untuk mengecek di dalam sebuah elemen apakah terdapat suatu class tertentu
- element.classList.replace() -> untuk mengganti class yang ada dengan class yang baru
*/

p2.classList.add('label'); // untuk menambahkan class label pada elemen p2

p2.classList.remove('label'); // untuk menghapus class label pada elemen p2 apabila elemen p2 memiliki class tersebut akan tetapi kalau tidak punya juga gapapa

p2.classList.toggle('label'); // apabila elemen p2 memiliki class label maka tambahkan, apabila sudah maka hapus dengan mengembalikan hasil boolean dimana 'true' menandakan menambahkan class dan 'false' menandakan menghapus class

document.classList.toggle('biru-muda'); // menambahkan class pada elemen body -> true

document.classList.toggle('biru-muda'); // menambahkan class pada elemen body -> false

p2.classList.add('satu'); // untuk menambahkan class satu pada elemen p2 -> total class = 2

p2.classList.add('dua'); // untuk menambahkan class dua pada elemen p2 -> total class = 3

p2.classList.add('tiga'); // untuk menambahkan class tiga pada elemen p2 -> total class = 4

p2.classList.item(2); // untuk mencari urutan kelas kedua pada elemen p2 dengan indeks awalnya 0

p2.classList.contains('dua'); // untuk mengecek apakah ada class yang namanya 'dua' pada elemen p2 menghasilkan true yang berarti ada

p2.classList.contains('empat'); // untuk mengecek apakah ada class yang namanya 'empat' pada elemen p2 menghasilkan false yang berarti tidak ada

p2.classList.replace('tiga', 'empat'); // untuk mengganti class tertentu yang sudah ada dengan class baru pada elemen p

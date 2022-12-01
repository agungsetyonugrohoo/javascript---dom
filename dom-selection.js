/* 
DOM Selection

DOM Selection Method
- getElementById() => untuk memilih elemen DOM pada HTML melalui Idnya, hasilnya pasti 1 karena unik
- getElementsByTagName() => untuk mencari elemen-elemen yang memiliki nama tag tertentu
- getElementsByClassName() => untuk mencari elemen-elemen yang memiliki nama class tertentu, hasilnya dapat jamak karena class dapat digunakan pada berbagai elemen HTML
- querySelector() => untuk mencari elemen-elemen HTML berdasarkan selectornya (tunggal)
- querySelectorAll() => untuk mencari elemen-elemen HTML berdasarkan selectornya (jamak)

Method => Hasil
- getElementById() => element
- getElementsByTagName() => HTMLCollection
- getElementsByClassName() => HTMLCollection
- querySelector() => element
- querySelectorAll() => nodeList

Alasan mengapa script.js dicantumkan di bawah sebelum tutup tag elemen body adalah dikarenakan kode pada javascript terutama DOM itu sendiri baru dapat mengenali elemen-elemen yang ada pada HTML setelah semuanya ter-load pada memori. Apabila belum ter-load maka javascript tidak menangkan apa-apa dan akan menghasilkan null
*/

// DOM Selection
// document.getElementById() -> element
const judul = document.getElementById('judul'); // javascript tolong carikan saya elemen berdasarkan id "judul" pada object document
judul.style.color = 'red'; // untuk memanipulasi inline css dengan menambahkannya pada elemen dengan id judul dengan menambahkan warna merah pada tampilannya
judul.style.backgroundColor = '#ccc'; // untuk memanipulasi inlince css background color pada elemen id judul. untuk css dengan dua kata seperti background-color ditulis dengan camelcase menjadi backgroundColor
judul.innerHTML = 'Sandhika Galih'; // untuk memanipulasi teks pada elemen id judul

// document.getElementsByTagname() -> HTMLCollections
const p = document.getElementsByTagName('p'); // untuk menangkan elemen-elemen yang memiliki tag p menghasilkan HTMLCollection
p[2].style.backgroundColor = 'lightblue'; // elemen HTML lah yang hanya bisa dimanipulasi akan tetapi array / HTMLCollection tidak bisa sehingga menggunakan indeks untuk memperoleh elemennya
for(let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = 'lightblue';
}

const h1 = document.getElementsByTagName('h1')[0]; // seleksi seluruh elemen dengan tag h1 sehingga menghasilkan HTMLCollection. Akan tetapi dikarenakan h1 hanya terdapat 1 elemen sehingga untuk mengakses elemennya diperlukan indeks sehingga dapat dituliskan indeksnya dibelakang method selectionnya
h1.style.fontSize = '50px'; // mengubah ukuran font h1 menjadi 50px

// document.getElementsByClassName() -> HTMLCollections
const p1 = document.getElementsByClassName('p1')[0]; // seleksi seluruh elemen dengan class p1 menghasilkan HTMLCollection dengan memilih indeks ke-1
p1[0].innerHTML = 'Ini diubah dari javascript'; // mengubah isi dari tulisan pada elemen class p1


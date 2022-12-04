// document.querySelector() -> element
// const p4 = document.querySelector('#b p'); // carikan saya elemen yang idnya b dan cari di dalamnya elemen paragraf
// p4.style.color = 'green'; // untuk menjadikan elemen paragraf menjadi berwarna hijau tulisannya
// p4.style.fontSize = '30px'; // untuk mengubah ukuran tulisan pada paragraf menjadi 30px

// const li2 = document.querySelector('section#b ul li:nth-child(2'); // carikan saya elemen list li kedua di dalam elemen ul yang ada pada section dengan id b
// li2.style.backgroundColor = 'orange';

// // const p = document.querySelector('p'); // dikarenakan menggunakan perintah 'selector' menyebabkan penyeleksian elemen hanya dikembalikan satu elemen html saja yang ditemukan pertama kali sehingga target yang dihasilkan adalah element paragraf 1
// // p.innerHTML = 'Ini diubah melalui javascript'; // mengubah tulisan pada paragraf pertama saja

// // document.querySelectorAll() -> memilih seluruh elemen yang menjadi target pada halaman HTML dengan menghasilkan nodeList
// const p = document.querySelectorAll('p'); // menyeleksi seluruh target elemen paragraf (p) pada html
// // p[2].style.backgroundColor = 'lightblue'; // memberikan warna background pada paragraf dengan indeks kedua pada nodeList p

// for(let i = 0; i < p.length; i++) {
//     p[i].style.backgroundColor = 'lightblue'; // untuk memberikan warna pada seluruh paragraf indeks pada nodeList p
// }

/* 
Pilih yang mana?
- getElementByid() -> apabila semua elemen pada HTML sudah memiliki Id, dalam segi performance lebih cepat
- getElementsByTagName() -> apabila memerlukan seleksi berdasarkan tag elemen htmlnya, dalam segi performance lebih cepat
- getElementsByClassName() -> apabila semua elemen html sudah memiliki class namenya
- querySelector() -> apabila diperlukan tanpa mengubah struktur elemen htmlnya
- querySelectorAll() -> sama seperti query.selector akan tetapi jamak
*/

// cara untuk menyeleksi elemen paragraf ke 4
// const p4 = document.getElementsByTagName('p');
// const p4 = document.querySelectorAll('p');
// p4[3].style.backgroundColor = 'lightblue';
// artinya carikan semua elemen p yang ada di dalam object document dan pilihlah indeks ketiga

// mengubah node root -> cara lain untuk menyeleksi elemen html dengan mempersempit scope pencariannya
const sectionB = document.getElementById('b'); // tolong seleksi elemen yang memiliki id b
const p4 = sectionB.querySelector('p'); // tolong seleksi elemen paragraf (p) dalam section B
p4.style.backgroundColor = 'orange';

// dengan query sebagai basis scopenya
// const sectionB = document.querySelector('section#b'); // tolong seleksi elemen yang memiliki id b
// const p4 = sectionB.getElementsByTagName('p')[0]; // tolong seleksi elemen paragraf (p) dengan indeks ke - 0 dalam section B
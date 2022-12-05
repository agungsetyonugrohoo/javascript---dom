/* 
Manipulasi Node => Untuk membuat/menghapus elemen-elemen DOM yang ada pada halaman HTML

"Perhatikan => Sebelum memanggil methodnya, panggil dulu nodenya"

Method manipulasi node
- document.createElement() -> untuk membuat elemen baru
- document.createTextNode() -> untuk mengisikan pada elemen baru
- node.appendChild() -> untuk memasukkan/menyimpan elemen baru pada halaman html pada posisi tertentu
- node.insertBefore() -> untuk memasukkan/menyimpan elemen baru pada halaman html pada posisi sebelum posisi elemen tertentu
- parentNode.removeChild() -> untuk menghapus elemen
- parentNode.replaceChild() -> untuk mengganti elemen
- ...

Langkah-langkah membuat elemen baru pada HTML :
1. Perintahkan javascript untuk membuat elemen dengan tag tertentu contoh -> <p></p>
2. Kemudian, perintahkan javascript untuk membuat tulisan pada tag baru tertentu yang telah dibuat sebelumnya sehingga sintaks pembuatan elemen dan penulisan isi elemen dilakukan secara terpisah
3. Setelah tag elemen baru sudah dibuat dan isinya yang mau diisikan pada elemen baru sudah ada kemudian, perintahkan javascript untuk memasukkan isi elemen baru ke dalam tag elemen baru yang sudah dibuat
4. Setelah itu, perintahkan javascript untuk menyimpan node/elemen baru yang telah dibuat pada halaman HTML

Method Baru :
- parentNode.append() -> untuk menambahkan elemen di akhir sebuah elemen parent
- parentNode.prepend() -> untuk menambahkan elemen di awal sebuah elemen parent
- childNode.before() -> untuk menambahkan elemen di awal sebuah elemen child
- childNode.after() -> untuk menambahkan elemen di akhir sebuah elemen child
- childNode.remove() -> untuk menghapus sebuah elemen di elemen child
- childNode.replaceWith() -> untuk mengganti sebuah elemen lama dengan elemen baru pada sebuah elemen child
- ...
*/

// DOM Manipulation
// buat elemen baru
const pBaru = document.createElement('p'); // untuk membuat elemen baru didalam document yang masih tersimpan pada memori
const teksPbaru = document.createTextNode('Paragraf Baru'); // untuk membuat isi / teks baru yang akan diisikan pada elemen baru

// simpan tulisan ke dalam paragraf
pBaru.appendChild(teksPbaru); // untuk memasukkan isi teksPbaru pada elemen pBaru

// simpan pBaru di akhir Section A
const sectionA = document.getElementById('a'); // menangkap elemen yang memiliki id a
sectionA.appendChild(pBaru); // memasukkan/simpan elemen pBaru pada section A di bagian akhir

// menggunakan insertBefore()
const liBaru = document.createElement('li'); // membuat elemen li baru
const teksLiBaru = document.createTextNode('Item Baru'); // membuat isi elemen untuk li baru
liBaru.appendChild(teksLiBaru); // memasukkan isi teksLiBaru pada elemen liBaru

const ul = document.querySelector('section#b ul'); // menangkap elemen ul pada section B
const li2 = ul.querySelector('li:nth-child(2)'); // menangkap elemen li kedua pada ul yang ada pada section B

ul.insertBefore(liBaru, li2); // simpan / masukkan elemen liBaru sebelum li2

// menggunakan parent.removeChild()
const link = document.getElementsByTagName('a')[0]; // menangkap elemen link dengan indeks 0
sectionA.removeChild(link); // menghapus elemen link pada sectionA

// menggunakan replaceChild()
const sectionB = document.getElementById('b'); // menangkap elemen dengan id b
const p4 = sectionB.querySelector('p'); // menangkap elemen pertama paragraf pada section B

const h2Baru = document.createElement('h2'); // membuat elemen baru h2
const teksH2Baru = document.createTextNode('Judul Baru!'); // membuat isi dari elemen h2 baru
h2Baru.appendChild(teksH2Baru); // memasukkan isi elemen h2 baru ke elemen h2

sectionB.replaceChild(h2Baru, p4); // mereplace elemen node lama (p4) menjadi elemen node baru (h2 baru)

// untuk menandai apa saja yang dimanipulasi atau elemen baru
pBaru.style.backgroundColor = 'lightgreen';
liBaru.style.backgroundColor = 'lightgreen';
h2Baru.style.backgroundColor = 'lightgreen';




















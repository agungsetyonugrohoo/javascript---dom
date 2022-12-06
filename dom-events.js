/* 
Events (Kejadian) != Even (Genap / Meskipun)

Events?
"Event pada javascript merepresentasikan sebuah kejadian yang terjadi di dalam DOM..."

"... kejadian tersebut bisa dilakukan oleh user (mouse event, keyboard event, dll)"

"... ataupun dilakukan secara otomatis oleh API (animasi selesai dijalankan, halaman selesai di load, dll)"

- Website Developer Mozilla

Cara 'mendengarkan' / menerapkan event
- Event Handler
    -> Inline HTML Attribute = dapat ditambahkan melalui attribute HTML secara inline 
    -> Element Method = dengan menggunakan method pada elemen yang telah diseleksi
- addEventListener()

Event Handler
-> cara memanggilnya dengan keyword on<event> yang dimana menunjukkan untuk mengaktifkan 'event'nya apa
ex : jika user menekan suatu tombol mouse atau trackpad, event yang bisa digunakan adalah onclick

Perbedaan Event Handler vs addEventListener()
- Event Handler -> cara lama, addEventListener() -> cara baru
- ketika menerapkan lebih dari satu perubahan pada sebuah event, jika kita menggunakan event handler maka perubahan yang terakhir dilakukan akan menimpa perubahan sebelumnya sedangkan menggunakan addEventListener dia akan menambahkan perubahannya

Event List => Untuk mengetahui terdapat event apa saja pada DOM
Daftar Event :
- Mouse Event -> Event yang berhubungan dengan mouse
- Keyboard Event -> Event yang berhubungan dengan keyboard
- Resources Event -> Event yang berhubungan dengan ketika halaman di load, dapat digunakan untuk mengetahui apakah koneksi internetnya lambat atau tidak yang menunjukkan resourcesnya diloadnya lambat
- Focus Event -> Penting ketika mengunakan elemen form dimana ketika sebuah text field atau inputan ditekan maka itu masuknya ke dalam focus
- View Event
- Form Event
- CSS Animation & Transition Event
- Drag & Drop Event
- dll.

Mouse Event
- click
- dblclick
- mouseover
- mouseenter
- mouseup
- wheel
- ...

Keyboard Event
- keydown
- keypress
- keyup

View Event
- resize
- scroll

Form Event
- reset
- submit
*/

// membuat elemen dengan class p3 ketika di click akan berubah warna backgroundnya dengan Event Handler -> Inline HTML Attribute
// const p3 = document.querySelector('.p3');

// function ubahWarnaP3() {
//     p3.style.backgroundColor = 'lightblue';
// }

// function ubahWarnaP2() {
//     p2.style.backgroundColor = 'lightblue';
// }

// membuat elemen dengan class p2 ketika di click akan berubah warna backgroundnya dengan Event Handler -> Element Method
// const p2 = document.querySelector('.p2');
// p2.onclick = ubahWarnaP2; // ini element method // tidak perlu memerlukan tanda kurung '()' dikarenakan secara otomatis javascript akan mengenalinya sebagai fungsi

// menambahkan list item baru ketika paragraf 4 di klik dengan menggunakan addEventListener()
// const p4 = document.querySelector('section#b p');
// p4.addEventListener('click', function() {
//     // alert('ok');
//     const ul = document.querySelector('section#b ul'); // ambil parent element
//     const liBaru = document.createElement('li'); // buat element li baru (kosong)
//     const teksLiBaru =  document.createTextNode('item baru'); // buat isi dari element li baru
//     liBaru.appendChild(teksLiBaru); // rangkai atau isikan li baru dengan teks li baru
//     ul.appendChild(liBaru); // simpan elemen li baru ke ul
// }); // memiliki dua parameter dimana yang pertama merupakan eventnya dan yang kedua merupakan aksi dari eventnya. Function dapat ditulis secara anonymous function. Perintah yang dilakukan adalah "Javascript cariin elemen yang berisikan paragraf 4 pada section b lalu ketika ada event click (parameter kesatu) lakukan sesuatu (parameter kedua)"

// menelusuri perbedaan event handler dengan addEventListener()
// 'ingin' membuat elemen dengan class p3 akan berubah background warnanya dan juga warna teksnya ketika di click dengan event handler
const p3 = document.querySelector('.p3');
// p3.onclick = function() {
//     p3.style.backgroundColor = 'lightblue';
// }
// p3.onclick = function() {
//     p3.style.color = 'red';
// }
// event handler di atas dimana dua event dilakukan secara terpisah menghasilkan aksi dimana event pertama (background color berubah menjadi warna biru) tertimpa oleh event kedua (warna teks berubah menjadi warna merah)

// menggunakan addEventListener
p3.addEventListener('mouseenter', function() {
    p3.style.backgroundColor = 'lightblue';
}); // dlbclick => event ini akan terjadi ketika di double click pada element yang akan melakukan suatu aksi tertentu, mouseenter => ketika mouse memasuki daerah elemen
p3.addEventListener('mouseleave', function() {
    p3.style.backgroundColor = 'lightgreen';
}); // mouseleave => ketika mouse meninggalkan daerah elemen
// dengan menggunakan addEventListener, kedua event yang dituliskan secara terpisah tidak akan membuat perubahan/aksi terakhir dari event menimpa perubahan/aksi sebelumnya, justru yang dilakukan adalah menambahkannya


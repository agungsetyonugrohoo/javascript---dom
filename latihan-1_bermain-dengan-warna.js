// kasus 1 : membuat background halaman website yang akan berubah warnanya secara tertentu ketika sebuah tombol ditekan dimana tombolnya sudah ada di html dengan id tUbahWarna

const tUbahWarna = document.getElementById('tUbahWarna');
tUbahWarna.onclick = function() {
    // document.body.style.backgroundColor = 'lightblue';
    // document.body.setAttribute('class', 'biru-muda'); // menambahkan class ke elemen body
    document.body.classList.toggle('biru-muda'); // untuk menambahkan class ke elemen body apabila tidak terdapat class yang diinginkan dan apabila sudah ada akan dihapus
}

// kasus 2 : membuat background halaman website yang akan berubah warnanya secara random ketika sebuah tombol ditekan dimana tombolnya dibuat melalui javascript
const tAcakWarna = document.createElement('button');
const teksTombol = document.createTextNode('Acak Warna');
tAcakWarna.appendChild(teksTombol);
tAcakWarna.setAttribute('type', 'button');
tUbahWarna.after(tAcakWarna);

tAcakWarna.addEventListener('click', function() {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    // console.log(r);
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')'; // untuk memberikan warna berdasarkan konfigurasi nilai rgbnya dari 0 hingga 255 dimana jika (0,0,0) menandakan tidak ada warna atau hitam dan (255,255,255) menandakan warna putih
});

// kasus 3 : mengatur konfigurasi warna rgb untuk mengubah warna background halaman menggunakan slider
const sMerah = document.querySelector('input[name=sMerah]'); // untuk menangkap elemen input dengan name sMerah

const sHijau = document.querySelector('input[name=sHijau]'); // untuk menangkap elemen input dengan name sHijau

const sBiru = document.querySelector('input[name=sBiru]'); // untuk menangkap elemen input dengan name sBiru

sMerah.addEventListener('input', function() {
    // alert('ok');
    // console.log(sMerah.value); // untuk mengambil isi dari elemen input
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
}); // event change bermaksud untuk meninjau apakah ada perubahan posisi pada slider

sHijau.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
}); // event input berfungsi untuk menangkap nilai slider secara real-time

sBiru.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
}); 

// kasus 4 : mengubah warna background halaman melalui posisi kursor mouse berdasarkan koordinat dari mouse terhadap halaman html
document.body.addEventListener('mousemove', function(event) {
    // posisi mouse (sb x, sb y)
    // console.log(event.clientX); // method ini berfungsi untuk mengetahui koordinat pada sumbu-x. agar dapat berfungsi method ini harus ditempelkan terhadap suatu object yang dimana sebagai parameter dalam function
    // console.log(event.clientY); // method ini berfungsi untuk mengetahui koordinat pada sumbu-y.
    // ukuran browser
    // console.log(window.innerWidth); // untuk mengetahui lebar ukuran dari object documentnya tanpai minimize, maximize dsb
    const xPos = Math.round((event.clientX / window.innerWidth) * 255); // untuk mengenerate bilangan bulat dari hasil bagi posisi mouse thd sb-x dengan ukuran lebar maksimal dari browsernya
    // console.log(xPos);
    const yPos = Math.round((event.clientY / window.innerHeight) * 255);
    document.body.style.backgroundColor = 'rgb('+ xPos +','+ yPos + ',100)';
}); // menangkap dulu bodynya sebagai track pad dari pergerakan mousenya dengan perintah "ketika mouse bergerak di dalam body jalankan kode berikut"





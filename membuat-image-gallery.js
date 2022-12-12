// membuat perubahan gambar pada elemen gambar jumbo (yang besar) dengan gambar yang ada di thumbnail (yang kecil)

const container = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');
const thumbs = document.querySelectorAll('.thumb');

container.addEventListener('click', function(e) {
    // cek apakah yang di-klik adalah thumb
    if(e.target.className == 'thumb') {
        // console.log(jumbo.src);
        // console.log(e.target.src);
        jumbo.src = e.target.src; // mengubah sumber gambar dari elemen jumbo menjadi sumber gambar dari elemen thumbnail
        // menambahkan efek animasi pada elemen jumbo
        jumbo.classList.add('fade');
        // untuk membuat penambahan class fade tidak selalu tersimpan pada elemen div jumbo yang dimana akan menyebabkan animasi tidak berjalan apabila pada div jumbo sudah ada class fadenya
        setTimeout(function() {
            jumbo.classList.remove('fade');
        }, 500)

        // membuat animasi opacity pada thumbnail yang dipilih pada jumbo
        thumbs.forEach(function(thumb) {
            // if(thumb.classList.contains('active')) {
            //     thumb.classList.remove('active');
            // }
            thumb.className = 'thumb';
        })
        e.target.classList.add('active');
    }
});
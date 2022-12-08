// membuat logika dari pilihan random komputer
function getPilihanComputer() {
    const comp = Math.random();
    if(comp < 0.34) return 'gajah';
    if(comp >= 0.34 && comp <= 0.67) return 'orang';
    return 'semut';
}

// membuat rules permainan
function getHasil(comp, player) {
    if( player == comp ) return 'SERI!';
    if( player == 'gajah' ) return ( comp == 'orang' ) ? 'MENANG!' : 'KALAH!';
    if( player == 'orang' ) return ( comp == 'gajah' ) ? 'KALAH!' : 'MENANG!';
    if( player == 'semut' ) return ( comp == 'orang' ) ? 'KALAH' : 'MENANG!';
}

function putar() {
    const imgComputer = document.querySelector('.img-komputer');
    const gambar = ['gajah', 'semut', 'orang'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function() {
        if(new Date().getTime() - waktuMulai > 1000) {
            clearInterval;
            return;
        };
        imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
        if(i == gambar.length) i = 0;
    }, 100); // fungsi untuk melakukan sesuatu secara berulang-ulang selama waktu tertentu
}

// membuat pilihan player terangkum pada satu event
const pilihan = document.querySelectorAll('li img');
// console.log(pilihan);
pilihan.forEach(function(pil) {
    // console.log(pil); // untuk mengecek isi dari pilihan
    pil.addEventListener('click', function() {
        // console.log(pil);

        // menangkap pilihan dari computer
        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer = pil.className;
        const hasil = getHasil(pilihanComputer, pilihanPlayer);

        putar();

        setTimeout(function() {
            // mengganti gambar pilihan dari komputer
            const imgComputer = document.querySelector('.img-komputer');
            imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

            // menampilkan hasil permainan
            const info = document.querySelector('.info');
            info.innerHTML = hasil;
        }, 1000); // fungsi ini dijalankan setelah 1 detik atau setelah fungsi putar selesai
        
    }); // untuk dapat memilih salah satu dari 3 pilihan
});

// menangkap tombol-tombol pilihan player
// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function() {
//     // alert('ok');
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pGajah.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);
//     // console.log('comp : ' + pilihanComputer);
//     // console.log('player : ', pilihanPlayer);
//     // console.log('hasil : ' + hasil);

//     // mengganti gambar pilihan dari komputer
//     const imgComputer = document.querySelector('.img-komputer');
//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

//     // menampilkan hasil permainan
//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });

// // menangkap tombol-tombol pilihan player
// const pOrang = document.querySelector('.orang');
// pOrang.addEventListener('click', function() {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pOrang.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);

//     // mengganti gambar pilihan dari komputer
//     const imgComputer = document.querySelector('.img-komputer');
//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

//     // menampilkan hasil permainan
//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });

// // menangkap tombol-tombol pilihan player
// const pSemut = document.querySelector('.semut');
// pSemut.addEventListener('click', function() {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pSemut.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);

//     // mengganti gambar pilihan dari komputer
//     const imgComputer = document.querySelector('.img-komputer');
//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

//     // menampilkan hasil permainan
//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });

// Komang Dio Aseh Arifianto
// Sistem Informasi
// 2301010053

const prompt = require('prompt-sync')();

let score = 0;
let jawaban_benar = 0;
let jawaban_salah = 0;
let point_per_soal = 1;

let soal = [
    {
        "q": "Yang merupakan member JKT 48?",
        "o": [
            'Jokowi',
            'Freya',
            'Nadin Amizah',
            'Igun Mama Takut',
        ],
        "a": 1 
    },
    {
        "q": "Nama kakak Upin dan Ipin adalah...",
        "o": [
            'Kak Rose',
            'Kak Jeane',
            'Monkey D. Luffy',
            'Igun Mama Takut',
        ],
        "a": 0 
    },
    {
        "q" : "Berapa total benua yang ada di dunia?",
        "o" : [
             '3 Benua',
             '4 Benua',
             '5 Benua',
             '6 Benua',
        ],
        "a" : 2
    },
    {
        "q" : "Apa negara dengan penduduk terbanyak di dunia?", 
        "o" : [
             'China',
             'Indonesia',
             'Amerika',
             'India',
        ],
        "a" : 3,
    },
    {
        "q" : "Apa lambang negara Indonesia?",
        "o" : [
             'Garuda',
             'Melati',
             'Elang',
             'Mawar',
        ],
        "a" : 0,
    }

]

let nama = prompt('Input nama: ');

for (let i = 0; i < soal.length; i++) {
    console.log(`\nSoal ${i + 1}: ${soal[i].q}`);
    for (let j = 0; j < soal[i].o.length; j++) {
        console.log(`${j + 1}. ${soal[i].o[j]}`);
    }

    let jawabanUser = prompt('Masukkan nomor jawaban Anda: ');
    jawabanUser = parseInt(jawabanUser) - 1; // Mengonversi jawaban pengguna menjadi angka

    if (jawabanUser === soal[i].a) {
        console.log('Jawaban Anda benar!');
        score += point_per_soal;
        jawaban_benar++;
    } else {
        console.log('Jawaban Anda salah.');
        score += point_per_soal;
        jawaban_salah++;
    }
}


//menampilka hasil
console.log("Kuis selesai")
console.log("\n")
console.log("Statistic Kuis")
console.log('Nama\t\t:',nama)
console.log('Score\t\t:',score)
console.log('Jawaban benar\t:',jawaban_benar)
console.log('Jawaban salah\t:',jawaban_salah)

var panggiluntukinput = require("readline-sync");

var a1 = panggiluntukinput.questionInt('Fungsi:1.Tambah,2.kali,3.kurang,4.bagi,5.Modulus = ');
var Nilai1 = Number(a1)
if (a1 >= 6){
    console.log('Tolong input angka antara 1-5');
} else {
if(Nilai1 == 1){
    var MasukanNilai1 = panggiluntukinput.questionInt('Masukan nilai 1= ')
    var MasukanNilai2 = panggiluntukinput.questionInt('Masukan nilai 2= ')
    console.log("Hasilnya adalah= " + (Number(MasukanNilai1)+(Number(MasukanNilai2))))
}else if(Nilai1 == 2){
    var MasukanNilai1 = panggiluntukinput.questionInt('Masukan nilai 1= ')
    var MasukanNilai2 = panggiluntukinput.questionInt('Masukan nilai 2= ')
    console.log("Hasilnya adalah= " + (Number(MasukanNilai1)*(Number(MasukanNilai2))))
}

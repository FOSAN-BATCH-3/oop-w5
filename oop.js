// 'use strict'
/*
  buat lah sebuah program calculator untuk menghitung sebuah perhitungan
  gunakan konsep OOP untuk pengerjaanya 
  buat coding sesuai dengan method method yang telah disediakan 
  gunakan chaining method untuk case jika lebih dari 1 perhitungan
  gunakan konsep yang diawah ini:
  * - Classes
  * - Default Parameters
  * - Method Chaining
*/


class Calculator {
  //write your code here
  constructor (nilai){
    this.hasil = nilai;
  }

  add (nilai2) {
    this.hasil += nilai2;
    return this;
  }

  subtract (nilai2) {
    this.hasil -= nilai2;
    return this;
  }

  multiply (nilai2) {
    this.hasil *= nilai2;
    return this;
  }

  divide (nilai2) {
    this.hasil /= nilai2;
    // console.log('sekarang hasil = '+this.hasil);
    return this;
  }

  square (nilai2) {
    this.hasil **= nilai2;
    return this;
  }
  
  squareRoot () {
    // console.log('sekarang hasil = '+this.hasil);
    this.hasil = Math.sqrt(this.hasil);
    return this;
  }

  phi (){
    // console.log('sekarang hasil = '+this.hasil);
    this.hasil *= 3.14;
    return this;
  }

  result(){
    let hasilAkhir = this.hasil;
    this.hasil = 0;
    return hasilAkhir;
  }
}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

const hitung = new Calculator(0);

console.log(hitung.add(3).divide(3).multiply(10).result()); //10
console.log(hitung.add(3).divide(3).phi().result()); //3.14
console.log(hitung.add(3).divide(3).squareRoot().result()); // 1 

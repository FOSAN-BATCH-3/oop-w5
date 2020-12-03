'use strict'
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
    this.total = nilai;
  
  }
// penjumlahan
  add (tampung) {
    this.total += tampung;
    return this;
  }
// pengurangan
  subtract (tampung) {
   this.total -= tampung;
   return this;
  }
// perkalian
  multiply (tampung) {
   this.total *= tampung;
   return this;
  }
// pembagian
  divide (tampung) {
  this.total /= tampung;
  return this;
  }
//pangkat
  square (tampung) {
   this.total **= tampung;
   return this;
  }
//akar
  squareRoot (tampung) {
  this.total =Math.sqrt (this.total)
  return this;
  }

//phi
  phi (){
    this.total *=3.14 ;
    return this;

  }

  result(){
  let hasil = this.total;
  this.total = 0;
  return hasil;
    
  }
}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

const hitung = new Calculator(0)

console.log(hitung.add(3).divide(3).multiply(10).result()) //10
console.log(hitung.add(3).divide(3).phi().result()) //3.14
console.log(hitung.add(3).divide(3).squareRoot().result()) // 1 

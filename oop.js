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
  constructor (){
  this.jumlah = 0
  }

  add (hitung) {

      this.jumlah += hitung;
      return this;
    
    }

  subtract (hitung) {
      this.jumlah -= hitung;
      return this;
  }

  multiply (hitung) {
    this.jumlah *= hitung;
    return this;
  }

  divide (hitung) {
    this.jumlah /= hitung;
    return this;
  }

  square (hitung) {
    this.jumlah **= hitung;
    return this;
  }
  
  squareRoot () {
    this.jumlah = Math.sqrt(this.jumlah)
    return this
  }

  phi (){
    this.jumlah = (this.jumlah * Math.PI).toFixed(2)
    return this
  }

  result(){
  
    let hasil = this.jumlah;
    this.jumlah = 0;
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

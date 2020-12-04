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
  constructor (angka){
      this.hasil = angka
  }

  add (angka) {
    this.hasil += angka
    return this
  }

  subtract (angka) {
    this.hasil -= angka
    return this
  }

  multiply (angka) {
    this.hasil *= angka
    return this
  }

  divide (angka) {
    this.hasil /= angka
    return this
  }

  square (angka) {
    this.hasil = angka*angka
    return this
  }
  
  squareRoot () {
    Math.sqrt(this.hasil)
    return this
  }

  phi (){
    this.hasil *= 3.14
    return this
  }

  result (){
    let angka1 = this.hasil
    this.hasil = 0
    return angka1
    
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

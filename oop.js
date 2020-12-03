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
    this.angka = 0;
  
  }

  add (jumlah) {
    this.angka += jumlah
    return this
  }

  subtract (jumlah) {
    this.angka -= jumlah
    return this
  }

  multiply (jumlah) {
    this.angka *= jumlah
    return this
  }

  divide (jumlah) {
    this.angka /= jumlah
    return this
  }

  square (jumlah) {
    this.angka **= jumlah
    return this
  }
  
  squareRoot () {
    this.angka = Math.sqrt(this.angka)
    return this
  }

  phi (){
    this.angka = (this.angka * Math.PI).toFixed(2)
    return this
  }

  result(){
    return this.angka
    
  }
  clear(){
    return this.angka = 0;
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
hitung.clear()
console.log(hitung.add(3).divide(3).phi().result()) //3.14
hitung.clear()
console.log(hitung.add(3).divide(3).squareRoot().result()) // 1 

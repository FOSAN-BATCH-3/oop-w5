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
  constructor (input){ 
    this.x = input
    this.y = 0
    console.log (this.x)
  }

  add (angka) {
    this.x += angka
    return this
  }

  subtract (angka) {
   this.x -= angka
   return this
  }

  multiply (angka) {
    this.x *= angka
    return this
  }

  divide (angka) {
    this.x /= angka
    return this
    console.log(this.x)
  
  }

  square (angka) {
   this.x **= angka
   return this
  }
  
  squareRoot () {
    Math.sqrt(this.x)
    return this
  }

  phi (){
    this.x *= 3.14
    return this
  }

  result(){
  this.y = this.x
  this.x = 0 
  return this.y
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

console.log(hitung.add(3).divide(3).multiply(10).result());//10
console.log(hitung.add(3).divide(3).phi().result()); //3.14
console.log(hitung.add(3).divide(3).squareRoot().result()); // 1 
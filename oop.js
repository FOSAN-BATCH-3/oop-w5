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
    constructor (c){
  "user strict";
  this.hasil=c
    
    }
  
    add (a) {
    this.hasil+= a
    return this
    }
  
    subtract (a) {
    this.hasil-= a
    return this
    }
  
    multiply (a) {
    this.hasil*= a
    return this
    }
  
    divide (a) {
    this.hasil/= a
    return this
    }
  
    square (a) {
    this.hasil**=a
    return this
    }
    
    squareRoot (a) {
    this.hasil=Math.sqrt(this.hasil)
    return this
    }
  
    phi (a){
    this.hasil*=3.14
    return this
    }
  
    result(){
    let hasiltotal=this.hasil
    this.hasil=0
    if(isNaN(this.hasil)||this.hasil==undefined){
        this.hasil=0
        return this
    }
    else{
return hasiltotal
    }
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
  

class Aktivitas {
    constructor(Aktivitas){
    this.saldo = 0
    this.transaksi2 = [] 
}

nabung (input){
    this.saldo += input
    this.transaksi2.push({namaTansaksi:'nabung', harga : input })
    return this
}

belanja (price, barang){
    this.saldo -= price
    this.transaksi2.push ({namaTansaksi: barang, harga: price})
    return this
}
cetakSaldo(){
    return this.saldo
}
transaksi(){
    return this.transaksi2
}

}


let dompet = new Aktivitas()

console.log(dompet.nabung(10000).cetakSaldo())

console.log(dompet.belanja(2000,'ayam goreng').nabung(10000).cetakSaldo())

console.log(dompet.belanja(5000, 'sodakoh').transaksi())

// [

// {namaTransaksi: 'nabung', harga: 10000},

// {namaTransaksi: 'ayam goreng', harga: 10000},

// {namaTransaksi: 'nabung', harga: 10000},

// {namaTransaksi: 'sodakoh', harga: 5000}

// ]//let dompet = new Aktifitas()

//dompet.nabung(10000).cetakSaldo()

//dompet.belanja(2000, 'ayam goreng').nabung(10000).cetaksaldo()

//dompet.belanja(5000, 'sodakoh').transaksi()

// [

// {namaTransaksi: 'nabung', harga: 10000},

// {namaTransaksi: 'ayam goreng', harga: 10000},

// {namaTransaksi: 'nabung', harga: 10000},

// {namaTransaksi: 'sodakoh', harga: 5000}

// ]
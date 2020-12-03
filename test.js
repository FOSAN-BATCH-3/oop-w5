// class Rekening property saldo number & transaksi array of object (namaTransaksi, harga)

// method cetak saldo untuk cetak saldo akhir

// method cetak transaksi untuk cetak seluruh transaksi

// class Aktifitas turuan dari Rekening

// method nabung - parameter jumlah 

// method belanja - parameter jumlah dibelanjakan & Nama Barang

// masing2 method nabung & belanja harus input ke transaksi

//let dompet = new Aktifitas()

//dompet.nabung(10000).cetakSaldo()

//dompet.belanja(2000, 'ayam goreng').nabung(10000).cetaksaldo()

//dompet.belanja(5000, 'sodakoh').transaksi()

// [

//     {namaTransaksi: 'nabung', harga: 10000},

//     {namaTransaksi: 'ayam goreng', harga: 10000},

//     {namaTransaksi: 'nabung', harga: 10000},

//     {namaTransaksi: 'sodakoh', harga: 5000}

// ]


class Rekening {
    constructor(){
        this.saldo = 0;
        this.transaksi = [];
    }
    cetakSaldo(){
        return this.saldo
    }
    cetakTransaksi(){
        return this.transaksi
    }
}

class Aktifitas extends Rekening{
    nabung(jumlah){
        this.saldo += jumlah
        this.transaksi.push({namaTransaksi: 'nabung', harga: jumlah})
        return this
    }
    belanja(jumlah, nama){
        this.saldo += jumlah
        this.transaksi.push({namaTransaksi: nama, harga: jumlah})
        return this
    }
}

let dompet = new Aktifitas()

console.log(dompet.nabung(10000).cetakSaldo());
console.log(dompet.belanja(2000,'ayam goreng').nabung(10000).cetakSaldo());
console.log(dompet.belanja(5000, 'sodakoh').cetakTransaksi());
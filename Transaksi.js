// [
//     {namaTransaksi: 'nabung', harga: 10000},
//     {namaTransaksi: 'ayam goreng', harga: 10000},
//     {namaTransaksi: 'nabung', harga: 10000},
//     {namaTransaksi: 'sodakoh', harga: 5000}
// ]
class Rekening {
    constructor(){
        this.saldo = 0
        this.transaksi = []
    }
    cetakSaldo(){
        return 'sisa saldo : '+this.saldo;
    }
    cetakTransaksi(){
        return this.transaksi;
    }
}
class Aktifitas extends Rekening    {
    nabung(jumlah){
        this.saldo += jumlah;
        this.transaksi.push({namaTransaksi : 'nabung', harga : this.saldo});
        return this;
    }
    belanja(jumlah,item){
        this.saldo -= jumlah;
        this.transaksi.push({namaTransaksi : item, harga : this.saldo});
        return this;
    }
}


let dompet = new Aktifitas()
console.log(dompet.nabung(10000).cetakSaldo())
console.log(dompet.belanja(2000, 'ayam goreng').nabung(10000).cetakSaldo())
console.log(dompet.belanja(5000, 'sodakoh').cetakTransaksi())

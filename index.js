// ! JANGAN DIMOFIDIKASI
const dataBelanjaan = [
  {
    id: "D-10001",
    nama: "Minyak Goreng Delima",
    harga: 25000,
    kuantitas: 2,
  },
  {
    id: "D-10020",
    nama: "Beras Mamos",
    harga: 48000,
    kuantitas: 1,
  },
  {
    id: "F-00010",
    nama: "Larutan Cap Kaki Empat",
    harga: 7500,
    kuantitas: 8,
  },
];

const displayListWithCondition = (items, condition) => {
  const data = [];
  let sumOfPrice = 0;
  for(let i = 0 ; i < items.length; i++) {
    const itemPrint = "- " + items[i].nama + " x " + items[i].kuantitas;
    data.push(itemPrint);
    sumOfPrice += items[i].harga * items[i].kuantitas;
  }
  if(condition == 0){
    return data;
  }
  else {
    return sumOfPrice;
  }
 
}
// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const listBelanjaan = (items) => {
    return displayListWithCondition(items, 0);
};

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const totalBelanjaan = (items) => {
  return displayListWithCondition(items, 1);
};

// ! JANGAN DIMODIFIKASI
const main = () => {
  console.log("Selamat datang customer");
  console.log("Belanjaan Anda adalah:");
  console.log(listBelanjaan?.(dataBelanjaan)?.join("\n"));
  console.log(
    "\nTotal Belanjaan Anda adalah Rp. " + totalBelanjaan?.(dataBelanjaan)
  );
};

main();

module.exports = {
  dataBelanjaan,
  listBelanjaan,
  totalBelanjaan,
};

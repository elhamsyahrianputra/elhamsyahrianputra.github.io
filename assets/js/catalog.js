let daftarCatalaog = [
  {
    namaBarang  : "Kertas",
    harga       : "1.000/Kg",
    minJual     : "1 Kg"
  },
  {
    namaBarang  : "Botol Plastik",
    harga       : "1.000/Kg",
    minJual     : "1 Kg"
  },
  {
    namaBarang  : "Gelas",
    harga       : "1.000/Kg",
    minJual     : "1 Kg"
  },
  {
    namaBarang  : "Botol Kaca",
    harga       : "100/Botol",
    minJual     : "10 Botol"
  },
  {
    namaBarang  : "Kardus",
    harga       : "2.000/Kg",
    minJual     : "1 Kg"
  },
  {
    namaBarang  : "Piring Telur",
    harga       : "100/Biji",
    minJual     : "10 Biji"
  },
  {
    namaBarang  : "Kaleng Aluminium",
    harga       : "11.000/Kg",
    minJual     : "1 Kg"
  },
  {
    namaBarang  : "Kaleng Seng",
    harga       : "1.000/Biji",
    minJual     : "5 Biji"
  },
  {
    namaBarang  : "Refill Minyak",
    harga       : "500/Kg",
    minJual     : "2 Kg"
  },
  {
    namaBarang  : "Jerigen 5 Liter",
    harga       : "800/Biji",
    minJual     : "10 Biji"
  },
];

function createCatalog(index, namaBarang, hargaBarang, minJual) {
  let colSize = [
    'col-4',
    'col-7',
    'col-1'
  ];

  let row = document.createElement('div');
  row.setAttribute('class', 'row mb-3 d-flex align-items-center border-primary-3');

  let col_Image = document.createElement('div');
  col_Image.setAttribute('class', colSize[0]);
  let image = document.createElement('img');
  // image.setAttribute('src', 'assets/images/catalog/catalog'+ index +'.png');
  image.setAttribute('src', 'assets/images/catalog/wide_catalog'+ index +'.jpg');
  image.setAttribute('onclick', 'openImage();currentImage('+ index +')');
  col_Image.appendChild(image);

  let col_Details = document.createElement('div');
  col_Details.setAttribute('class', colSize[1]);
  let nama = document.createElement('h3');
  let namaNama = document.createTextNode(namaBarang)
  nama.appendChild(namaNama);
  let harga = document.createElement('p');
  harga.appendChild(document.createTextNode('Harga : Rp.'+ hargaBarang));
  let min = document.createElement('p');
  min.appendChild(document.createTextNode('Min. '+ minJual));
  col_Details.appendChild(nama);
  col_Details.appendChild(harga);
  col_Details.appendChild(min);

  let col_Action = document.createElement('div');
  col_Action.setAttribute('class',colSize[2]);
  let action = document.createElement('i');
  action.setAttribute('class', 'bi bi-zoom-in');
  action.setAttribute('onclick', 'openImage();currentImage('+ index +')');
  col_Action.appendChild(action);

  row.appendChild(col_Image);
  row.appendChild(col_Details);
  row.appendChild(col_Action);

  document.querySelector('.catalog-content .container').appendChild(row);
};

daftarCatalaog.forEach(function(item, index) {
  createCatalog(index+1, item.namaBarang, item.harga, item.minJual);
});

document.querySelector('.catalog-content .container div:nth-child(1)').classList.remove('border-primary-3');


// ---------- Catalog Gallery ----------


function createGalery(index) {
  let div = document.createElement('div');
  div.setAttribute('class', 'myImage');

  let image = document.createElement('img');
  image.setAttribute('src', 'assets/images/catalog/wide_catalog'+ index +'.jpg')
  div.appendChild(image);

  document.querySelector('.galery .galery-content').appendChild(div);
}

daftarCatalaog.forEach(function(item, index) {
  createGalery(index+1);
});
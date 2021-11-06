// Contact
function buttonLink(){
  document.execCommand("copy");
}

  // Contact Desktop
document.querySelector('#whatsapp-button').addEventListener("copy", function(event) {
event.preventDefault();
if (event.clipboardData) {
  event.clipboardData.setData("text/plain", "+6285156190589");
  console.log(event.clipboardData.getData("text"))
}
});

document.querySelector('#instagram-button').addEventListener("click", function() {
    window.location = "https://instagram.com/ompul_official"
});


document.querySelector('#email-button').addEventListener("copy", function(event) {
event.preventDefault();
if (event.clipboardData) {
  event.clipboardData.setData("text/plain", "ompengempul@gmail.com");
  console.log(event.clipboardData.getData("text"))
}
});


  // Contact Mobile
document.querySelector('#whatsapp-button-mobile').addEventListener("copy", function(event) {
event.preventDefault();
if (event.clipboardData) {
  event.clipboardData.setData("text/plain", "+6285156190589");
  console.log(event.clipboardData.getData("text"))
}
});


document.getElementById("instagram-button-mobile").href="https://instagram.com/ompul_official";
    

document.querySelector('#email-button-mobile').addEventListener("copy", function(event) {
event.preventDefault();
if (event.clipboardData) {
  event.clipboardData.setData("text/plain", "ompengempul@gmail.com");
  console.log(event.clipboardData.getData("text"))
}
});

// Modal Form
kirim = document.getElementById('kirim-form');


kirim.addEventListener('click', function() {
    var nama = document.getElementById('nama').value;
    var alamat = document.getElementById("alamat").value;

    var jenis = document.getElementsByClassName('jenissampah');
    var arr = "";

    for (var i = 0; i < jenis.length; i++) {
        if (jenis[i].checked) {
            arr = arr + jenis[i].value + ", ";
        }  
    }

    sesi = document.getElementById('sesi').value;
    catatan = document.getElementById('catatan').value

    window.location = "https://api.whatsapp.com/send/?phone=6281346651603&text=-------*" + modalTitle + "*-------%0A" + "%0A*Nama%20Lengkap*%20%3A%20" + nama + "%0A*Alamat*%20%3A%20" + alamat + "%0A*Jenis%20Sampah*%20%3A%20"+ arr + "%0A*Sesi%20Pengambilan*%20%3A%20" + sesi + "%0A*Catatan*%20%3A%20" + catatan + "%0A%0A*Mohon sertakan juga gambar dari barang yang ingin anda jual";

});

// Alternate
// https://api.whatsapp.com/send/?phone=6281346651603&text=-------%2AANTAR+JEMPUT%2A-------%0A%0A%2ANama+Lengkap%2A+%3A+%0A%2AAlamat%2A+%3A+%0A%2AJenis+Sampah%2A+%3A+%0A%2ASesi+Pengambilan%2A+%3A+Pilih+Sesi%0A%2ACatatan%2A+%3A+%0A%0A%2AMohon+sertakan+juga+gambar+dari+barang+yang+ingin+anda+jual&app_absent=0

// Catalog

  // Open the Modal
function openImage() {
  document.getElementById("listImage").style.display = "block";
}

  // Close the Modal
function closeImage() {
  document.getElementById("listImage").style.display = "none";
}

  // Thumbnail image controls
function currentImage(n) {
  showImage(slideIndex = n);
}

function showImage(n) {
  var i;
  var image = document.getElementsByClassName("myImage");
  if (n > image.length) {slideIndex = 1}
  if (n < 1) {slideIndex = image.length}
  for (i = 0; i < image.length; i++) {
    image[i].style.display = "none";
  }
  image[slideIndex-1].style.display = "block";
}

document.querySelector('.modal-title').innerHTML = modalTitle;

// Özel alert gösterme fonksiyonu
function showCustomAlert(mesaj, baslik = "! Bilgilendirme") {
    document.getElementById("alertMessage").innerText = mesaj;
    document.querySelector(".alert-title").innerText = baslik;
    document.getElementById("customAlert").style.display = "flex";
  }
  
  // Alert kapatma fonksiyonu
  function closeCustomAlert() {
    document.getElementById("customAlert").style.display = "none";
  }

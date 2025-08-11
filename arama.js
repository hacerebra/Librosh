 // Tanımlar
 const aramaDiv = document.getElementById("aramaBarAnimasyon");
 const inputBox = document.getElementById("searchInput");
 window.kitaplarContainer = document.querySelector(".kitaplar-container");

 // Arama animasyonu
 const animasyon = lottie.loadAnimation({
   container: aramaDiv,
   renderer: 'svg',
   loop: false,
   autoplay: true,
   path: 'assets/gif/Search.json'
 });

 // Arama kutusuna tıklanınca aktifleşsin
 aramaDiv.addEventListener('click', () => {
   aramaDiv.style.display = 'none';
   inputBox.classList.add('active');
   inputBox.removeAttribute('readonly');
   inputBox.focus();
   if (inputBox.value.trim().length === 0) {
     sabitKitaplariGoster(); // tüm kitaplar
   }
 });

 // Arama kutusuna yazıldığında filtrele
 inputBox.addEventListener('input', () => {
   const aranacak = inputBox.value.trim().toLowerCase();
   if (aranacak.length > 0) {
     const bulundu = kitaplardaAra(aranacak);
     if (!bulundu) {
       // Arama sonucunda eşleşme bulunamadıysa API'den getir
       kitaplariGetir(aranacak, mevcutKategori);
     }
   } else {
     sabitKitaplariGoster();
     aramaDiv.style.display = 'block';
     inputBox.classList.remove('active');
     inputBox.setAttribute('readonly', true);
   }
 });

 // Mevcut kitap kartları içinde arama yap
 function kitaplardaAra(aranan) {
   const kitapKartlari = kitaplarContainer.querySelectorAll('.kitap-karti');
   let eşleşmeVar = false;

   kitapKartlari.forEach(kart => {
     const baslik = kart.querySelector('.kitap-baslik')?.textContent?.toLowerCase() || "";
     const yazar = kart.querySelector('.kitap-yazar')?.textContent?.toLowerCase() || "";

     if (baslik.includes(aranan) || yazar.includes(aranan)) {
       kart.style.display = 'block';
       eşleşmeVar = true;
       
     } else {
       kart.style.display = 'none';
     }
   });

   return eşleşmeVar;
 }
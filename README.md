# 📚 Librosh — Kitap Yönetim Uygulaması
HTML, CSS ve JavaScript kullanarak geliştirilmiş interaktif bir kitap yönetim web uygulaması.

---

## 🚀 Özellikler
- Kullanıcı kayıt ve giriş sistemi
- Kitap listesi görüntüleme ve kategorilere göre filtreleme
- Kitap kartlarına tıklanarak ilgili kitabın detay sayfasına erişme
- Kitap arama çubuğu
- Favorilere kitap ekleme ve yönetme
- Kitaplığa kitap ekleme ve yönetme
- Kitap detay sayfası
- Profil düzenleme sayfası
- Responsive ve modern tasarım

## 🔔 Bildirim Sistemi
- Uygulama, kullanıcılara güncel duyurular ve hatırlatmalar için bir bildirim paneli sunar.
- Bildirimler, her kullanıcıya özel olarak **localStorage**'da saklanır ve okunma durumu takip edilir.
- Kullanıcılar bildirim panelini açarak bildirimleri görüntüleyebilir, tek tek okuyabilir veya silebilir.
- Tüm bildirimleri “okundu” olarak işaretleme ve bildirimleri topluca temizleme seçenekleri vardır.
- Günlük otomatik bildirimler rastgele tetiklenir ve kullanıcının tercihlerine göre aktif ya da pasif hale getirilebilir.
- Okunmayan bildirim sayısı, bildirim simgesindeki rozet (badge) ile gösterilir.

## 📚 Kitaplık ve Favoriler
- **Kitaplık** sayfasında, kullanıcının eklediği tüm kitaplar listelenir.
  - Kitaplar yerel depolamada (`localStorage`) kullanıcı bazında saklanır.
  - Eğer kitaplıkta kitap yoksa, kullanıcıya yönlendirici ve bilgilendirici bir boş ekran gösterilir.
  - Kitap kartlarına tıklanarak ilgili kitabın detay sayfasına erişilebilir.

- **Favoriler** sayfasında, kullanıcı favori olarak işaretlediği kitapları görebilir.
  - Favori kitaplar da kullanıcıya özel olarak `localStorage`'da tutulur.
  - Favoriler boşsa, kullanıcıya keşfetmesi için bilgilendirici bir mesaj gösterilir.
  - Kitap kartlarına tıklanarak ilgili kitabın detay sayfasına erişilebilir.
- Her iki sayfada da arama kutusu, bildirim paneli ve modern kullanıcı arayüzü bulunur.

## 📖 Kitap Detay Sayfası

- Kullanıcılar kitap detay sayfasında seçilen kitabın tüm bilgilerini görebilirler:
  - Kitap adı, yazar, kategori, yayınevi, yayın yılı, sayfa sayısı ve kapak görseli.
  - Kitap hakkında açıklama bölümü bulunur.

- **Yorumlar ve Puanlama (Rating) Sistemi:**
  - Kullanıcılar kitap için yorum yapabilir ve 1-5 arası yıldız ile puan verebilir.
  - Daha önce yorum yapmış kullanıcılar yorumlarını güncelleyebilir veya silebilir.
  - Yorumlarda kullanıcı adı ve profil fotoğrafı gösterilir.
  - Kitap için verilen tüm yorumların ortalama puanı sayfanın üst kısmında yıldızlarla gösterilir.
  - Yorumlar, yerel depolama (`localStorage`) üzerinde kullanıcı ve kitap bazında saklanır.
  - Kullanıcı yorum ekleme kutusunu açıp kapatabilir, yorum yapmadan önce yıldız seçimi yapması gerekmektedir.
  - Kullanıcılar yorumlarına düzenleme ve silme işlemleri uygulayabilir.
  
- Sayfa tasarımı kullanıcı dostu ve interaktiftir, modern ikonlar ve animasyonlar kullanılır.

---

## 📂 Proje Dosya Yapısı

```
├── index.html
├── favoriler.html
├── kategoriler.html
├── kitap-detay.html
├── kitaplar.html
├── kitaplık.html
├── kullanıcı-giris.html
├── kullanıcı-home.html
├── kullanıcı-kayit.html
├── profil.html
├── profile-edit.html
├── sifre-hatirlat.html
├── style.css
├── script.js
├── alert.js
├── arama.js
├── bildirim.js
├── slider.js
├── assets/
│ ├── gif/
│ ├── icons/
│ ├── images/
│ └── screenshots/
└── README.md
```
---

## 🌐 Canlı Demo
Projeyi şu linkten canlı olarak inceleyebilirsin:  
[📎 Projeyi Görüntüle](https://hacerebra.github.io/Librosh/)

---

## ⚙️ Kurulum
1. Depoyu bilgisayarınıza klonlayın:
```bash
git clone https://github.com/hacerebra/Librosh.git ```

2. Proje klasörüne girin ve index.html dosyasını bir web tarayıcısında açın.

<img width="1588" height="1500" alt="Mockup 2" src="https://github.com/user-attachments/assets/1943cd80-54e8-427a-a60e-1e7097adbecd" />
<img width="1588" height="1500" alt="Mockup 4" src="https://github.com/user-attachments/assets/c26b0275-e40b-4e20-b06c-e380cdf8b017" />
<img width="1588" height="1500" alt="Mockup Scene 4" src="https://github.com/user-attachments/assets/6970b578-35e6-49ec-a543-c09962dabfcf" />
<img width="1588" height="1500" alt="Mockup 4" src="https://github.com/user-attachments/assets/93171ce1-a1aa-4efa-9d74-f00fe04675e3" />

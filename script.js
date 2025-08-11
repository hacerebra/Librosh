const categoryButtons = document.querySelectorAll('.category-btn');
const kitaplarContainer = document.querySelector(".kitaplar-container");

let mevcutKategori = "Tümü";

categoryButtons.forEach(button => {
  button.addEventListener('click', () => {
    categoryButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    mevcutKategori = button.textContent.trim();
    if (inputBox.value.trim().length > 0) {
      kitaplariGetir(inputBox.value.trim(), mevcutKategori);
    } else {
      sabitKitaplariGoster();
    }
  });
});

window.addEventListener('DOMContentLoaded', () => {
  sabitKitaplariGoster();
});

const sabitKitaplar = [
  {
    title: "Kürk Mantolu Madonna",
    author: "Sabahattin Ali",
    coverUrl: "https://covers.openlibrary.org/b/id/13315465-M.jpg",
    subject: ["fiction", "turkish literature", "classic literature"],
    category: "Roman",
    year: "2022",
    publisher: "Yapı Kredi Yayınları",
    pages: "160",
    description:"Sabahattin Ali, başyapıtı Kürk Mantolu Madonna'da, geçmişin günlüklerinden dirilerek günümüze uzanan ölümsüz bir aşk öyküsü anlatır. Kendini bu hayatta yalnız kabul eden bir adamın sergide gördüğü bir portreyle başlayan aşkı, tutkulu bir arayışa dönüşerek hayatında silinmez bir iz bırakacaktır."
  },
  {
    title: "Ben Sana Mecburum",
    author: "Attilâ İlhan",
    coverUrl: "https://covers.openlibrary.org/b/id/7352117-M.jpg",
    subject: ["poetry", "turkish poetry"],
    category: "Şiir Kitabı",
    year: "2003",
    publisher: "Türkiye İş Bankası Kültür Yayınları",
    pages: "159",
    description:"Şiirin ana teması, karşılıksız sevgiliye duyulan aşk ve bunun getirdiği yalnızlık duygusudur. Şair, sevdiği kişiye duyduğu derin bağlılığını ve mecburiyet hissini anlatırken, aynı zamanda onun yokluğunda hissettiği yalnızlığı da dile getirmektedir."
  },
  {
    title: "Uçan Sınıf",
    author: "Erich Kästner",
    coverUrl: "https://covers.openlibrary.org/b/id/12320459-M.jpg",
    subject: ["children", "juvenile fiction", "humor", "fiction"],
    category: "Çocuk Kitabı",
    year: "1997",
    publisher: "Can Çocuk Yayınları",
    pages: "191",
    description:"Alman çocuk edebiyatında çığır açıcı yazarlarından biri olarak nitelendirilen Erich Kästner'in ilk olarak 1933'te yayımlanan kitabı Uçan Sınıf, dayanışma ve arkadaşlığın gücüyle yaşamın zorluklarını alt eden çocukların unutulmaz hikâyesini konu alıyor."
  },
  {
    title: "Bir Bilim Adamının Romanı",
    author: "Oğuz Atay",
    coverUrl: "https://covers.openlibrary.org/b/id/12280356-M.jpg",
    subject: ["fiction", "turkish literature", "biographical fiction"],
    category: "Roman",
    year: "1987",
    publisher: "İletişim Yayınları",
    pages: "280",
    description:"Oğuz Ataı'n kendine özgü üslûbu ve kurgusuyla, kendi hocası da olan Prof. Mustafa Inan'ı anlatışı. Atay'ın hedefi, bir halk çocuğunun uluslararası ün sahibi bir bilim adamı oluşunun zorlu macerasını sergilemek."
  },
  {
    title: "Sefiller",
    author: "Victor Hugo",
    coverUrl: "https://covers.openlibrary.org/b/id/12112352-M.jpg",
    subject: ["fiction", "historical fiction", "classic literature"],
    category: "Roman",
    year: "2020",
    publisher: "Karatay Yayınları",
    pages: "432",
    description:"Victor Hugo'nun 1862 tarihli başyapıtı Sefiller, ailesine ekmek götürebilmek için hırsızlık yapan ve bu yüzden kürek mahkûmiyetine çarptırılan bir adamın hikâyesi. Aldığı ağır cezanın bedelini ömrü boyunca ödeyen Jean Valjean'ı merkezine alan roman, yoksulluğu, toplumsal adaleti ve dayanışmayı anlatıyor."
  },
  {
    title: "Simyacı",
    author: "Paulo Coelho",
    coverUrl: "https://covers.openlibrary.org/b/id/12296155-M.jpg",
    subject: ["fiction", "philosophy", "spiritual fiction"],
    category: "Roman",
    year: "2016",
    publisher: "Can Yayınları",
    pages: "184",
    description:"Simyacı, İspanya'dan kalkıp Mısır piramitlerinin eteklerinde hazinesini aramaya giden Endülüslü çoban Santiago'nun masalsı yaşamının öyküsü. "
  },
  {
    title: "Saatleri Ayarlama Enstitüsü",
    author: "Ahmet Hamdi Tanpınar",
    coverUrl: "https://covers.openlibrary.org/b/id/12354821-M.jpg",
    subject: ["fiction", "satire", "modern turkish literature"],
    category: "Roman",
    year: "2016",
    publisher: "Dergah Yayınları",
    pages: "384",
    description:"Saatleri Ayarlama Enstitüsü, Türkiye'nin modernizme geçiş sürecinin ve bu süreçte yaşanan toplumsal sorunların anlatıldığı bir eserdir. Romanda iki uygarlık arasında bocalayan toplumun hatalı tutumları ve davranışları alaycı bir şekilde eleştirilmektedir."
  },
  {
    title: "Tutunamayanlar",
    author: "Oğuz Atay",
    coverUrl: "https://covers.openlibrary.org/b/id/14857564-M.jpg",
    subject: ["fiction", "postmodern literature", "turkish literature"],
    category: "Roman",
    year: "1972",
    publisher: "Sinan Yayınları",
    pages: "671",
    description:"Tutunamayanlar adlı romanı Türk aydınının kimlik arayışını ve bu arayışın toplum ile etkileşimini anlatır. Atay'ın eserinde 1960'lı yılların başında orta sınıfın, gelenek ile çağdaşlaşma arasında sıkışmışlığının ruh hali öyküleştirilir."
  },
  {
    title: "Memleketimden İnsan Manzaraları",
    author: "Nâzım Hikmet",
    coverUrl: "https://covers.openlibrary.org/b/id/14994023-M.jpg",
    subject: ["poetry", "turkish poetry", "political poetry"],
    category: "Şiir Kitabı",
    year: "2007",
    publisher: "Yapi Kredi Yayınları",
    pages: "537",
    description:"Dünya Savaşı'na kadar olan dönemde Anadolu'da yaşamış sıradan insanların öykülerini okuyucuya sunar. Türkiye'nin 1920-1940 yılları arasındaki toplumsal tarihi, Ulusal Bağımsızlık Savaşı'nı da içerecek biçimde verilirken bir yandan da II. Dünya Savaşı'nda Nazizm'in yenilgisi değişik yönleriyle ele alınıp yansıtılır."
  },
  {
    title: "İstanbul: Hatıralar ve Şehir",
    author: "Orhan Pamuk",
    coverUrl: "https://covers.openlibrary.org/b/id/12319390-M.jpg",
    subject: ["memoir", "turkish literature", "city memoir"],
    category: "Roman",
    year: "2006",
    publisher: " İletisim Yayınları",
    pages: "360",
    description:"Kitapta Pamuk çocukluğundan, romancı olmaya karar verdiği 22 yaşına kadarki dönemi anlatır. Anılarında İstanbul'daki hayatını kaleme alan yazar, özellikle Türkiye'yi sarsan geniş kapsamlı kültürel dönüşüme, modernlik ile geçmiş arasındaki mücadeleye odaklanır."
  },
  {
    title: "Küçük Prens",
    author: "Antoine de Saint-Exupéry",
    coverUrl: "https://covers.openlibrary.org/b/id/12352505-M.jpg",
    subject: ["children", "juvenile fiction", "philosophy", "fiction"],
    category: "Çocuk Kitabı",
    year: "2015",
    publisher: "Hece Yayinlari",
    pages: "93",
    description:"Küçük Prens kitabında bir çocuğun gözünden büyüklerin dünyası ele alınmaktadır. Eser toplamda yirmi yedi bölümden oluşmaktadır. Hikaye Sahra Çölü'ne düşen bir pilotun Küçük Prens ile karşılaşması ile başlamaktadır. "
  },
  {
    title: "Bir Kadının Yaşamından 24 Saat",
    author: "Stefan Zweig",
    coverUrl: "https://covers.openlibrary.org/b/id/10850334-M.jpg",
    subject: ["fiction", "psychological fiction", "novella"],
    category: "Roman",
    year: "2020",
    publisher: "Pay Yayınları",
    pages: "96",
    description:"Bir Kadının Yaşamından 24 Saat, duygularının peşinden korkusuzca giden bir kadının apansız yön değiştiren yaşamını konu alıyor. "
  },
  {
    title: "Kuyucaklı Yusuf",
    author: "Sabahattin Ali",
    coverUrl: "https://covers.openlibrary.org/b/id/12230744-M.jpg",
    subject: ["fiction", "turkish literature", "social novel"],
    category: "Roman",
    year: "2019",
    publisher: "Optimum Kitap",
    pages: "256",
    description:"Kuyucaklı Yusuf konusu itibariyle ailesinin katledilmesiyle sahipsiz kalan dokuz yaşındaki Yusuf'un olayı soruşturmak için Kuyucak'a gelen Nazilli Kaymakamı Selahattin Bey tarafından evlatlık alınması ve çocuğun daha sonraki hayatı anlatılmaktadır."
  },
  {
    title: "Masumiyet Müzesi",
    author: "Orhan Pamuk",
    coverUrl: "https://covers.openlibrary.org/b/id/12273953-M.jpg",
    subject: ["fiction", "turkish literature", "romance", "postmodern literature"],
    category: "Roman",
    year: "2016",
    publisher: "Yapı Kredi Yayınları",
    pages: "465",
    description:"1975 yılında başlayan hikâye, tekstil zengini Basmacı ailesinin okumuş 30 yaşındaki oğulları Kemal ile uzak akrabaları, yoksul Keskin ailesinin 18 yaşındaki güzel kızı, tezgahtarlık yapan Füsun arasındaki aşkı anlatmaktadır."
  },
  {
    title: "Kırmızı Saçlı Kadın",
    author: "Orhan Pamuk",
    coverUrl: "https://covers.openlibrary.org/b/id/10864394-M.jpg",
    subject: ["fiction", "turkish literature", "romance"],
    category: "Roman",
    year: "2016",
    publisher: "Yapı Kredi Yayınları",
    pages: "204",
    description:"Orahan Pamuk “Kırmızı Saçlı Kadın”da bizi otuz yıl önce İstanbul yakınlarındaki bir kasabada liseli bir gencin yaşadığı sarsıcı bir aşk hikâyesiyle, büyük bir insani suçun peşinden sürüklüyor."
  },
  {
    title: "Çalıkuşu",
    author: "Reşat Nuri Güntekin",
    coverUrl: "https://covers.openlibrary.org/b/id/10441700-M.jpg",
    subject: ["fiction", "classic turkish literature", "romance"],
    category: "Roman",
    year: "2010",
    publisher: "İnkılap Kitabevi",
    pages: "117",
    description:"Romanda, İstanbul köklü bir ailenin kızı olan çocuk ruhlu Feride'nin çok sevdiği nişanlısı tarafından ihanete uğramasıyla kendini öğretmenlik mesleğine adaması ve hayatını kazanabilmek için Anadolu'da şehir şehir dolaşması anlatılır."
  },
  {
    title: "Ay Işığı Sokağı",
    author: "Stefan Zweig",
    coverUrl: "https://covers.openlibrary.org/b/id/12244351-M.jpg",
    subject: ["fiction", "historical fiction", "novella"],
    category: "Roman",
    year: "2017",
    publisher: "Karbon Kitaplar",
    pages: "77",
    description:"Kıyıya geç yanaşan gemi yüzünden trenini kaçıran bir yabancı, hiç bilmediği küçük bir Fransız liman kentinin ay ışığıyla aydınlanan sokaklarını keşfetmeye girişir. Kaptanların, mürettebatın bir gecelik de olsa yolunun düştüğü bu kent tüm günahlara gebedir. Burada tüm ihtiyaçların bir çözümü vardır."
  },
  {
    title: "Don Kişot",
    author: "Miguel de Cervantes Saavedra",
    coverUrl: "https://covers.openlibrary.org/b/id/12310936-M.jpg",
    subject: ["fiction", "classic literature", "satire", "adventure fiction"],
    category: "Roman",
    year: "2015",
    publisher: "Altın Kitaplar",
    pages: "",
    description:"Romanın konusu, La Mancha'da yaşayan ve alt tabaka soylu olan Alonso Quijano'nun maceralarına odaklanır. Quijano, okuduğu şövalye romanslarına kendini öyle kaptırır ki aklını yitirir ve Don Kişot de la Mancha adını alarak gezgin bir şövalye olmaya karar verir."
  },
  {
    title: "Yeraltından Notlar",
    author: "Fyodor Dostoyevski",
    coverUrl: "https://covers.openlibrary.org/b/id/12203639-M.jpg",
    subject: ["fiction", "classic literature", "psychological fiction"],
    category: "Roman",
    year: "2010",
    publisher: "Anonim Yayinlari",
    pages: "",
    description:"Sibirya sürgününden sonra yazdığı romanlarla tekrar eski ününe kavuştu. 1864'de Vremya dergisinde yayımladığı Yeraltından Notlar gerçek dünyadan kendini soyutlamış bir kişinin iç çatışmalarını ve hezeyanlarını konu alır."
  },
  {
    title: "Sineklerin Tanrısı",
    author: "William Golding",
    coverUrl: "https://covers.openlibrary.org/b/id/12360190-M.jpg",
    subject: ["fiction", "allegorical fiction", "classic literature"],
    category: "Roman",
    year: "2006",
    publisher: "İs Bankasi Kültür Yayinlari",
    pages: "262",
    description:"Kitap, II. Dünya Savaşı'nda yaşanan nükleer atom bombası etkisinden korunmak için Britanyalı bir grup çocuğun, uçak ile taşınmasını konu alarak başlıyor. Söz konusu uçak varmak istediği noktaya gidemeden, ıssız bir adaya düşünce hayatta kalan çocukların yaşam mücadelesi başlamış oluyor."
  },
  {
    title: "Gazap Üzümleri",
    author: "John Steinbeck",
    coverUrl: "https://covers.openlibrary.org/b/id/12295233-M.jpg",
    subject: ["fiction", "historical fiction", "social novel"],
    category: "Roman",
    year: "2021",
    publisher: "İletisim Yayınları",
    pages: "",
    description:"Bu romanında yazar, Amerika'da 1930'lu yılların ekonomik kriz dönemlerini, insanlığın dramını etkileyici bir dille anlatmaktadır. Joad ailesinin özelinden, genele yansıyan bakış açısıyla emekçi insanları konu alan kitap, dünyanın önde gelen ve en çok okunan klasiklerinden biridir."
  },
  {
    title: "Uğultulu Tepeler",
    author: "Emily Brontë",
    coverUrl: "https://covers.openlibrary.org/b/id/12217937-M.jpg",
    subject: ["fiction", "classic literature", "romance", "gothic fiction"],
    category: "Roman",
    year: "2018",
    publisher: "Türkiye İş Bankasi Kültür Yayınları",
    pages: "96",
    description:"19. yüzyılın başlarında İngiltere'de yaşamış zengin Earnshaw ailesinin kızı Catherine ile ailenin evlatlığı Heathcliff arasındaki sancılı aşkı şiirsel bir dille anlatıyor."
  },
  {
    title: "1984",
    author: "George Orwell",
    coverUrl: "https://covers.openlibrary.org/b/id/13315469-M.jpg",
    subject: ["fiction", "dystopian fiction", "political fiction", "classic literature"],
    category: "Roman",
    year: "2019",
    publisher: "Can Yayınları",
    pages: "352",
    description:"Romanın hikâyesi distopik bir dünyada geçer. Distopya romanlarının en ünlülerindendir. Özellikle kitapta tanımlanan Big Brother (Büyük Birader) kavramı günümüzde de sıklıkla kullanılmaktadır."
  },
  {
    title: "Yüzyıllık Yalnızlık",
    author: "Gabriel García Márquez",
    coverUrl: "https://covers.openlibrary.org/b/id/12273258-M.jpg",
    subject: ["fiction", "magical realism", "classic literature"],
    category: "Roman",
    year: "2016",
    publisher: "Can Yayınları",
    pages: "464",
    description:"Yazar, çocukluğunun geçtiği Aracataca kasabasını Macondo adıyla fantastik bir kurguyla sunmuştur ve amacını çocukluk günlerini sanatsal bir dille ardında bırakmak olarak açıklamıştır."
  },
  {
    title: "Suç ve Ceza",
    author: "Fyodor Dostoyevski",
    coverUrl: "https://covers.openlibrary.org/b/id/12204659-M.jpg",
    subject: ["fiction", "classic literature", "psychological fiction", "philosophical fiction"],
    category: "Roman",
    year: "2020",
    publisher: "Karatay Yayınlariı",
    pages: "392",
    description:"Roman, parası için bir tefeci kadını öldürmeyi tasarlayan, Saint Petersburg'da yaşayan fakir bir öğrenci olan Rodion Romanoviç Raskolnikov'un manevi ıstırabı, pişmanlığı ve ahlaki ikilemlerine odaklanır."
  },
  {
    title: "Hayvan Çiftliği",
    author: "George Orwell",
    coverUrl: "https://covers.openlibrary.org/b/id/12301536-M.jpg",
    subject: ["fiction", "satire", "political fiction", "allegorical fiction"],
    category: "Roman",
    year: "2021",
    publisher: "Remzi Kitabevi",
    pages: "128",
    description:"Roman, Stalinizmin eleştirisidir. Kendisini her türlü totalitarizme karşı bir demokratik sosyalist olarak tanımlayan Orwell bu romanında SSCB'nin kuruluşundan itibaren meydana gelen önemli olayları kara mizah yoluyla ve mecazi bir dille anlatır."
  },
  {
    title: "Savaş ve Barış",
    author: "Lev Tolstoy",
    coverUrl: "https://covers.openlibrary.org/b/id/10852765-M.jpg",
    subject: ["fiction", "classic literature", "historical fiction", "philosophical fiction"],
    category: "Roman",
    year: "2020",
    publisher: "Koloni Çocuk",
    pages: "416",
    description:"Savaş ve Barış Rusya'nın Fransa tarafından istilası döneminde yaşanmış olayları ve Napoleon döneminin Rusya'da Çar toplumuna etkisini, bu etkinin doğurduğu sonuçları beş asil aileden örnekler vererek tarif etmektedir. "
  },
  {
    title: "Dönüşüm",
    author: "Franz Kafka",
    coverUrl: "https://covers.openlibrary.org/b/id/12360820-M.jpg",
    subject: ["fiction", "absurdist fiction", "psychological fiction", "classic literature"],
    category: "Roman",
    year: "2010",
    publisher: "Yurt Kitap Yayın",
    pages: "80",
    description:"İlk olarak 1915 yılında yayımlanmıştır. Kafka'nın en popüler eseri sayılabilir. Öykü, Gregor Samsa'nın bir sabah kendini dev bir böceğe dönüşmüş bulmasıyla başlar ve hayatındaki değişiklikleri anlatarak devam eder."
  },
  {
    title: "Görünmez Adam",
    author: "H. G. Wells",
    coverUrl: "https://covers.openlibrary.org/b/id/12218151-M.jpg",
    subject: ["fiction", "social novel", "classic literature"],
    category: "Roman",
    year: "2019",
    publisher: "İş Bankası Kültür Yayınları",
    pages: "120",
    description:"Görünmez Adam, (özgün adıyla The Invisible Man), H. G. Wells'in 1897 yılında yayınlanan bir bilimkurgu kitabıdır. Kitap pek çok filme uyarlanmıştır. Kurgusuyla olduğu kadar yaptığı eleştiri ve göndermelerle de önemli olan toplumun kendine benzemeyen insanlar karşı olan tepkisini ortaya koyar."
  },
  {
    title: "Charlie’nin Çikolata Fabrikası",
    author: "Roald Dahl",
    coverUrl: "https://covers.openlibrary.org/b/id/13262321-M.jpg",
    subject: ["children", "children's fiction", "fantasy", "adventure"],
    category: "Çocuk Kitabı",
    year: "1989",
    publisher: "Can Yayınları",
    pages: "208",
    description:"Charlie'nin Çikolata Fabrikası (İngilizce: Charlie and the Chocolate Factory), İngiliz yazar Roald Dahl tarafından yazılan 1964 tarihli çocuk kitabı. Hikâye çikolatacı Willy Wonka'nın çikolata fabrikası içinde Küçük Charlie Bucket'ın maceralarını anlatıyor."
  },
  {
    title: "Harry Potter ve Felsefe Taşı",
    author: "J.K. Rowling",
    coverUrl: "https://covers.openlibrary.org/b/id/7984916-M.jpg",
    subject: ["children", "fantasy", "young adult fiction", "adventure"],
    category: "Çocuk Kitabı",
    year: "2001",
    publisher: "YKY",
    pages: "335",
    description:"Harry Potter ve Felsefe Taşı (İngilizce: Harry Potter and the Philosopher's Stone), J. K. Rowling tarafından yazılmış olan ve genç büyücü karakter Harry Potter'ın takdim edildiği Harry Potter serisindeki ilk romandır."
  },
  {
    title: "Bülbülü Öldürmek",
    author: "Harper Lee",
    coverUrl: "https://covers.openlibrary.org/b/id/12302088-M.jpg",
    subject: ["fiction", "classic literature", "social novel"],
    category: "Roman",
    year: "2008",
    publisher: "Altın Kitaplar",
    pages: "",
    description:"Roman, yazarın 1936 yılında, on yaşındayken yaşadığı bir olayı temel almaktadır. Harper Lee, yaşadığı kasabanın civarında yaşanan bu olayın ailesi ve komşuları üzerindeki etkilerini gözlemleyerek eserini oluşturmuştur."
  },
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    coverUrl: "https://covers.openlibrary.org/b/id/8043056-M.jpg",
    subject: ["biography", "technology", "business"],
    category: "Biyografi Kitabı",
    year: "2011",
    publisher: "Random House Mondadori (Debate)",
    pages: "737",
    description:"Steve Jobs, bizzat Steve Jobs'un isteğiyle kaleme alınan ve kendi adını taşıyan biyografisidir. Kitap, Jobs'un talebiyle, eski bir CNN ve TIME yöneticisi olan, Benjamin Franklin ve Albert Einstein'ın çok satan biyografilerinin yazarı Walter Isaacson tarafından yazılmıştır."
  },
  {
    title: "Sevda Sözleri",
    author: "Cemal Süreya",
    coverUrl: "https://covers.openlibrary.org/b/id/12273601-M.jpg",
    subject: ["poetry", "turkish poetry", "love poetry"],
    category: "Şiir Kitabı",
    year: "2017",
    publisher: "Can Yayınları",
    pages: "336",
    description:"Sevda Sözleri, Cemal Süreya'nın 1984'te Uçurumda Açan ile birlikte, 1990'da toplu şiirlerle Can Yayınları tarafından yayımlanan şiir kitabıdır. Kitaptaki şiirler şairin Üvercinka, Beni Öp Sonra Doğur Beni, Sıcak Nal, Göçebe, Güz Bitigi, Uçurumda Açan, Kalanlar adlı şiir kitaplarının bir araya getirilmesiyle oluşmuştur. "
  },
  {
    title: "Frida Kahlo: Bir Yaşam Hikayesi",
    author: "Hayden Herrera",
    coverUrl: "https://covers.openlibrary.org/b/id/15098216-M.jpg",
    subject: ["biography", "art", "women"],
    category: "Biyografi Kitabı",
    year: "2002",
    publisher: "Harper Perennial",
    pages: "528",
    description:"Hayden Herrera kitabında Frida’nın çocukluğundan itibaren bütün hayat hikâyesini anlatmış. Toplam altı bölümden oluşan kitabı okurken insan bir roman kahramanının bütün mahremiyetiyle yazıldığını düşünmeden edemiyor."
  },
  {
    title: "Şeker Portakalı",
    author: "José Mauro de Vasconcelos",
    coverUrl: "https://covers.openlibrary.org/b/id/10950908-M.jpg",
    subject: ["children", "turkish children's literature", "adventure"],
    category: "Çocuk Kitabı",
    year: "2017",
    publisher: "Can Yayınları",
    pages: "200",
    description:"Şeker Portakalı (Portekizce orijinal adı: Meu Pé de Laranja Lima), Brezilyalı yazar José Mauro de Vasconcelos'un tüm dünyayı etkisi altına almayı başaran 1968 tarihli dram ve çocukluk romanıdır."
  }
  
];

function sabitKitaplariGoster() {
  if (!kitaplarContainer) return;
  kitaplarContainer.innerHTML = "";
  let filtreliKitaplar = sabitKitaplar;

  if (mevcutKategori !== "Tümü") {
    const kategoriMap = {
      "Romanlar": ["fiction", "novel", "literature", "historical fiction", "classic literature"],
      "Şiir Kitapları": ["poetry", "turkish poetry"],
      "Biyografi Kitapları": ["biography", "memoir", "city memoir"],
      "Çocuk Kitapları": ["children", "juvenile fiction", "children's stories"]
    };    
    const aranacaklar = kategoriMap[mevcutKategori] || [];
    filtreliKitaplar = filtreliKitaplar.filter(kitap => {
      if (!kitap.subject) return false;
      return aranacaklar.some(kelime =>
        kitap.subject.some(sub => sub.toLowerCase().includes(kelime))
      );
    });
  }

  if (filtreliKitaplar.length === 0) {
    kitaplarContainer.innerHTML = "<p>Bu kategoriye ait kitap bulunamadı.</p>";
    return;
  }

  filtreliKitaplar.forEach(kitap => {
    const kart = document.createElement("div");
    kart.className = "kitap-karti";
    kart.innerHTML = `
      <img src="${kitap.coverUrl}" alt="${kitap.title}">
      <div class="kitap-bilgi">
        <p class="kitap-adi">${kitap.title}</p>
        <p class="yazar-adi">${kitap.author}</p>
      </div>
    `;
  
    // Kart tıklanınca detay sayfasına git
    kart.addEventListener('click', () => {
      // Örnek olarak detay sayfasının adı kitap-detay.html olsun
      const detaySayfasi = 'kitap-detay.html';
      // URL parametreleri ile kitap bilgilerini gönder
      const params = new URLSearchParams({
        title: kitap.title,
        author: kitap.author,
        cover: kitap.coverUrl,
        category: kitap.category,
        publisher: kitap.publisher || '',
        year: kitap.year || '',
        pages: kitap.pages || ''
      });
      window.location.href = `${detaySayfasi}?${params.toString()}`;
    });
  
    kitaplarContainer.appendChild(kart);
  });
  
}

async function kitaplariGetir(arananKelime, kategori = "Tümü") {
  kitaplarContainer.innerHTML = "Yükleniyor...";
  try {
    const res = await fetch(`https://openlibrary.org/search.json?title=${encodeURIComponent(arananKelime)}&language=tur`);
    const data = await res.json();
    let kitaplar = data.docs.slice(0, 20);

    kitaplar = await Promise.all(kitaplar.map(async kitap => {
      try {
        const detayRes = await fetch(`https://openlibrary.org${kitap.key}.json`);
        const detayData = await detayRes.json();
        kitap.subject = detayData.subjects || [];
      } catch (_) {
        kitap.subject = [];
      }
      return kitap;
    }));

    if (kategori !== "Tümü") {
      const kategoriMap = {
        "Romanlar": ["fiction", "novel"],
        "Şiir Kitapları": ["poetry"],
        "Biyografi Kitapları": ["biography"],
        "Çocuk Kitapları": ["children", "childrens"]
      };
      const aranacaklar = kategoriMap[kategori] || [];
      kitaplar = kitaplar.filter(kitap => {
        return aranacaklar.some(anahtar =>
          kitap.subject && kitap.subject.some(s => s.toLowerCase().includes(anahtar))
        );
      });
    }

    kitaplarContainer.innerHTML = "";

    if (kitaplar.length === 0) {
      kitaplarContainer.innerHTML = "<p>Bu kriterlere uygun kitap bulunamadı.</p>";
      return;
    }

    kitaplar.forEach(kitap => {
      const baslik = kitap.title;
      const yazar = kitap.author_name ? kitap.author_name[0] : "Bilinmiyor";
      const kapakId = kitap.cover_i;
      const kapakUrl = kapakId
        ? `https://covers.openlibrary.org/b/id/${kapakId}-M.jpg`
        : "https://via.placeholder.com/120x180?text=No+Image";
      const yayinEvi = kitap.publisher ? kitap.publisher[0] : "Bilinmiyor";
      const yil = kitap.first_publish_year || "Bilinmiyor";
      const sayfaSayisi = kitap.number_of_pages_median || "Bilinmiyor";
      const kategoriListesi = kitap.subject || [];

      const kart = document.createElement("div");
      kart.className = "kitap-karti";
      kart.innerHTML = `
        <img src="${kapakUrl}" alt="${baslik}">
        <div class="kitap-bilgi">
          <p class="kitap-adi">${baslik}</p>
          <p class="yazar-adi">${yazar}</p>
        </div>
      `;

      // ✅ Tıklama ile kitap-detay.html sayfasına yönlendir
      kart.addEventListener("click", () => {
        const params = new URLSearchParams({
          title: baslik,
          author: yazar,
          cover: kapakUrl,
          category: kategoriListesi.join(', '),
          publisher: yayinEvi,
          year: yil,
          pages: sayfaSayisi
        });
        window.location.href = `kitap-detay.html?${params.toString()}`;
      });

      kitaplarContainer.appendChild(kart);
    });
  } catch (err) {
    console.error("API Hatası:", err);
    kitaplarContainer.innerHTML = "<p>Kitaplar yüklenirken bir hata oluştu.</p>";
  }
}

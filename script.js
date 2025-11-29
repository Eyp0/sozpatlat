document.getElementById("sonuc").innerHTML = "Hadi bir söz patlatalım! 🎉";
let secilenKategori = "";

let espriler = [
  { soz: "Neden bilgisayarım çok yavaş? Çünkü Windows açık!", anlam: "Windows işletim sisteminin yavaşlığına gönderme yapan bir espri" },
  { soz: "Matematikçi asla intihar etmez, çünkü her zaman bir çıkış yolu vardır!", anlam: "Matematikçilerin her soruna çözüm bulabileceğini anlatan espri" },
  { soz: "Neden deniz kenarında oturuyorsun? Çünkü kumsalda oturmak zor!", anlam: "Kelime oyunu yapan bir espri" },
  { soz: "Neden tavuklar yumurtadan çıkar? Çünkü dışarıdan girmek zor!", anlam: "Mantıksal bir espri" },
  { soz: "Neden ördekler suda yüzer? Çünkü karada yüzemezler!", anlam: "Açık bir gerçeği komik şekilde ifade eden espri" }
];


let atasozleri = [
  { soz: "Ayağını yorganına göre uzat", anlam: "Gelirine göre harcama yap." },
  { soz: "Damlaya damlaya göl olur", anlam: "Küçük birikimler zamanla büyük olur." },
  { soz: "Sakla samanı, gelir zamanı", anlam: "Her şeyin bir zamanı vardır." },
  { soz: "İşleyen demir ışıldar", anlam: "Çalışan insan başarılı olur." },
  { soz: "Ağaç yaşken eğilir", anlam: "İnsanlar küçükken eğitilmelidir." }
];


let deyimler = [
  { soz: "Gözden düşmek", anlam: "Değerini yitirmek, itibarını kaybetmek." },
  { soz: "Kulak asmamak", anlam: "Önemsememek, dikkate almamak." },
  { soz: "Dil dökmek", anlam: "İkna etmek için çok konuşmak." },
  { soz: "Gözü kara", anlam: "Cesur, korkusuz." },
  { soz: "Eli ağır", anlam: "Yavaş iş yapan." }
];


let romantik = [
  { soz: "Seninle her an özel, her an değerli", anlam: "Birlikte geçirilen her anın değerli olduğunu ifade eder" },
  { soz: "Gözlerin benim için bir dünya", anlam: "Sevgilinin gözlerinin önemini vurgular" },
  { soz: "Kalbinin sesi benim için müzik", anlam: "Sevgilinin kalp atışlarının önemini belirtir" },
  { soz: "Seninle her şey daha güzel", anlam: "Birlikteliğin güzelliğini anlatır" },
  { soz: "Aşkımız sonsuz bir yolculuk", anlam: "Aşkın sürekliliğini ifade eder" }
];


let bilimsel = [
  { soz: "Bilim, gerçeğe giden en kısa yoldur", anlam: "Bilimin gerçeği bulmada en etkili yöntem olduğunu ifade eder" },
  { soz: "Evrenin sırlarını çözmek için bilim en güvenilir rehberdir", anlam: "Bilimin evreni anlamada en güvenilir kaynak olduğunu belirtir" },
  { soz: "Bilim, doğanın dilini anlamanın anahtarıdır", anlam: "Bilimin doğayı anlamada temel araç olduğunu vurgular" },
  { soz: "Her deney, bilimin bir adım ilerlemesidir", anlam: "Deneylerin bilimsel ilerlemedeki önemini anlatır" },
  { soz: "Bilimsel düşünce, önyargıları yıkar", anlam: "Bilimsel yaklaşımın önyargıları ortadan kaldırdığını belirtir" }
];


function kategoriSec(kategori) {
  secilenKategori = kategori;
  if (secilenKategori == "espri") {
    document.getElementById("sonuc").innerHTML = "Espri Zamanı!";
    return;
  }
  else if (secilenKategori == "atasozu") {
    document.getElementById("sonuc").innerHTML = "Atasözü Zamanı!";
    return;
  }
  else if (secilenKategori == "deyim") {
    document.getElementById("sonuc").innerHTML = "Deyim Zamanı!";
    return;
  }
  else if (secilenKategori == "romantik") {
    document.getElementById("sonuc").innerHTML = "Romantik Zamanı!";
    return;
  }
  else if (secilenKategori == "bilimsel") {
    document.getElementById("sonuc").innerHTML = "Bilimsel Zamanı!";
    return;
  }

}


function rastgeleSozGetir() {
  if (secilenKategori == "") {
    alert("Lütfen önce bir kategori seç!");
    return;
  }


  let liste = [];

  if (secilenKategori == "espri") {
    liste = espriler;
  } else if (secilenKategori == "atasozu") {
    liste = atasozleri;
  } else if (secilenKategori == "deyim") {
    liste = deyimler;
  } else if (secilenKategori == "romantik") {
    liste = romantik;
  } else if (secilenKategori == "bilimsel") {
    liste = bilimsel;
  }

  let rastgeleSayi = Math.floor(Math.random() * liste.length);
  let secilen = liste[rastgeleSayi];

  document.getElementById("sonuc").innerHTML = secilen.soz + "<br><br><small>" + secilen.anlam + "</small>";
}



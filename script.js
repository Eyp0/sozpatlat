let sozler = {};
let seciliKategori = null;
let jsonYuklendi = false;
let sonSoz = null;
let patlamaSayisi = 0;

function sonucGoster(mesaj) {
  const sonucAlani = document.getElementById('sonuc');
  sonucAlani.innerHTML = '<div class="sonuc-icerik"><span>' + mesaj + '</span></div>';
}

document.addEventListener('DOMContentLoaded', function() {
  fetch('sozler.json')
    .then(function(response) {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Dosya bulunamadı');
      }
    })
    .then(function(data) {
      sozler = data;
      jsonYuklendi = true;
      sonucGoster('Hadi bir söz patlatalım! 🎉');
    })
    .catch(function(error) {
      sonucGoster('Sözler yüklenirken hata oluştu: ' + error.message);
    });
});

function kategoriSec(kategori) {
  seciliKategori = kategori;
  
  const butonlar = document.querySelectorAll('.kategori-btn');
  for (let i = 0; i < butonlar.length; i++) {
    butonlar[i].classList.remove('active');
  }
  
  event.target.classList.add('active');
  
  const mesajlar = [
    "Harika seçim! 🎯",
    "Bu kategori çok güzel! 🌟",
    "Hadi bakalım ne çıkacak? 🎲",
    "Süper bir seçim! 🚀",
    "Tamam, şimdi patlatıyoruz! 💥"
  ];
  
  const rastgeleSayi = Math.floor(Math.random() * mesajlar.length);
  const secilenMesaj = mesajlar[rastgeleSayi];
  sonucGoster(secilenMesaj);
}

function rastgeleSozGetir() {
  if (jsonYuklendi === false) {
    sonucGoster('Sözler henüz yüklenmedi, lütfen bekleyin...');
    return;
  }
  
  if (seciliKategori === null) {
    sonucGoster('Lütfen önce bir kategori seç!');
    return;
  }
  
  const kategori = sozler[seciliKategori];
  
  if (!kategori || !kategori.sozler || kategori.sozler.length === 0) {
    sonucGoster('Seçilen kategoride söz bulunamadı!');
    return;
  }
  
  const sozListesi = kategori.sozler;
  let rastgeleSoz;
  
  do {
    const rastgeleIndex = Math.floor(Math.random() * sozListesi.length);
    rastgeleSoz = sozListesi[rastgeleIndex];
  } while (rastgeleSoz === sonSoz && sozListesi.length > 1);
  
  sonSoz = rastgeleSoz;
  patlamaSayisi = patlamaSayisi + 1;
  
  let sozAnlami = 'Anlam bulunamadı.';
  if (kategori.anlamlar && kategori.anlamlar[rastgeleSoz]) {
    sozAnlami = kategori.anlamlar[rastgeleSoz];
  }
  
  const emojiler = ['💥', '✨', '🎉', '🌟', '🎊', '💫'];
  const rastgeleEmojiIndex = Math.floor(Math.random() * 6);
  const secilenEmoji = emojiler[rastgeleEmojiIndex];
  
  const htmlIcerik = '<div class="sonuc-icerik">' +
    '<span id="sozMetni">' + rastgeleSoz + ' ' + secilenEmoji + '</span>' +
    '<span id="anlamIkonu" class="anlam-ikonu">?</span>' +
    '<div id="anlamAciklama" class="anlam-aciklama">' + sozAnlami + '</div>' +
    '</div>';
  
  document.getElementById('sonuc').innerHTML = htmlIcerik;
  
  if (patlamaSayisi % 5 === 0) {
    setTimeout(function() {
      const sonucAlani = document.getElementById('sonuc');
      const tebrikMesaji = '<div class="tebrik-mesaji">🎉 Tebrikler! ' + patlamaSayisi + ' söz patlattın! 🎉</div>';
      sonucAlani.innerHTML = sonucAlani.innerHTML + tebrikMesaji;
    }, 1000);
  }
  
  document.getElementById('anlamIkonu').onclick = function() {
    const anlamAlani = document.getElementById('anlamAciklama');
    if (anlamAlani.style.display === 'none') {
      anlamAlani.style.display = 'block';
    } else {
      anlamAlani.style.display = 'none';
    }
  };
}

const ayarlar = {
  TOKEN: "", // ASSAGIYI OKU
  sahip: "BOTUNUZUN SAHİP ID", //Doldurmak Zorunda Değilsiniz!
  prefix: "!", //Bot Prefixi Yazın!
  url: "", //Alınmasını İstediğiniz Özel Discord Sunucu URL'sini Yazın!
  sunucuID: "", //Url'nin Alınacağı Sunucu ID'sini Yazın!
  log: "", //URL Alınır İse Bilgi Verilecek Log Kanal ID Yazın!
  durum: "true", //false=Botu Durdur | true=Botu Başlat Demekdir!
  botHızı: "1000" //1000 = 1 Saniye | 1 = 1 Milisaniye | En Az 50 Milisaniye Yazmanız Önerilir 50MS Altında Proje Discord Apiden Yasaklanır ve Çalşımayı Durdurur!
};

module.exports = ayarlar;

//BOT TOKENINIZI EGER BOT GLITCHDE KALACAK
//ISE .ENV DOSYASINA
//EGER VDS YE KURACAK ISENIZ YUKARIYA 1. SATIRA YAZIN
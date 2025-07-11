# Google Apps Script CORS Hatası Çözüm Rehberi

## Problem
Uygulamanız Google Apps Script'ten veri yüklerken **CORS (Cross-Origin Resource Sharing)** hatası alıyor ve "Veri yüklenirken hata oluştu: İnternet bağlantısı veya CORS sorunu" mesajı görüntüleniyor.

## Neden Oluşur?
CORS hatası, tarayıcının güvenlik politikası nedeniyle farklı domain'lerden veri çekmeyi engellemesi sonucu oluşur. Google Apps Script'in web app olarak doğru şekilde yapılandırılmaması bu hatanın ana sebebidir.

## Çözüm Adımları

### 1. Google Apps Script Projenizi Doğru Şekilde Deploy Edin

1. **Google Apps Script konsolunu açın**: https://script.google.com
2. **Projenizi seçin** veya yeni bir proje oluşturun
3. **Kod dosyanızı** `google-apps-script-example.js` dosyasındaki örnek koda göre güncelleyin
4. **Deploy butona** tıklayın (sağ üst köşede)
5. **"New Deployment"** seçin
6. **Ayarları şu şekilde yapın**:
   - Type: **Web app**
   - Execute as: **Me (your email)**
   - Who has access: **Anyone**
7. **"Deploy"** butonuna tıklayın
8. **Web app URL'sini kopyalayın** (bu URL'yi HTML dosyanızda DATA_URL olarak kullanacaksınız)

### 2. HTML Dosyasında URL'yi Güncelleyin

Yeni aldığınız web app URL'sini HTML dosyanızdaki DATA_URL değişkeninde güncelleyin:

```javascript
const DATA_URL = 'YOUR_NEW_WEB_APP_URL_HERE';
```

### 3. Google Apps Script Kodunu Doğrulayın

Google Apps Script dosyanızda şu fonksiyonların bulunduğundan emin olun:

```javascript
function doGet(e) {
  const output = ContentService.createTextOutput();
  output.setMimeType(ContentService.MimeType.JSON);
  
  // Veri kaynağınızı buraya ekleyin
  const tuitionData = [
    // Ücret verileriniz...
  ];
  
  output.setContent(JSON.stringify(tuitionData));
  return output;
}
```

### 4. Test Etme

1. **Tarayıcıda sayfayı yenileyin**
2. **"🔍 Bağlantıyı Test Et" butonuna** tıklayın
3. **Konsol çıktısını kontrol edin** (F12 > Console)
4. **Hata mesajlarını analiz edin**

## Yaygın Hatalar ve Çözümleri

### Hata: "Failed to fetch"
**Sebep**: Google Apps Script doğru deploy edilmemiş
**Çözüm**: Deploy ayarlarını kontrol edin, "Anyone" erişimi verdiğinizden emin olun

### Hata: "CORS policy blocked"
**Sebep**: Cross-origin isteği engellenmiş
**Çözüm**: Google Apps Script'i web app olarak deploy edin ve doGet() fonksiyonunu kullanın

### Hata: "Invalid JSON"
**Sebep**: Google Apps Script geçersiz JSON döndürüyor
**Çözüm**: ContentService.MimeType.JSON kullandığınızdan emin olun

### Hata: HTTP 403/404
**Sebep**: Yanlış URL veya erişim izni yok
**Çözüm**: Yeni web app URL'sini alın ve "Anyone" erişimi verin

## Test URL'si

Mevcut Google Apps Script URL'niz:
```
https://script.google.com/macros/s/AKfycbxM7dwSmcODD8yyBr4W-ne3-jcMfXWmz_ee7_YWC9BTJfKa0UYpUZBkMzrPHdtp-JzU/exec
```

Bu URL'yi tarayıcınızda doğrudan açarak test edebilirsiniz. Eğer JSON verisi görürseniz, sorun frontend kodundadır. Eğer hata sayfası görürseniz, Google Apps Script ayarlarını kontrol edin.

## Alternatif Çözümler

### 1. JSONP Kullanma
Eğer CORS sorunu devam ederse, JSONP yöntemini deneyebilirsiniz.

### 2. Proxy Server
Bir proxy server kullanarak CORS kısıtlamasını aşabilirsiniz.

### 3. Fallback Data
Uygulama şu anda fallback (yedek) verilerle çalışmaktadır. Prodüksiyon için bu verileri genişletebilirsiniz.

## Sonuç

Bu adımları takip ettikten sonra uygulamanız Google Apps Script'ten veri çekebilmelidir. Sorun devam ederse, konsol çıktısını ve hata mesajlarını kontrol ederek daha spesifik bir tanı koyabilirsiniz.

---

**Not**: Google Apps Script'te her kod değişikliği yaptığınızda yeniden deploy etmeniz gerekir!

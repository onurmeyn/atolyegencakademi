# Atölye Genç Akademi

Bu repository içinde çalışan React uygulaması `lgs-kursu/` klasöründedir.
Kök dizindeki `package.json` sadece bu alt projeyi çalıştırmak için komutları yönlendirir.

## Hızlı başlangıç

```bash
npm install --prefix lgs-kursu
npm run start
```

## Komutlar

- `npm run start` → `lgs-kursu` uygulamasını development modda başlatır.
- `npm run build` → `lgs-kursu` için production build alır.
- `npm run test` → `lgs-kursu` testlerini çalıştırır.

## Canlı siteyi bu değişiklikler etkiler mi?

Kısa cevap: **Hayır, doğrudan etkilemez.**

Bu repoda kodu değiştirmek, tek başına canlı siteyi değiştirmez. Canlı site ancak bir **deploy (yayınlama)** işlemi olduğunda güncellenir.

Genel akış:

1. Kod bu repoda değişir (lokalde veya GitHub'da).
2. Değişiklikler ilgili branch'e commit/push edilir.
3. Canlıya bağlı platform (ör. Netlify) yeni deploy başlatırsa, o zaman site güncellenir.

Bu projede Netlify için kök dizinde `netlify.toml` dosyası bulunur. Build komutu `npm run build`, publish klasörü `build` olarak ayarlıdır. Kök build scripti, önce `lgs-kursu` bağımlılıklarını kurar, ardından derleme çıktısını kök `build/` klasörüne kopyalar.

## Not

Asıl bağımlılıklar ve uygulama kodu `lgs-kursu/` altında tutulur.

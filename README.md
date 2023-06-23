Selam gençler,

Yeni gelen username sistemi için bir bot yapmak istedim bu bot istediğiniz nicki boşa düştüğü zaman otomatik olarak alıyor rate limit vb. gibi bir durum yok öncelikle bu botun kurulumu biraz uzun nasıl kuracağınızı anlatıcam harfiyen uymanız gerekiyor.

- İlk önce `npm i` yazarak modüllerimizi yüklüyoruz.
- Ardından node_modules klasörü içerisine girip sırasıyla `discord.js-selfbot-v13 > managers > ClientUser.js` bu dosyada bulunan `180.` satırı tamamen siliyoruz satırda `discriminator: this.discriminator,` yazıyor tamamen silin bunu boş kalsın eğer bunu yapmazsanız çalışmaz.
- Ardından <a href="https://github.com/novasy/Username-Snipper/blob/master/config.json" target="_blank">config.json</a> dosyamızı açıp eksiksiz ve doğru bir şekilde dolduruyoruz.

```
{
    "BotToken" : "Bir bot oluşturup tokenini giriniz intentleri açmayı unutmayın.",
    "SelfBotToken" : "Düştüğü zaman hangi hesaba bu nicki alacaksanız o hesabın tokeni.",
    "SelfBotPassword" : "Düştüğü zaman hangi hesaba bu nicki alacaksanız o hesabın şifresi.",
    "Username" : "Almak istediğiniz nickname.",
    "UserID" : "Şu an o nickname'e kişinin ID'si.", 
    "WebhookLink" : "Nick alındığında etiket atılacak kanal."
}
```

- Sonra tek yapmamız gereken <a href="https://github.com/novasy/Username-Snipper/blob/master/novasy.bat" target="_blank">novasy.bat</a> dosyasını çalıştırmak.
<a href="https://discord.com/users/729226812776906832" target="_blank">Discord Hesabım</a>

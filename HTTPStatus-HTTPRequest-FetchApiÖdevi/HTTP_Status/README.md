## HTTP Status Kodları Nelerdir?

Günümüzde internette bir milyardan fazla internet sitesi yer almaktadır. Bir kullanıcı herhangi bir internet sitesine girmek istediğinde bilgisayar bu internet sitesini yer aldığı sunucudan _Hypertext Transfer Protocol (HTTP)_ adı verilen protokol üzerinden getirmektedir. Kullanıcının tarayıcısı internet sitesi üzerinden yaptığı bu isteğe 3 haneli HTTP kodu ile yanıt gelmektedir. Kullanıcılar genellikle HTTP kodlarını internet sitesine erişemediklerinde görmektedir. Ancak internet sitesi başarılı bir şekilde ekrana gelse bile arka tarafta bir HTTP status kodu oluşmaktadır. Her bir kodun farklı bir anlamı bulunmaktadır ve bu kodların içeriği hem kullanıcılara hem de internet sitesi sahiplerine önemli bilgiler sağlamaktadır.


## HTTP Status Başlıkları

![1_WQUUqIRt7fMq8CXvXTtQLA](https://user-images.githubusercontent.com/47225405/193270031-9a9d7004-eaf3-4d6b-b204-6ac811c13c6d.png)

[HTTP Status Code Category](https://mbilgil0.medium.com/http-status-code-9cb5bc7aafce)

HTTP status kodları beş farklı sınıf altında yer almaktadır. Bu üç haneli kodların ik hanesi kodun hangi sınıfa ait olduğunu göstermektedir. HTTP status 200 kodu 2xx sınıfında yer alırken 404 hata kodu 4xx sınıfında yer almaktadır. Bu sınıfların kodun özelliğine ve fonksiyonuna göre belirlenmektedir.


### 1xx Sınıfı – Bilgilendirme Yanıtları: 
1xx ile başlayan HTTP status kodu geldiğinde sunucu kullanıcıya isteğin işlemde olduğunu belirtmektedir. Bu sınıf kullanıcının ziyaret ettiği internet sitesindeki ulaştırma bilgilerinden sorumludur.

### 2xx Sınıfı – Başarı Yanıtları: 
2xx kodları başarılı işlemleri bildirmeye yöneliktir. Eğer bu kodun iletilmesi kullanıcının isteğinin sunucu tarafından alındığını, anlaşıldığını ve kabul edildiğini göstermektedir. 2xx kodları genellikle ziyaret edilmek istenen site bilgisi ile beraber gönderilmektedir.

### 3xx Sınıfı – Yönlendirme Yanıtları: 
3xx kodu isteğin sunucuya ulaştığını göstermektedir. Ancak isteğin başarılı bir şekilde işlenebilmesi için kullanıcının yapması gereken bazı adımlar bulunmaktadır. 3xx kodları yönlendirmelerde ve iletmelerde ortaya çıkmaktadır.

### 4xx Sınıfı – İstemci Hatası Yanıtları: 
4xx sınıfından bir hata kodları genellikle kullanıcıdan kaynaklı hatalarda ekrana gelmektedir. Bu noktada kullanıcının isteği sunucuya iletilir ancak bu işlenemez. Bunun en büyük nedenlerinden bir tanesi yanlış isteklerdir. İnternet kullanıcıları genellikle bu sınıfa ait hata kodlarını otomatik olarak oluşturulmuş HTML sayfaları olarak görmektedir.

### 5xx Sınıfı – Sunucu Hatası Yanıtları: 
5xx hata kodu sunucunun kullanıcıdan gelen isteği işleyemediği durumlarda ortaya çıkmaktadır. Bu sunucu hata kodları internet sitesinin suanda erişilemez durumda olduğunu göstermektedir ve tıpkı 4xx sınıfı hata kodları gibi otomatik oluşturulmuş HTML sayfası olarak ekrana gelmektedir.

## En Önemli HTTP Kodları

HTTP kodları özellikle site sahipleri ve SEO uzmanları için önemli bilgiler içermektedir. 404 gibi istemiş yanıtları ya da 503 gibi sunucu yanıtları bilgisayar kullanıcının ekranına gelmektedir. Birçok HTTP kodu bu sınıflara ait kodlar gibi bilgisayar kullanıcılarına gösterilmemektedir. Ancak bunu özel araçlar ya da tarayıcı eklentileri ile görmek mümkün olmaktadır. Bu hataları bulmak ve düzenlemek son derece önemlidir.


### Status Kod 200 – OK: 
HTTP 200 status kodu her şeyin olması gerektiği gibi olduğunu göstermektedir. Sunucuda yer alan tüm veri kullanıcıya aktarılmaktadır. Kullanıcılar genellikle bu kodu görmezler.

### Status Kod 301 – Moved Permanently (Kalıcı Taşındı): 
301 hata kodu kullanıcının isteği verilerin girilen adreste olmadığını ve kalıcı olarak taşındığını gösterir. Bu hata kodu ile beraber kullanıcının erişmek istediği verilerin yer aldığı yeni adres de beraberinde gelmektedir ve tarayıcı otomatik olarak bu yeni adrese yönlenmektedir. Kullanıcılar genelde bu durumu fark etmeden işlem tamamlanmaktadır.

### Status Kod 302 – Moved Temporarily (Geçici Taşındı): 
301 kodunun aksine 302 kodu kullanıcı tarafından erişilmek istenen verinin geçici olarak taşındığını gösterir. Bu kodda da içeriğe otomatik olarak yönlendirmek mevcuttur. Ancak bu hatada asıl adres hala geçerlidir.

### Status Kod 403 – Forbidden (Yasaklandı): 
Bu hata kodu kullanıcıya erişmek istediği verilerde erişim koruması olduğunu ve kullanıcıda erişim izni olmadığı için istediği sayfaya erişemeyeceğini gösterir. Otomatik olarak üretilen HTML sayfası bu bilgiyi kullanıcıya göstermektedir.

### Status Kod 404 – Not Found (Bulunamadı): 
Eğer sunucu 404 hatası verirse bu erişilmek istenen internet sitesinin bilgilerinin ulaşılan sunucuda yer almadığını gösterir. Adres geçerli olmayabilir ya da iste içerikleri herhangi bir bilgi verilmeden başka bir yere taşınmış olabilir. 404 hatası alan kullanıcıların adresi doğru yazdıklarından emin olmaları gerekir. Mevcut olmayan sayfaları götüren linkler ölü linkler olarak bilinmektedir.

### Status Kod 500 – Internal Server Error (Sunucu Hatası): 
HTTP 500 hatası internette en sık karşılaşılan hatalardan bir tanesidir. Sunucuda beklenmeyen bir hata meydana geldiğinde ekrana gelir. Eğer bu hata sunucu tarafından kaynaklanıyorsa erişilmek istenen site ekrana gelmez. Site sahibinin ya da sistem yöneticisinin hatanın nedenini bulup ortadan kaldırması gerekmektedir.

### Status Kod 503 – Service Unavailable (Hizmet Yok): 
503 hatası internet sitesinin saklandığı sunucunun aşırı yüklendiği anlamına gelmektedir. Sunucu bu gibi durumlarda daha önce gelen isteklere verdiği cevapları vermektedir. Bu hata kodu sistem yöneticisinin meydana gelen hata üzerinde çalıştığı ve sitenin bir süre sonra tekrar erişilebilir olacağı anlamını taşımaktadır.


Yararlandığım Kaynaklar: [Limonhost/ HTTP Status Kodları](https://www.limonhost.net/makaleler/nedir/http-status-kodlari-nelerdir/)


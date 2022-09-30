## HTTP İstek Metodları(HTTP Request Methods)

Bir web tarayıcısından bir sunucuya gönderilen istek http protokollerine göre gerçekleştirilir. Sunucu http protokolüne göre web tarayıcısına bir cevap verir. Bu cevapta header ( üst bilgi) ve body ( gövde) bilgisi bulunur. Header alınan bilginin türünün barındırıldığı kısımdır. Bu tür bilgisinin içinde içerik tipi, server tipi, Get, Put, Post, içerik boyutu gibi iletişim yöntemleri ve bilgiler bulunur.


### _POST :_ 
Sunucuya veri göndermek için kullanılır, bodyRequest(body : fromdata, parametre, multipart : resim yada video gönderme)

### _PUT :_ 
Sunucuya veri göndermek için ama gönderilen veriler ile bir dosya yaratmak için kullanılır. Eğer dosya sunucuda varsa üzerinde değişiklik yapar.

### _DELETE :_
Sunucudaki kaynağı silmek için kullanılır. Silme işlemi yaparken kaynağı sorgulamadan bu işlemi yapar

### _GET :_ 
Sunucudan dosya / veri almak için kullanılır

### _Head :_ 
Aslında get methodu ile aynı işi yapar gönderilen veri aynıdır sunucuda olan işlemler aynıdır sunucudaki cevabı dönerken header kısmını döner

### _Trace :_ 
Sunucuyu kontrol amaçlı kullanılır bunun dışında başka bir sunucu üzerinde işlem yapmak için kullanılır

### _Options :_ 
Sunucunun hangi methodlara kabul ettigini öğrenmek için kullanılır.

### _Connection :_ 
Sunucuyu proxy gibi kullanabilmemizi sağlar yani sunucunun başka bir sunucuya istek yapmasını saglayabiliriz.

### _Path :_ 
Bu metod bir kaynağa istediğiniz küçük çaplı değişimi yapmanızı sağlar. örnegin sadece adamın epostasını değiştirmek istiyoruz.

_GET_ methodu kullanıldığında istekler URL kısmında gönderilir. Gönderilen bilgiler URL’de görüntülendiği için güvenlik riski yüksektir ancak _POST_ metoduna göre daha hızlıdır.

> /test/demo_form.php?name1=value1&name2=value2

_GET_’in _POST_’a karşı bir diğer dezavantajı şudur: multi-part binary türündeki verilerin gönderimi. “_multi-part binary_” ile kastedilen şey dosyadır. Örneğin; resimdir. _POST_ ile forma bir resim koyup sunucuya upload edebiliriz. Fakat _GET_ ile bu mümkün değildir.


Yararlandığım Kaynaklar: [Ufuk Çatalca/ HTTP Request Methods](https://medium.com/@ufukcatalca/http-i%CC%87stek-metodlar%C4%B1-http-request-methods-799782f21640)

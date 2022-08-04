/* var firstName, lastName, fullName;

firstName = prompt("Adınız ?");
lastName = prompt("Soyadınız ?");
fullName = firstName +" "+ lastName;

alert(
    "Merhaba! " + fullName
)
//dökümana yazdırıyoruz
document.write( "Merhaba " + fullName ) */


var no1, no2, sum;

no1 = prompt("1. Sayıyı Giriniz : ")
no2 = prompt("2. Sayıyı Giriniz : ")

sum = parseInt(no1) + parseInt(no2) 

document.write("Toplam " + sum)
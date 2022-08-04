/*
AND && önermaleirnin ikiside doğru olmalı
OR || önermelerin en az biri doğru olmalı
NOT ! true false çevrimi yapar
 */

var age = 15;
var job = "Software"
var isMarried = true

//-------------AND-------------------AND----------
/*if (age >= 20 && age<=50){
    console.log("Üye Olabilirsiniz");
}else
    console.log("Üye Olamazsınız");*/

//-------------OR---------------------OR----------
/*if (age >= 20 || job=="Software"){
    console.log("Üye Olabilirsiniz");
}else
    console.log("Üye Olamazsınız");*/

//-------------NOT-------------------NOT----------
if (!isMarried){
    console.log("Evlisiniz")
}else{
    console.log("Bekarsınız")
}
// event son kullanıcıyla etkileşime girmektir. 

var num1 = document.querySelector('#numberOne');
var num2 = document.querySelector('#numberTwo');
var sum = document.querySelector('#sum');

num1.addEventListener('input',topla);
num2.addEventListener('input',topla);

function topla() {
    var one = parseInt(num1.value) || 0;     //girilen değerleri yan yana yazdırmaması için parse ile string değeri ınteger değere çeviriyoruz.
    var two = parseInt(num2.value) || 0;   //Nan(not a number) hatası almamak için || 0 yazdık

    sum.innerHTML = "Toplam Sonuç: " + (one + two);
}



//,,,,,,,,,,,,,,,,,,,,,,,HTML PAGE,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
/*
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
  <h1>Javascript Events</h1>
  <h2>Toplama İşlemi</h2>
  <p>
    <input id="numberOne"> + <input id="numberTwo">
  </p>
  <p id="sum"></p>

  <script src="./16.events.js"></script>
</body>
</html>

*/
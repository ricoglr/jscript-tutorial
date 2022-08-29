var square = document.querySelector('#square');
var rectangle = document.querySelector('#rectangle');

square.addEventListener('click', clickSquare);
rectangle.addEventListener('click', clickRectangle);

function clickSquare(){
    event.stopPropagation();    //fonksiyonda ne isteniyorsa yalnızca onu yapar
    console.log("Square Clicked");
}
function clickRectangle(){
    console.log("Rectangle Clicked");
}

//,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,HTML PAGE,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

/*

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<style>
  #square{
    position: absolute;
    top: 50px;
    left: 100px;
    width: 100px;
    height: 100px;
    background-color: red;
  }
  #rectangle{
    position: relative;
    width: 300px;
    height: 200px;
    margin: 0 auto;
    background-color: green;
  }
</style>

<body>
  <div id="rectangle">
    <div id="square"></div>
  </div>
  <script src="./18.events-3.js"></script>
</body>
</html>

*/
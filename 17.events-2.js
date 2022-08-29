var accordion = document.querySelector('#accordion');   //Akordiyon id mizi seçtik
var titles = accordion.getElementsByTagName('h2');  //h2 başlıklarını seçtik

for (let i = 0; i < titles.length; i++) {
    titles[i].addEventListener('click', displayAccordion);
}//h2 başlıklarının tamamına for döngüsü yardımıyla üçüne birden eventlistener de yardımıyla event leri ve karşılığında yapılacak fonksiyonu yazdık

function displayAccordion(){
    content = this.nextSibling.nextSibling;

    if (content.style.display != 'block') {
        content.style.display = 'block'; //paragrafımızın display özelliği block değil ise block yap
    }
    else{
        content.style.display = 'none'; // paragrafımızın display özelliği block ise none yap.
    }
}


//,,,,,,,,,,,,,,,,,,,,,,,,,,HTML PAGE,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,HTML PAGE,,,,,,,,,,,,,,,,,,,,,,,,
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
  #section1, #section2, #section3{
    display: none;
  }
  h2{
    cursor: pointer;
  }
</style>

<body>
  <div id="accordion">
    <h2>Section 1</h2>
    <div id="section1">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio voluptate, incidunt veritatis error facilis doloremque beatae fugiat, veniam necessitatibus, ad atque? Provident ex aliquid nam omnis velit quisquam ratione est culpa harum quo. Vel veniam quas, quis exercitationem dicta officiis reiciendis quibusdam unde odio ipsum. Recusandae, ratione quod! Aliquid, veniam?</p>
    </div>
    <h2>Section 2</h2>
    <div id="section2">
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum libero iusto dolorum rerum sint quisquam enim illum optio ipsum, pariatur veritatis est a hic autem voluptatem aspernatur necessitatibus iste dolores. Consequuntur necessitatibus dolore voluptatum doloremque facere. Voluptates quaerat veniam velit consequatur numquam aliquid, pariatur ducimus dignissimos amet ab eligendi perferendis?</p>
    </div>
    <h2>Section 3</h2>
    <div id="section3">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque beatae eaque autem a! Repellendus nemo dolor tenetur, iure ab explicabo deserunt modi corrupti debitis reprehenderit rerum ut eos repellat voluptatem nihil sequi! Quia officiis, porro harum sapiente provident quae natus dolor laborum eos ipsam reprehenderit commodi eius? Sint, possimus quo.</p>
    </div>
  </div>
  <script src="./17.events-2.js"></script>
</body>
</html>

*/
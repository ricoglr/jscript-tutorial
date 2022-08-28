//DOM ile ID Selection 
document.title='Jscript Tutorial';

console.log(document.getElementById('myHeader')); //ID si myHeader olanı console a yazdırdık/seçtik. 

var myElement = document.getElementById('myHeader'); //ID yi değişkene atadık.
console.log(myElement);

myElement.textContent = 'New Jumbotrom'; //Yeni bir başlık verdik.
// myElement.innerText = 'New Jumbotrom'; //textContent ile ayno görevi görüyor

myElement.innerHTML = '<h2> Little Title </h2>'; //innerHTML dediğimiz için html tag ları içerisinde kodumuzu yazıyoruz.
 
myElement.style.background = 'red';


// Şimdi class nasıl seçilir onu görelim.
var myClass = document.getElementsByClassName('nav-link');
console.log(myClass[1]);

myClass[2].textContent = 'İletişim';    //Bu bir array olduğu için hangi class'ı seçtiğini belirtmen lazım.
myClass[2].style.border = '1px solid red';


//HTML de tag Seçimi.
var myTag = document.getElementsByTagName('h4');

console.log(myTag); 

myTag[0].textContent = 'H4 Title'; //Bu bir array olduğu için hangi h4 ü seçtiğini belirtmen lazım. 
myTag[3].textContent = 'H4 Title'; // Eğer ki tüm h4 leri seçmek istiyorsak for döngüsü oluştururuz.

for (let i = 0; i < myTag .length; i++) {
    myTag[i].textContent = 'New Title'; 
    
}


//..................HTML PAGE.......................

/*

<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Narrow Jumbotron Template for Bootstrap</title>

    <link rel="canonical" href="https://getbootstrap.com/docs/4.0/examples/narrow-jumbotron/">

    <!-- Bootstrap core CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    <!-- Custom styles for this template -->
    <link href="narrow-jumbotron.css" rel="stylesheet">
  </head>
  <body>

    <div class="container">
      <header class="header clearfix">
        <nav>
          <ul class="nav nav-pills float-right">
            <li class="nav-item">
              <a class="nav-link active" href="#">Home <span class="sr-only"></span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </nav>
        <h3 class="text-muted">Project name</h3>
      </header>

      <main role="main">

        <div class="jumbotron">
          <h1 class="display-3" id="myHeader">Jumbotron heading</h1>
          <p class="lead">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
          <p><a class="btn btn-lg btn-success" href="#" role="button">Sign up today</a></p>
        </div>

        <div class="row marketing">
          <div class="col-lg-6">
            <h4>Subheading</h4>
            <p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>

            <h4>Subheading</h4>
            <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.</p>

            <h4>Subheading</h4>
            <p>Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
          </div>

          <div class="col-lg-6">
            <h4>Subheading</h4>
            <p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>

            <h4>Subheading</h4>
            <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.</p>

            <h4>Subheading</h4>
            <p>Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
          </div>
        </div>

      </main>

      <footer class="footer">
        <p>&copy; Company 2017</p>
      </footer>

    </div> <!-- /container -->
    <script src="./13.DOM-2.js"></script>
  </body>
</html>










<!-- STYLE CSS -->


 
<style>

    body {
        padding-top: 1.5rem;
        padding-bottom: 1.5rem;
      }
      
      .header,
      .marketing,
      .footer {
        padding-right: 1rem;
        padding-left: 1rem;
      }
      
      .header {
        padding-bottom: 1rem;
        border-bottom: .05rem solid #e5e5e5;
      }
      
      .header h3 {
        margin-top: 0;
        margin-bottom: 0;
        line-height: 3rem;
      }
      
      .footer {
        padding-top: 1.5rem;
        color: #777;
        border-top: .05rem solid #e5e5e5;
      }
      
      @media (min-width: 48em) {
        .container {
          max-width: 46rem;
        }
      }
      .container-narrow > hr {
        margin: 2rem 0;
      }
      
      .jumbotron {
        text-align: center;
        border-bottom: .05rem solid #e5e5e5;
      }
      .jumbotron .btn {
        padding: .75rem 1.5rem;
        font-size: 1.5rem;
      }
      
      .marketing {
        margin: 3rem 0;
      }
      .marketing p + h4 {
        margin-top: 1.5rem;
      }
      
      @media screen and (min-width: 48em) {

        .header,
        .marketing,
        .footer {
          padding-right: 0;
          padding-left: 0;
        }
      
        .header {
          margin-bottom: 2rem;
        }
      
        .jumbotron {
          border-bottom: 0;
        }
      }
    </style>

*/
var i = 0;
var images = [
    'https://loremflickr.com/400/200',
    'https://loremflickr.com/400/220', 
    'https://loremflickr.com/400/210'
];
var duration = 1000;

function slideImg (){
    document.slide.src = images[i]; //html deki src kısmını burada doldurduk.

    if (i < images.length -1 ) { //i array-1 den küçük olduğu sürece i yi bir arttır
        i++;
    }
    else{
        i = 0;
    }

    setTimeout("slideImg()", duration);
}

window.onload = slideImg;

/*  HTML PAGE

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Jscript Tutorial</title>
</head>
<body>
    <div class="container ">
        <h1>Applied Javascript Lessons</h1>
        <img name="slide" width="400" height="200">
    </div>
    
    <script src="./12.document_object_model_DOM.js"></script>
</body>
</html>

*/
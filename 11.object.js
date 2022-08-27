
var myArray=["Aaron","Joseph","Adam"]
console.log(myArray);
//console.log(myArray[1]); //Listenin birinci elemanını seçtik. 


var player1 = {
    userId: 0001,
    username: "Alexander",  //Player1 adında nesne oluşturduk
    level: 21
}; 
//console.log(player1.username); //player1'in kullanıcı adını göstermesini sağladık. 

var player2 = new Object();
player2.userId= 0002;
player2.username="David";   //player2 adında yeni bir nesne oluşturduk 
player2.level=18;

console.log(player1);
console.log(player2);


//------------------------------------------------------------------------------------------------

/*
var person1 = {
    name: "Michael",
    lastname:"Jalal",
    age: 28,
    childs: ['Abraham','Ussain','Mariam'],          

    //objenin içine fonksiyon yazılabilir

    fullName : function(){
        return this.name + " " + this.lastname;
    }

} 
console.log(person1);
console.log(person1.childs[2]);       //"person1" nesnesinin içinden "childs" listesindeki ikinci isimi getirttik.
console.log(person1.fullName() );
*/

//------------------------------------------------------------------------------------------------


/*
var library = [
    {
        title: "İnce Mehmet",
        author: "Yaşar Kemal",
        status:true
    },
    {
        title: "Kuyucaklı Yusuf",
        author: "Sabahattin Ali",
        status:true
    },
    {
        title: "Memleketimden İnsan Manzaralari",
        author: "Nazım Hikmet Tan",
        status:false
    }
];
for (let i = 0; i < library.length; i++) {
    var book = library[i].title + " Yazarı " + library[i].author + "."
    if (library[i].status) {
        console.log(book + " Okundu");
    }
    else{
        console.log(book + " Okunmadı");
    }
}
*/

//------------------------------------------------------------------------------------------------



/*var player1 = { 
    name: "Leo",
    surname:"Messi",
    age: 25
}
console.log(player1);

var player2 = {
    name: "Cristiano",
    surname:"Ronaldo",
    age: 25
}
console.log(player2);
//daha kısa yolunu göstermemi ister misin? Construction object ile artık hem satırdan tasarruf ediyoruz hemde kod yazman artık daha kolay :D

function Player (name, surname, age){
    this.name = name;
    this.surname = surname;
    this.age= age;
}
var player3 = new Player("Arda","Turan",25);
var player4 = new Player("Agüero","Nasso",25);
var player5 = new Player("Karim","Benzema",25);
var player6 = new Player("Bekir","İrtegül",25);

console.log(player3);
console.log(player4);
console.log(player5);
console.log(player6 );*/
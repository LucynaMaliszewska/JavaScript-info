var Car = function (maxSpeed,driver){
    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.drive = function (speed, time){
        console.log(speed*time);
    };
    this.logDriver = function(){
        console.log("driver name is " + this.driver);
    };
}

var myCar = new Car (70, "Ninja Net");
var myCar2 = new Car (40, "Humpty Dumpty");
var myCar3 = new Car (10, "Sahaun");
var myCar4 = new Car (90, "James Bond");

myCar.drive (30, 5);
myCar3.logDriver ();

var myH2 = myContentDivs[1].getElementsByTagName(h2);
myH2[0].innerHTML = "Yo Ninjas";
document.getElementById("page-title");
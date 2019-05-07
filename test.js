var myCar = new Object();
myCar.maxSpeed = 50;
myCar.driver = "Shaun";
myCar.drive = function(){console.log("now driving");
};

myCar.drive();

// krótszy zapis

var myCar2 = {maxSpeed: 70, driver: "Net Ninja",
    drive: function(){console.log("now driving");}
};

// przy określonych wartościach

var myCar2 = {
    maxSpeed: 70,
    driver: "Net Ninja",
    drive: function (speed, time){
        console.log(speed*time);
    }
};
console.log(myCar2.maxSpeed);
myCar2.drive(50, 3);

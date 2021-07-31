const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour;

var bg = "sunrise.png";

function preload() {
    getBackgroundImg();
    
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg)
        background(backgroundImg);

    Engine.update(engine);

    fill("black");
    textSize(30);
    
    if(hour>=12){
        text("Time : 12 AM"+ hour%12 + "12 PM", 50,100);
    }else if(hour==0){
        text("Time : 12 AM",100,100);
    }else{
        text("Time :12 PM "+ hour%12 + "12 AM", 50,100);
    }

}

async function getBackgroundImg(){

   
    var response= await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
   
    
    
    var responseJson= await response.json()
    console.log("Time",responseJson)

  
    var datetime= responseJson.datetime
    var hour=datetime.slice(11,13)

    console.log(hour)


    
    if(hour>=04&&hour<=06){
        bg="sunrise.png"
    }else if(hour>=06&&hour<=08){
        bg="sunrise.png"
    }else if(hour>=08&&hour<=10){
        bg="sunrise.png"
    }else if(hour>=10&&hour<=12){
        bg="sunrise.png"
    }else if(hour>=12&&hour<=14){
        bg="sunrise.png"
    }else if(hour>=14&&hour<=16){
        bg="sunrise.png"
    }else if(hour>=16&&hour<=18){
        bg="sunset.png"
    }else if(hour>=18&&hour<=20){
        bg="sunset.png"
    }else if(hour>=20&&hour<=22){
        bg="sunset.png"
    }else if(hour>=22&&hour<=24){
        bg="sunset.png"
    }else if(hour>=00&&hour<=03){
        bg="sunset.png"
    }


    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
   

}

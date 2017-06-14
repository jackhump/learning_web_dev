// File: js-example1.js

// This is a one line comment
/*
    This is a multiple
    line comment
 */

// 1. Different types of variables
// var typeOfBread = 'white bread';
// var numberOfSalamiSlices = 2;
// var butter = true;

// // 2. Adding variable with a number.
// var totalSlices = numberOfSalamiSlices + 2;
// var stringAddition = 'this will ' + 'be an awesome ' + 'sandwich';

// // 3. Alert data to the user
// // alert('totalSlices: ' + totalSlices);

// console.log( totalSlices)

// FizzBuzz

// for ( var i = 1; i < 101; i++){
// 	if( i % 5 == 0 && i % 3 == 0){
// 		var result = i + " FizzBuzz"
// 	}
// 	else if( i % 3 == 0){
// 		var result = i + " Fizz"
// 	}
// 	else if( i % 5 == 0){
// 		var result = i + " Buzz"
// 	}
// 	else{
// 		var result = i
// 	}
// 	console.log(result)
// }

// var weather = prompt("what's the weather like outside?")
// var answer = false
// while(answer == false){
// 	if( weather == "sunny" ){
// 		alert("that must be nice")
// 		var answer = true
// 	}
// 	else if( weather == "cloudy"){
// 		alert("boo")
// 		var answer = true
// 	}
// 	else {
// 		alert("I don't understand you")
// 		var answer = false
// 		var weather = prompt("what's the weather like outside?")

// 	}
// }

// JQuery - simplifies a lot of common JS tasks

$(document).ready(function(){
	$("#saltBanner").hide()


	var click = 0 
	// only runs jQuery when the page has fully loaded
   // jQuery methods go here...
   // $("#saltguy").mouseenter(function(){
   // 	alert("you've entered the salt zone")
   // })

   $("#saltguy").click(function(){
   	click ++
   	$("#saltBanner").show()

   	console.log("click")
   	var salt = $("#saltguy");
   	var banner = $("#saltBanner");
   	salt.animate({left: '+=25'}, 100);
   	banner.animate({fontSize: '+=10'}, 50);
   	salt.animate({left: '-=50'}, 100);
   	salt.animate({left: '+=25'}, 100);



   	click === 1
   	? $("#saltCounter").html("1 shake")
   	: $("#saltCounter").html( click + " shakes");
   	
   	if(click % 10 == 0){
   		console.log("10 clicks!")
   		$("#saltguy").addClass("flash");
         $("#saltguy").removeClass("flash");
   	}

   })


   $("#saltguy").mouseleave(function(){
   	$("#saltBanner").hide()
   	console.log("spotted a change!")
   	$("#saltguy").stop(clearQueue = true)
   	$("#saltCounter").html("you've left the salt zone :(")
   	$("#saltBanner").css("font-size", "1pt")
   	click = 0
   })

     $("#saltguy").mouseenter(function(){
   	console.log("spotted a change!")
   	$("#saltCounter").html("you're in the salt zone buddy!")
   })


   var isHidden = false

   $("#button1").click(function(){
   	if(!isHidden){
   		$("#saltguy").hide();
   		isHidden = true;
   		$("#button1").html("Show the salt!");

   	} else {
   		$("#saltguy").show();
   		isHidden = false;
   		$("#button1").html("Hide the salt!");
   	}
   })
});



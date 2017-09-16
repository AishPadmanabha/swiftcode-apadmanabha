var app = angular.module('chatApp', ['ngMaterial']);

app.controller('chatController', function ($scope) {
	$scope.messages = [
	{
		sender : "BOT",
		text : "Hi",
		time : "1:12PM"
	},
	{
		sender : "USER",
		text : "My name is Sappo!",
		time : "1:13PM"
	},
	{
		sender : "BOT",
		text : "And I work in a button factory!",
		time : "1:14PM"
	},
	{
		sender : "USER",
		text : "Kbye.",	
		time : "1:15PM"
	}];

var  exampleSocket =  new  WebSocket("ws://localhost:9000/chatSocket");
exampleSocket.onmessage  =   function  (event) {
       var jsonData = JSON.parse(event.data);
       console.log(jsonData);
   };
});


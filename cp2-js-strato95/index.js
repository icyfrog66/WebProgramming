/*Name: Anthony Lu
* Date: October 16, 2018
* Section: CSE 154 AJ
* This is index.js to implement the
* behavior of the webpage of creative
* project 2. It allows for changing the
* video that appears in the frame on
* the webpage, as well as for a random
* image to appear when the appropriate
* button is clicked by the user.
*/
(function() {
	"use strict";

	//Initiate on load
	window.addEventListener("load", initialize);

	//This is the running list of possible
	//urls for the youtube video display and
	//can be added to by the user.
	let urls = ["https://www.youtube.com/embed/f5i_3E7hyUY",
		"https://www.youtube.com/embed/Q7GvkhVChM8",
		"https://www.youtube.com/embed/CuJzJQWWQUQ",
		"https://www.youtube.com/embed/EKL7VQgbavA",
		"https://www.youtube.com/embed/m4Z0RN_KhK0",
		"https://www.youtube.com/embed/Mqps4anhz0Q"];

	//This is the unchangeable list of pictures
	//for the image display
	const imgs = ["images/mirae1.PNG", "images/mirae2.PNG", 
				"images/mirae3.PNG", "images/mirae4.PNG",
				"images/mirae5.PNG", "images/mirae6.PNG",
				"images/mirae7.PNG", "images/mirae8.PNG",
				"images/mirae9.PNG", "images/mirae10.PNG",
				"images/mirae11.PNG", "images/mirae12.PNG",
				"images/mirae13.PNG", "images/mirae14.PNG",
				"images/mirae15.PNG"];

	/**
		This function initializes event listeners 
		on page load.
		@params: none
		@returns: none
	*/
	function initialize()
	{
		let addVideoSubmit = document.getElementById("addVideoSubmit");
		let randomVideo = document.getElementById("randomVideo");
		let addNewPicture = document.getElementById("addNewPicture");
		let removeLast = document.getElementById("removeLast");
		randomVideo.addEventListener("click", randomLink);
		addVideoSubmit.addEventListener("click", addToUrls);
		addNewPicture.addEventListener("click", addPic);
		removeLast.addEventListener("click", removePic);
	}

	/**
		This function sets the video inside
		the iframe to a random 
		@params: none 
		@returns: none
	*/
	function randomLink()
	{
		setTimeout(function() {
		let videoArea = document.querySelector("iframe");
		videoArea.src = randomFromArray(urls);
		}, 300);
	}

	/**
		This function returns a random
		element of a given array.
		@params: a nonempty and nonnull array 
		@returns: a random element from that array
	*/
	function randomFromArray(array)
	{
		return array[Math.floor(array.length * Math.random())];
	}

	/**
		This function adds a url based on 
		user text input in a textarea on the 
		page to the list of possible urls/
		youtube videos that can play
		in the iframe.
		@params: none
		@returns: none
	*/
	function addToUrls()
	{
		let dropdown = document.querySelector("textarea");
		urls.push(dropdown.value.replace("watch?v=", "/embed/"));

	}

	/**
		This function adds a random picture to
		the area on the page that is specifically
		for adding pictures when the button to
		add pictures is clicked.
		@params: none
		@returns: none
	*/
	function addPic()
	{
		let mirae = document.getElementById("mirae");
		let curImg = document.createElement("img");
		mirae.appendChild(curImg);
		curImg.src = randomFromArray(imgs);
		curImg.alt = "Kang Mi Rae dancing";
	}

	/**
		This function removes a picture from
		the section where pictures can be added,
		but only if there is at least one picture
		in the div area where pictures can be added. 
		@params: none
		@returns: none
	*/
	function removePic()
	{
		let mirae = document.getElementById("mirae");
		if (mirae.childNodes.length > 0) {
			mirae.removeChild(mirae.lastChild);
		}
	}

})();
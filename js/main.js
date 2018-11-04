(function () {
	"use strict";
	console.log("superhero SEAF started");

	//constructor function
	function superhero(hero1, hero2, hero3, hero4) {

		// variables are defined with refrence to css and selecting them by querySelector
		var superman = document.querySelector(hero1);
		var batman = document.querySelector(hero2);
		var deadpool = document.querySelector(hero3);
		var ironman = document.querySelector(hero4);
		

		var containerW = 0;
		var containerH = 0;


		var imageBox = document.querySelector("#imageBox");
		var sizeChange = false;



		this.contSize = function (width, height) {
			containerW = width;
			containerH = height;

		};


		//functions
		function onClick(event) {
			sizeChange = true;


			if (sizeChange === true) {

				//x values
				var x = event.clientX - imageBox.getBoundingClientRect().left;
				// y value
				var y = event.clientY - imageBox.getBoundingClientRect().top;

				if (x > 0 && x < containerW / 2 && y > 0 && y < containerH / 2) {
					superman.style.width = containerW + "px";
					superman.style.height = containerH + "px";

					superman.style.position = "relative";
					alert("I can defeat all of them with a blow of wind");

				}
				else if (x > containerW / 2 && x < containerW && y > 0 && y < containerH / 2) {
					batman.style.width = containerW + "px";
					batman.style.height = containerH + "px";

					superman.style.position = "none";
					batman.style.position = "absolute";
					alert("I can fight with both deadpool and ironman");

				}
				else if (x > 0 && x < containerW / 2 && y > containerH / 2 && y < containerH) {
					deadpool.style.width = containerW + "px";
					deadpool.style.height = containerH + "px";


					deadpool.style.position = "absolute";
					alert("Yes, I can fight with Ironman");

				}
				else if (x > containerW / 2 && x < containerW && y > containerH / 2 && y < containerH) {
					ironman.style.width = containerW + "px";
					ironman.style.height = containerH + "px";

					ironman.style.position = "absolute";

					alert("I believe in peace");
				}
				else { };

			}


		}
		function onClickRelease() {
			sizeChange = false;

			superman.style.position = "relative";
			batman.style.position = "relative";
			deadpool.style.position = "relative";
			ironman.style.position = "relative";

			superman.style.width = containerW / 2 + "px";
			superman.style.height = containerH / 2 + "px";

			batman.style.width = containerW / 2 + "px";
			batman.style.height = containerH / 2 + "px";

			deadpool.style.width = containerW / 2 + "px";
			deadpool.style.height = containerH / 2 + "px";

			ironman.style.width = containerW / 2 + "px";
			ironman.style.height = containerH / 2 + "px";

		}

		//on click listeners
		imageBox.addEventListener("mousedown", onClick, "false");
		imageBox.addEventListener("mouseup", onClickRelease, "false");


	}
	
	//new object
	var finalSuperhero = new superhero(".superman", ".batman", ".deadpool", ".ironman");
	//container size
	finalSuperhero.contSize(897, 560);
})();
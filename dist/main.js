function displayTime() {
	var currentTime = new Date(); 
	var h = currentTime.getHours();
	var m = currentTime.getMinutes();
	var s = currentTime.getSeconds();

	if(h>12) {
		h=h-12;
	}
	if(h==0) {
		h=12;
	}
	if(h <= 9) {
		h = '0'+h;
	}
	if(m <= 9) {
		m = '0'+m;
	}
	if(s <= 9) {
		s = '0'+s;
	}

	document.getElementById("clock").innerHTML = h + ":" + m + ":" + s;
	
	setTimeout(displayTime, 1000);
}

displayTime();

function changebackground() {
            var colors = ["#EF9BA1"," #F4B589", "#F9CB8B","#FEF59C","#D4E29C","#95CB9C","#85D1F4","#91AFDB","#9686BE","#C795BF"];
            // var colors = ["#FC4EFC", "#FC7D04", "#FCFE04","#7DFE04","#04E6FC","#9C1AFC"]; //neon
            setInterval(function() {
                var bodybg = Math.floor(Math.random() * colors.length);
                var selectedcolor = colors[bodybg];
                document.body.style.background = selectedcolor;
            }, 2000);

        }

changebackground();























// //lets display the current time
// var d, h, m, s, color;
// function displayTime() {
// 	d = new Date(); //new data object
// 	h = d.getHours();
// 	m = d.getMinutes();
// 	s = d.getSeconds();
	
// 	//add zero to the left of the numbers if they are single digits
// 	if(h <= 9) h = '0'+h;
// 	if(m <= 9) m = '0'+m;
// 	if(s <= 9) s = '0'+s;
	
// 	color = "#"+h+":"+m+":"+s;
// 	//set background color
// 	document.body.style.background = color;
// 	//set time
// 	document.getElementById("hex").innerHTML = color;
	
// 	//retrigger the function every second
// 	setTimeout(displayTime, 1000);
// }

// //call the function
// displayTime();
/*document.getElementById('click').onclick = click;

var heads = 0;
var tails = 0;
function click() {  
    x = (Math.floor(Math.random() * 2) == 0);
    if(x){
    	flip("heads");
    }else{
        flip("tails");
    }
};
function flip(coin) {
    document.getElementById("result").innerHTML = coin;
};
*/

var tails = 0;
var heads = 0;


function toss() {
    var rows = 0;
    //document.getElementById("results").innerHTML = "";
    while (rows < 1) {   
       var arr = new Array();
        for (var i = 0; i < 1; i++) 
		{       
            var val = Math.floor( Math.random() * 2 );
            if (val === 1) {
                arr[i] = imageHeads("images/1euro_front.png");
				heads = heads + 1;
				checkHeads();
            } else {
                arr[i] = imageTails("images/1euro_back.png");
				tails = tails + 1;
				checkTails();
            }       
        }
        //document.getElementById("results").innerHTML += "<br />" + arr;
        delete arr;
        rows++;
    }
	clicked();
}



function imageHeads(src) {
    /*
    var img = document.createElement("img");
    img.src = src;

    // This next line will just add it to the <body> tag
    document.body.appendChild(img);
    */
    var img = document.getElementById("myImg");
    img.src = src;
}

function imageTails(src) {
    /*
    var img = document.createElement("img");
    img.src = src;

    // This next line will just add it to the <body> tag
    document.body.appendChild(img);
	*/
    var img = document.getElementById("myImg");
    img.src = src;
}
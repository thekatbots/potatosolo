var quote = [
	"I was a skeptic at first, but when I tried <span>Potato<sup>TM</sup></span> for the first time, my life completely changed! I'm a different person now. Everything is better with <span>Potato<sup>TM</sup></span>. <cite><span>Jane Doe</span>, single mom</cite>",
	
	"<span>Potato<sup>TM</sup></span> Team gave my group the resources they needed to finish a huge project. It's surprisingly easy to set up and energizing to use!<cite><span>Jake Smith</span>, businessman</cite>",
	
	"When I needed it most, <span>Potato<sup>TM</sup></span> Lite came through. It can get you out of some pretty tricky situations! I never leave home without one.<cite><span>Jade Harley</span>, professional jogger</cite>",
	
	"<span>Potato<sup>TM</sup></span> is just about the best thing ever. Who even needs anything else? Nobody who's got their shit together, that's for sure.<cite><span>John Jacobmeier</span>, tactical hobo</cite>"
	]
function vanish(){
	document.getElementById('leftside').classList.add('vanish');
	document.getElementById('testcenter').classList.add('vanish');
	document.getElementById('rightside').classList.add('vanish');
	}
function shiftup(){
	movequote = quote.shift(); //Pull the top one
    quote.push(movequote); //And add it back to the end
	
	document.getElementById('leftside').innerHTML = quote[0];
	document.getElementById('testcenter').innerHTML = quote[1];
	document.getElementById('rightside').innerHTML = quote[2];
	}
function shiftdown(){
	movequote = quote.pop(); //Pull the bottom one
    quote.unshift(movequote); //And add it back to the front
	
	document.getElementById('leftside').innerHTML = quote[0];
	document.getElementById('testcenter').innerHTML = quote[1];
	document.getElementById('rightside').innerHTML = quote[2];
	}
function unvanish(){
	document.getElementById('leftside').classList.remove('vanish');
	document.getElementById('testcenter').classList.remove('vanish');
	document.getElementById('rightside').classList.remove('vanish');
	}

function rotatequote()
	{
	vanish();
	window.setTimeout('shiftup()', 250);
	window.setTimeout('unvanish()', 250);
	}
	
function unrotatequote()
	{
	vanish();
	window.setTimeout('shiftdown()', 250);
	window.setTimeout('unvanish()', 250);
	}
	
document.getElementById('testleft').addEventListener("click", unrotatequote);
document.getElementById('testright').addEventListener("click", rotatequote);


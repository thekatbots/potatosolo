var quote = [
	"I was a skeptic at first, but when I tried <span>Potato<sup>TM</sup></span> for the first time, my life completely changed! I'm a different person now. Everything is better with <span>Potato<sup>TM</sup></span>. <cite><span>Jane Doe</span>, single mom</cite>",
	
	"<span>Potato<sup>TM</sup></span> Team gave my group the resources they needed to finish a huge project. It's surprisingly easy to set up and energizing to use!<cite><span>Jake Smith</span>, businessman</cite>",
	
	"When I needed it most, <span>Potato<sup>TM</sup></span> Lite came through. It can get you out of some pretty tricky situations! I never leave home without one.<cite><span>Jade Harley</span>, professional jogger</cite>",
	
	"<span>Potato<sup>TM</sup></span> is just about the best thing ever. Who even needs anything else? Nobody who's got their shit together, that's for sure.<cite><span>John Jacobmeier</span>, tactical hobo</cite>"
	]

var attrib = [
	"<span>Jane Doe</span>, single mom",
	"<span>Jake Smith</span>, businessman",
	"<span>Jade Harley</span>, professional jogger",
	"<span>John Jacobmeier</span>, tactical hobo"
	]
	
  /*this is the time in milliseconds adjust to suit*/

function rotatequote()
	{
	thequote = quote.shift(); //Pull the top one
    quote.push(thequote); //And add it back to the end
	
    document.getElementById('testcenter').innerHTML = thequote;
	}
document.getElementById('testleft').addEventListener("click", rotatequote);
document.getElementById('testright').addEventListener("click", rotatequote);


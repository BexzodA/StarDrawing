
let star;

function preload(){

}

function setup() {
  var cnv = createCanvas(windowWidth,windowHeight);
  cnv.style('display', 'block');
  star = secondStar(6, 50, 3, 4);
}

function draw() {
	clear();
	drawPoly(star, mouseX, mouseY, (180 + (sin(millis() / 12) * 180)), color(255,0,0,(128 + sin(millis() / 10) * 128)));
}

function secondStar(numPoints, size, depth, delAngFactor)
{
	angleMode(DEGREES);

	let verticies = [];
	let sp = new p5.Vector(size, 0);
	verticies.push(sp);
	let delAng = 360 / numPoints;
	let angle = 0;

	for(let i = 1; i < numPoints * 2; i++)
	{
		if(i % 2 == 1) {
			verticies[i] = new p5.Vector((sp.x * cos(angle + delAng / delAngFactor) - sp.y * sin(angle + delAng / delAngFactor)) / depth, (sp.y * cos(angle + delAng / delAngFactor) + sp.x * sin(angle + delAng / delAngFactor)) / depth);
			angle += delAng;
		} else {
			verticies[i] = new p5.Vector(sp.x * cos(angle) - sp.y * sin(angle), sp.y * cos(angle) + sp.x * sin(angle));
		}
	}

	return verticies;
}

function drawPoly(verticies, x , y, angle, color)
{
	translate(x, y);
	rotate(angle);
	stroke(color);
	
	for(let i = 0; i < verticies.length - 1; i++)
	{
		line(verticies[i].x, verticies[i].y, verticies[i + 1].x, verticies[i + 1].y);
	}

	line(verticies[0].x, verticies[0].y, verticies[verticies.length - 1].x, verticies[verticies.length - 1].y);
}
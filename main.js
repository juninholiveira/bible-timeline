var canvasElement = document.getElementById("canvas");
var rect = canvasElement.getBoundingClientRect();
canvasElement.width = rect.width;
canvasElement.height = rect.height;
var canvas = new InfiniteCanvas(canvasElement);
var ctx = canvas.getContext("2d");

//Tmeline vars
var yearSize = 100                                  //How many pixels between each year
var straigthLineHeight = 3
var yearsMarksHeight = 15
var yearsMarksWidth = 2
var yearsMarksSpacing = yearSize
var decadesMarksHeight = 30
var decadesMarksWidth = 5
var decadesMarksSpacing = yearSize * 10
var centuryMarksHeight = 80
var centuryMarksWidth = 13
var centuryMarksSpacing = yearSize * 100
var milleniumMarksHeight = 100
var milleniumMarksWidth = 13
var milleniumMarksSpacing = yearSize * 1000

//Marks
drawLine(true, straigthLineHeight)
drawLine(false, yearsMarksHeight, yearsMarksWidth, yearsMarksSpacing)
drawLine(false, decadesMarksHeight, decadesMarksWidth, decadesMarksSpacing)
drawLine(false, centuryMarksHeight, centuryMarksWidth, centuryMarksSpacing)
drawLine(false, milleniumMarksHeight, milleniumMarksWidth, milleniumMarksSpacing)

//Draw the timeline and markings
function drawLine(type, height, width, spacing)
{
    ctx.lineWidth = height
    if(type == false)
        ctx.setLineDash([width, spacing - width]);

    //D.C.
    ctx.beginPath();
    if (type == true)
        ctx.moveTo(0,0)
    else
        ctx.moveTo(-width / 2, height / 2);
    ctx.lineToInfinityInDirection(1, 0);
    ctx.stroke();
    
    //A.C.
    ctx.beginPath();
    if (type == true)
        ctx.moveTo(0,0)
    else
        ctx.moveTo(width / 2, height / 2);
    ctx.lineToInfinityInDirection(-1, 0);
    ctx.stroke();
}


var hue = 0;
function drawPerson(yPosition, birth, death, name){
    ctx.save();
    ctx.fillStyle = "hsl("+hue+",50%,50%,0.3)";
    var life = death - birth
    ctx.fillRect(birth * yearSize, -yPosition, life * yearSize, 50);
    //ctx.strokeStyle = "hsl("+hue+",50%,50%,1)";
    //ctx.strokeRect(xPosition, yPosition, width, height);
    ctx.restore();
    hue += 43;
    ctx.fillText(name, birth + 20, -yPosition + 20);
}

drawPerson(100,0,33,"Jesus Cristo")

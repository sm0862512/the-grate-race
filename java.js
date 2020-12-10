// alert("I am a js page!")
var timerID
var timerID2
function startit()
{


timerID = setInterval(car1, 50)
timerID2 = setInterval(car2, 50 )
}
var cntr = 0; //counter or incrementer

//varibles for the tennisball
var elem = document.getElementById('car1') //get the tennisball by the id
var pos = 0 //top position or vertical movement
var leftpos = 0 //left position or horizontal movement

//variables for the basketball
var elem2 = document.getElementById('car2') //get the basketball by the id
var pos2 = 0 //top position or vertical movement
var leftpos2 = 0 //left position or horizontal movement


//*** ALGORITHM ****/
var y=1;

//functions
function car2()
{
  //console.log("I'm a basketBall")
  //create a random number for the top position
  leftpos2 += (Math.ceil(Math.random()*50)) * y
  //console.log(pos)
  elem2.style.left = leftpos2 + "px" //move the basketball horizontally

  // if the pos is 350 we know we have hit an edge
  //so stop it
  if (leftpos2 > 1175) 
  {

    y=-1
  } else if (leftpos2 < 0)
  {
    y = 1;
  }

  if (pos2 > 1175) 
  {
    
    x = -1;
  } else if (pos2 < 0)
  {
    x = 1;
  }
}

//*** ALGORITHM ****/
var y2=1;


function car1()
{
  //cntr = cntr + 1
  cntr += 1
  //console.log("In here! " + cntr);

  // if (cntr == 50)
  // {
  //   clearInterval(timerID)
  // }



  //create a random number for the top position

  leftpos += (Math.ceil(Math.random()*50)) * y2
  //console.log(pos)
  elem.style.top = pos + "px" //move the tennisball vertically
  elem.style.left = leftpos + "px" //move the tennisball horizontally

  // if the pos is 350 we know we have hit an edge
  //so stop it
  if (leftpos > 1175) //has the tennis ball past the right edge
  {
    //clearInterval(timerID) //stop the tennisball timer
    y2 = -1
  } else if (leftpos < 0)
  {
    y2 = 1
  }


  if (pos > 350) // has the tennisball hit the bottom edge
  {
    //clearInterval(timerID) //stop the tennisball timer
    x2 = -1
  } else if (pos < 0)
  {
    x2 = 1
  }

  collide()
}

function collide()
{
//   if ( (Math.abs(pos - pos2) < 50) && (Math.abs(leftpos - leftpos2) < 50) && cntr > 100)
//   {
//     console.log("collide")
//     elem.src = "kapow-logo.png"
//     elem2.style.display = "none"
//     elem.style.width = "200px"
//     elem.style.height = "200px"
//     stopit()
//   }
}

function stopit()
{
  clearInterval(timerID)
  clearInterval(timerID2)
}

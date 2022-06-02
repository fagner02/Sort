var positions = []
var objs = []
var theChosenOnes = {}

var step = 25
var length = 500
var size = length/step
var radius = 8
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve,ms))
}
async function drawCircle(){
  var last = [0,0]
  var center = 
    radius*step+Math.round((size-(radius*2))/2)*step
for(var i = 360; i > -1; i--){
  
  var y = 
  Math.round(radius*(Math.sin((i*Math.PI)/180)))
  *step+center
  var x =
  Math.round(radius*(Math.cos((i*Math.PI)/180)))
  *step+center
  if(last[0] == x && last[1]==y){
    continue;
  }
  last = [x,y]

  var dot = document.createElement("div");
  dot.classList.add("dot")
  dot.id = i
  
  dot.style.transform = 
    `translate(${x}px, ${y}px)`
 
  document.querySelector(".box").appendChild(dot)
  theChosenOnes[x+" "+y] = dot;
  //console.log(theChosenOnes[x+" "+y])
  //console.log(x+" "+y)
  await sleep(10)
}
await sleep(1000)
setupMap();
}

async function setupMap(){
  var index = 0;
for(var i = 0; i < length; i+=step){
  for(var j = 0; j < length; j+=step){
    var obj = null;
    if(theChosenOnes[i+" "+j]){
      obj = theChosenOnes[i+" "+j]
    }
    
    positions.push(`${i}px,${j}px`);
    objs.push({index: index,obj:obj})
    index++;
  }}
  
  


objs.sort(() => {
  return Math.random() - .5} )
setPositions()
await sleep(500)
bubbleSort()
}

drawCircle()
async function setPositions(){
  for(var i=0;i<objs.length;i++){
    if(objs[i].obj){
      await sleep(10)
      objs[i].obj.style.transform = 
        `translate(${positions[i]})`
    }
  }
}
async function bubbleSort(){
  for(var i = 0; i < objs.length; i++){
    for(var j = i+1; j < objs.length; j++){
      if(objs[i].index > objs[j].index){
        var aux = objs[i]
        objs[i] = objs[j]
        
        if(objs[i].obj){
          
          objs[i].obj.style.transform = 
        `translate(${positions[i]})`
        await sleep(0)
        }
        objs[j] = aux
        if(objs[j].obj){
          objs[j].obj.style.transform = 
          `translate(${positions[j]})`
          await sleep(0)
        }
      }
    }
  }
}

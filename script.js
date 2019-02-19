var array = ["assets/1.png", "assets/2.png", "assets/3.png", "assets/4.png", "assets/5.png",]

var x=0


function switchy(){
  console.log('button clicked')
  x = x + 1
  if(array[x] == undefined){
    x = 0
  }
  document.getElementById('pic').src=array[x]
}
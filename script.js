 var main1 = document.querySelector("#main1");
var txt = document.querySelector("#main #txt h4")

var count = 0;
var high = 100;

        flag=0;
    setInterval(function(){
        if(count<100){
         if(count<9){
            count++;
            txt.innerHTML="0"+count;
         }
         else{
            count++;
            txt.innerHTML=count;
         }
        }
        
     },50)
   
        

    setInterval(function(){
       if(high>0 && count>99){
            high--;
            main1.style.height=high+"%";
            
       }
    },10)
    document.querySelector("#main").addEventListener("mouseover",function(dets){
        if(dets.target.id === "photo"){
            document.querySelector("#main3").style.display = "flex";
            console.log(dets.target)
        }
        
    })
    document.querySelector("#main").addEventListener("mouseover",function(dets){
        if(dets.target.id === "main3"){
            document.querySelector("#main3").style.display = "none";
            console.log(dets.target)
        }
        
    })

    var a = prompt("Enter a value");
    var b, sum = 0;
    var z = a;
    while(a > 0)
    {
      b = a % 10;
      sum = sum * 10 + b;
      a = parseInt(a / 10);
    }
    alert(sum);
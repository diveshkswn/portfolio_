var skillBox = document.querySelectorAll(".skill-box");


console.log(skillBox[0].getElementsByClassName("skill-article")[0]);
var sb=skillBox[0].getElementsByClassName("skill-article")[0];
// sb.classList.add("show");

for (var i=0; i<skillBox.length; i++){
    skillBox[i].addEventListener("mouseenter",function(){
        this.getElementsByClassName("skill-article")[0].style.display="block";
                this.getElementsByClassName("skill-article")[0].classList.add("show");

               

              
       
    });
     

    skillBox[i].addEventListener("mouseleave",function(){
        this.getElementsByClassName("skill-article")[0].style.display="none";
      
               

               

              
       
    });


}
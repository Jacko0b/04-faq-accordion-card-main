// const question = document.getElementById("question");

var questionArray = document.getElementsByClassName('question-section');
var i;

for(i=0;i<questionArray.length;i++){
    questionArray[i].addEventListener("click",function(){
        
        

        //toggling the question's paragraph
        var panel =this.nextElementSibling;
        var question = this.firstElementChild;
        var arrow = this.lastElementChild;
        panel.classList.toggle("hidden");
        arrow.classList.toggle("arrow-flip");
        question.classList.toggle("question-active");
    });
}
function checkAnswer(){
    const correctAnswer='4';
    const userAnswer = document.querySelector('input[name="quiz"]:checked').value;
    const feedBacked=document.getElementById('feedback');
    if(userAnswer===correctAnswer){
        feedBacked.textcontent="correct!Welldone.";
    }else{
        feedBacked.textcontent="That's incorrect.Try again!";
    }

}
const submitButton=document.getElementById("submit-Answer");
submitButton.addEventListener("click",checkAnswer);

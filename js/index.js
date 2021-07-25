let animateArrow = function(arrowElement, activate){
    if(activate){
        arrowElement.style.transform = 'rotate(180deg)';
    }
    else{
        arrowElement.style.transform = 'rotate(0deg)'
    }
}

let toggleAnswers = function(e){
    e.classList.toggle('selected-question');
    let answerElement = e.nextElementSibling;
    if(answerElement.style.maxHeight){
        answerElement.style.maxHeight = null;
        answerElement.style.margin= '0 0 1rem 0';
        animateArrow(e.children[0], false);
    }
    else{
        answerElement.style.maxHeight = (answerElement.scrollHeight / parseFloat((getComputedStyle(document.documentElement).fontSize)) + 'rem');
        animateArrow(e.children[0], true);
        answerElement.style.margin = '0.7rem 0 1rem 0';
    }
}

let answersContainer = document.getElementsByClassName('question');

// toggleAnswers(answersContainer[1]);


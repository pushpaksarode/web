
function cricBook(){
    let score=0;
    let counter=0;
    return function(new_score){
        counter++;
        if(counter<=5&&new_score%2===0){
            score=score+new_score;
        }
        return score;
    };
}

const player1=cricBook();
const player2=cricBook();

function addScore1(){
    let current_score;
    current_score=player1(parseInt(document.getElementById("score1").value));
    document.getElementById("score_counter1").innerHTML=current_score;
}

function addScore2(){
    let current_score;
    current_score=player2(parseInt(document.getElementById("score2").value));
    document.getElementById("score_counter2").innerHTML=current_score;
}

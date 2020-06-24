/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var score = [0,0];
var turn = 0;
var score_holder = 0;

document.querySelector('.btn-roll').addEventListener('click',function(){
    dice = Math.floor(Math.random()*6)+1;
    score_holder +=dice;
    let dice_src = 'dice-'+dice+'.png';
    document.getElementById('score-'+turn).innerHTML = score_holder;
    document.querySelector('.dice').src =  dice_src;
    if(dice==1){
        score_holder =0;
        turn = turn==0?1:0;
        if(turn===1){
            document.querySelector('.player-0-panel').classList.remove('active');
            document.querySelector('.player-1-panel').classList.add('active');
        }
        else{
            document.querySelector('.player-1-panel').classList.remove('active');
            document.querySelector('.player-0-panel').classList.add('active');
        }
    }
});
document.querySelector('.btn-hold').addEventListener('click',function(){
    score[turn] += score_holder;
    document.getElementById('current-'+turn).innerHTML = score[turn];
    document.getElementById('score-'+turn).innerHTML = 0;
    score_holder = 0;
    if(score[turn]>=100){
        document.querySelector('.winner').textContent = "  Winner is player "+Number(turn+1);
    }
    turn = turn==0?1:0;
    if(turn===1){
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.add('active');
    }
    else{
        document.querySelector('.player-1-panel').classList.remove('active');
        document.querySelector('.player-0-panel').classList.add('active');
    }    
});


document.querySelector('.btn-new').addEventListener('click',function(){
    document.getElementById('current-0').innerHTML = 0;
    document.getElementById('current-1').innerHTML = 0;
    document.getElementById('score-0').innerHTML = 0;
    document.getElementById('score-1').innerHTML = 0;
    score_holder = 0;
    turn = 0;
    document.querySelector('.winner').textContent = "";
});


const faces = [0, 500, 400, 300, 200, 100];
var dealer = document.createElement("div");
dealer.setAttribute('id', 'answer');
dealer.setAttribute('class', 'board');
document.querySelector('div#app').appendChild(dealer);

const gameConfig = {
    maxNum : 6,
    ansType : 'number',
}


function jeu(jetNumber) {
    const nbrans = 5;
    let result; 
    result = 0;
    let total;
    total = 0 ;
    for(var i = 0; i<jetNumber; i++){
    const jet = document.createElement("div");
    jet.className = 'dice';
    document.querySelector('div#proposition').appendChild(jet);
    result = Math.floor(Math.random()*6);
    total = total+result+1;
    document.getElementsByClassName('dice')[i].style.backgroundPositionX = `${faces[result]}px`;
    }
    //add here the 1 and 2 execption to add an argument to generate ans and generate butt

    generateAnsButt(total);

}

function generateAnsButt(total){
const nbrans = generateAnsArr(total);
console.log(nbrans);
let movin = Math.floor(Math.random()*3);
console.log(movin);
console.log(total);

//hardcoded exception for 1 and 2
if (nbrans[0]=== total){
    movin = 0;
}   else if (nbrans[1]=== total){
    movin = Math.floor(Math.random()*2);
}
for(var i =0; i<3; i++){
    const ans = document.createElement("p");    
    ans.className = 'ansbutt';
    ans.textContent = nbrans[i + movin];
    if (nbrans[i + movin] === total){
        ans.id = 'winner';
    }
document.querySelector('div#answer').appendChild(ans);
}
}

// generate an array of 5 item with the third one being the parameter(unless its 1 or 2 to avoid negative proposition)
function generateAnsArr(resultat){
    let ansarray= new Array(5);

//also hardcoded exception for 1 and 2
    if(resultat===1){
        resultat++;
    }
    if(resultat===2){
        resultat++;
    }
    resultat = resultat-2;
    for(var i=0; i<5; i++){
        ansarray[i] = resultat+i;
    }
    console.log(ansarray);
    return ansarray;
}

jeu(1);

// put a click listener to the answer propositions
const ansSelection = document.querySelectorAll('.ansbutt');
console.log(ansSelection);
ansSelection.forEach(element => {
    element.addEventListener('click', resultat);
});

// verify of the clicked element is the correct answer and give result
function resultat (EventTarget){
    console.log(EventTarget);
    if (EventTarget.target.id === 'winner'){
        alert('Bravo joue encore');
        document.location.reload();
    } else {
        EventTarget.target.className = 'badAns'
    }
}



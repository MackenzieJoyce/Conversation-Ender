document.querySelector('#animals').addEventListener('click', answerAnimal)
document.querySelector('#improving').addEventListener('click', answerImprove)
document.querySelector('#doubleText').addEventListener('click', answerHello)


let popUp = document.querySelector('.revenge')


document.querySelector('#xOut').addEventListener('click', closeWindow)
// let button = document.querySelector('.start');
// let body = document.querySelector('.shutDown');
// let isHidden = true;
document.querySelector('.shutDown').addEventListener('click', blackScreen)



//Animal click 
function answerAnimal() { 
    document.querySelector('#placeForMyAnswer').textContent = 'You: Just organizing my Pokemon deck after this sick tournament on Saturday. What are you doing?';

    document.querySelector('#animals').style.display = 'none'
    document.querySelector('#improving').style.display = 'none'
    document.querySelector('#badEnd').style.display = 'none'
    document.querySelector('#doubleText').style.display = 'inline'
}


//Improvement click 
function answerImprove() { 
    document.querySelector('#placeForMyAnswer').innerHTML = 'You: Just updating my DND character sheet to reflect the level up we got after defeating that wicked Beholder! What are you doing?' 

    document.querySelector('#animals').style.display = 'none'
    document.querySelector('#improving').style.display = 'none'
    document.querySelector('#doubleText').style.display = 'inline'
}


//Desperation click 
function answerHello() { 
    document.querySelector('#desperateAnswer').innerHTML = 'You: Hello?'

    document.querySelector('#doubleText').style.display = 'none'
    document.querySelector('#thirdOption').style.display = 'inline'
    document.querySelector('#badEnd').style.display = 'inline'
}


//Bad end click 
// function popUp() { 
//     document.querySelector('#revenge').style.display = 'inline'
    
//     document.querySelector('.aim').style.display = 'none'
//     document.querySelector('#animals').style.display = 'none'
//     document.querySelector('#improving').style.display = 'none'
//     document.querySelector('#doubleText').style.display = 'none'
//     document.querySelector('#thirdOption').style.display = 'none'
// }


//Close window 
function closeWindow() { 
    document.querySelector('.aim').style.visibility = 'hidden'

    document.querySelector('#animals').style.display = 'none'
    document.querySelector('#improving').style.display = 'none'
    document.querySelector('#doubleText').style.display = 'none'
    document.querySelector('#thirdOption').style.display = 'none'
    document.querySelector('.taskbar').style.display = 'absolute'
}


//toggle the start button
// button.addEventListener('click', function () {
//     if (isHidden) {
//         '.shutDown'.style.display = 'hidden';
//     } else {
//         '.shutDown'.style.display = 'inline';
//     }
//     isHidden = !isHidden;
// });


//Shut down 
function blackScreen() { 
    document.querySelector('#background').style.backgroundColor = 'black'

    document.querySelector('#animals').style.display = 'none'
    document.querySelector('#improving').style.display = 'none'
    document.querySelector('#doubleText').style.display = 'none'
    document.querySelector('#thirdOption').style.display = 'none'
    document.querySelector('.taskbar').style.display = 'none'
    document.querySelector('.shutDown').style.display = 'none'
    document.querySelector('.aim').style.display = 'none'
}



//if #badEnd is clicked --> .aim is display = 'none' + .revenge display = 'inline' (essentially: function closeWindow)
// function popUp(#badEnd) { 
//     let openWindow; 
//     if (document.querySelector.addEventListener('click', #badEnd)) { 

//     }
// }
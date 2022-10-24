/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Gem_Puzzle/js/card-animation.js":
/*!*****************************************!*\
  !*** ./Gem_Puzzle/js/card-animation.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "animationCard": () => (/* binding */ animationCard)
/* harmony export */ });
/* harmony import */ var _createAll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createAll */ "./Gem_Puzzle/js/createAll.js");


async function animationCard(card, destination){
    let newCard = card.cloneNode(true)
    let coord= card.getBoundingClientRect();
    let coordLeft= coord.left + window.pageXOffset
    let coordTop= coord.top + window.pageYOffset
   // card.style.display='none';

    document.body.append(newCard)
    newCard.style.position = 'absolute';
    newCard.style.left=coordLeft+'px'
    newCard.style.top=coordTop +'px'
    newCard.style.width= coord.width+'px'
    newCard.style.height=coord.height/1.5+'px'

    switch(destination){
        case('left'):
        newCard.className= 'card card_right'
        let k1=2
        let timer1= setInterval(()=>{
        newCard.style.left= coordLeft-(3.5*coord.width)/k1+'px'
        k1-=1
        },250)
        setTimeout(()=> clearInterval(timer1),600)
        break;
        case('right'):
        newCard.className= 'card card_right'
        let k2=2
        let timer2= setInterval(()=>{
        newCard.style.left= coordLeft+(3.5*coord.width)/k2+'px'
        k2-=1
        },250)
        setTimeout(()=> clearInterval(timer2),600)
        break;
        case('top'):
        newCard.className= 'card card_right'
        let k3=2
        let timer3= setInterval(()=>{
        newCard.style.top= coordTop-(coord.top)/k3+'px'
        k3-=1
        },250)
        setTimeout(()=> clearInterval(timer3),600)
        break;
        case('bottom'):
        newCard.className= 'card card_right'
        let k4=2
        let timer4= setInterval(()=>{
        newCard.style.top= coordTop+(1.7*coord.top)/k4+'px'
        k4-=1
        },250)
        setTimeout(()=> clearInterval(timer4),600)
        break;
    }
    setTimeout(()=>{
        newCard.remove()
      //  card.style.display='block';
        resolve('done')
    },500)
}

/***/ }),

/***/ "./Gem_Puzzle/js/createAll.js":
/*!************************************!*\
  !*** ./Gem_Puzzle/js/createAll.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buttonPlace": () => (/* binding */ buttonPlace),
/* harmony export */   "buttonResult": () => (/* binding */ buttonResult),
/* harmony export */   "buttonSave": () => (/* binding */ buttonSave),
/* harmony export */   "buttonSaveResult": () => (/* binding */ buttonSaveResult),
/* harmony export */   "buttonShuffle": () => (/* binding */ buttonShuffle),
/* harmony export */   "buttonSound": () => (/* binding */ buttonSound),
/* harmony export */   "buttonStop": () => (/* binding */ buttonStop),
/* harmony export */   "endGame": () => (/* binding */ endGame),
/* harmony export */   "endGameWrapper": () => (/* binding */ endGameWrapper),
/* harmony export */   "htmlBodyWrapper": () => (/* binding */ htmlBodyWrapper),
/* harmony export */   "inputSaveResult": () => (/* binding */ inputSaveResult),
/* harmony export */   "movesCount": () => (/* binding */ movesCount),
/* harmony export */   "nowSize": () => (/* binding */ nowSize),
/* harmony export */   "otherSize": () => (/* binding */ otherSize),
/* harmony export */   "playingField": () => (/* binding */ playingField),
/* harmony export */   "playingPlace": () => (/* binding */ playingPlace),
/* harmony export */   "resultsDisplay": () => (/* binding */ resultsDisplay),
/* harmony export */   "size_eight": () => (/* binding */ size_eight),
/* harmony export */   "size_five": () => (/* binding */ size_five),
/* harmony export */   "size_four": () => (/* binding */ size_four),
/* harmony export */   "size_seven": () => (/* binding */ size_seven),
/* harmony export */   "size_six": () => (/* binding */ size_six),
/* harmony export */   "size_three": () => (/* binding */ size_three),
/* harmony export */   "timer": () => (/* binding */ timer),
/* harmony export */   "timerPlace": () => (/* binding */ timerPlace)
/* harmony export */ });
let htmlBodyWrapper =  document.createElement('div');
htmlBodyWrapper.className='wrapper wrapper__body';
let playingField= document.createElement('div');
playingField.className="wrapper playing-field";
let buttonPlace= document.createElement('div');
buttonPlace.className="wrapper button-place";
let timerPlace=document.createElement('div');
timerPlace.className="wrapper timer-place";
let playingPlace= document.createElement('div');
playingPlace.className='wrapper playing-place'
let nowSize= document.createElement('div');
nowSize.className='wrapper now_size';
nowSize.textContent='Frame size: 4x4';
let otherSize= document.createElement('div');
otherSize.className='wrapper other_size';
otherSize.textContent='Other sizes: ';
let size_three=document.createElement('a');
size_three.className='size-choose 3x3'
size_three.href='#';
size_three.textContent='3x3 '
let size_four=document.createElement('a');
size_four.className='size-choose 4x4'
size_four.href='#';
size_four.textContent='4x4 '
let size_five=document.createElement('a');
size_five.className='size-choose 5x5'
size_five.href='#';
size_five.textContent='5x5 '
let size_six=document.createElement('a');
size_six.className='size-choose 6x6'
size_six.href='#';
size_six.textContent='6x6 '
let size_seven=document.createElement('a');
size_seven.className='size-choose 7x7'
size_seven.href='#';
size_seven.textContent='7x7 '
let size_eight=document.createElement('a');
size_eight.className='size-choose 8x8'
size_eight.href='#';
size_eight.textContent='8x8'
let movesCount=document.createElement('div');
movesCount.className='count-moves';
movesCount.innerHTML='Moves: 0';
let timer=document.createElement('div');
timer.className='timer';
timer.innerHTML='Time:00:00';
let endGame= document.createElement('div');
endGame.className='end-game-display';
let endGameWrapper=document.createElement('div');
endGameWrapper.className='wrapper end-gameWrapper'
let buttonShuffle= document.createElement('div');
buttonShuffle.className='button button-shuffle'
buttonShuffle.textContent='Shuffle and start'
let buttonStop= document.createElement('div');
buttonStop.className='button button-stop'
buttonStop.textContent='Stop'
let buttonSave= document.createElement('div');
buttonSave.className='button button-save'
buttonSave.textContent='Save'
let buttonResult= document.createElement('div');
buttonResult.className='button button-result'
buttonResult.textContent='Results'
let buttonSound= document.createElement('div');
buttonSound.className='button button-Sound'
buttonSound.textContent='Sound'
let buttonSaveResult= document.createElement('div');
buttonSaveResult.className= 'button button-Save_Result';
buttonSaveResult.textContent= 'Save my result';
let inputSaveResult= document.createElement('input');
inputSaveResult.className= 'input input-Save_Result';
let resultsDisplay= document.createElement('div')
resultsDisplay.className='results-display'
resultsDisplay.textContent='Results:'
resultsDisplay.setAttribute('style','white-space: pre-line')


document.body.append(htmlBodyWrapper);
document.body.append(endGame);
document.body.append(resultsDisplay)
htmlBodyWrapper.append(playingField);
playingField.append(buttonPlace);
playingField.append(timerPlace);
playingField.append(playingPlace);
playingField.append(nowSize);
playingField.append(otherSize);
timerPlace.append(movesCount);
timerPlace.append(timer);
buttonPlace.append(buttonShuffle);
buttonPlace.append(buttonSave);
buttonPlace.append(buttonStop);
buttonPlace.append(buttonResult);
buttonPlace.append(buttonSound);
endGameWrapper.append(inputSaveResult);
endGameWrapper.append(buttonSaveResult);
otherSize.append(size_three);
otherSize.append(size_four);
otherSize.append(size_five);
otherSize.append(size_six);
otherSize.append(size_seven);
otherSize.append(size_eight);

/***/ }),

/***/ "./Gem_Puzzle/js/drag_n_drop.js":
/*!**************************************!*\
  !*** ./Gem_Puzzle/js/drag_n_drop.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "drag": () => (/* binding */ drag)
/* harmony export */ });
/* harmony import */ var _createAll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createAll */ "./Gem_Puzzle/js/createAll.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./Gem_Puzzle/js/game.js");



function drag(event, ourNumbers){
    
    let targetCard= event.target

    if(!targetCard.classList.contains('card') || targetCard.classList.contains('card_empty')) return false;

    let shiftX = event.clientX - targetCard.getBoundingClientRect().left;
    let shiftY = event.clientY - targetCard.getBoundingClientRect().top;

    targetCard.style.position = 'absolute';
    targetCard.style.zIndex = 1000;
    _createAll__WEBPACK_IMPORTED_MODULE_0__.playingPlace.append(targetCard);

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
        targetCard.style.left = pageX - shiftX + 'px';
        targetCard.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event,ourNumbers) {
        moveAt(event.pageX, event.pageY);

        targetCard.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        targetCard.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.card_empty');

        if(droppableBelow) (0,_game__WEBPACK_IMPORTED_MODULE_1__.cardShift)(targetCard, ourNumbers)
    }

    document.addEventListener('mousemove', onMouseMove(event,ourNumbers));

    targetCard.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        targetCard.onmouseup = null;
  };
}

/***/ }),

/***/ "./Gem_Puzzle/js/game.js":
/*!*******************************!*\
  !*** ./Gem_Puzzle/js/game.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cardShift": () => (/* binding */ cardShift)
/* harmony export */ });
/* harmony import */ var _moves_n_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moves_n_timer */ "./Gem_Puzzle/js/moves_n_timer.js");
/* harmony import */ var _createAll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createAll */ "./Gem_Puzzle/js/createAll.js");
/* harmony import */ var _card_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card-animation */ "./Gem_Puzzle/js/card-animation.js");
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./init */ "./Gem_Puzzle/js/init.js");
/* harmony import */ var _isWin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isWin */ "./Gem_Puzzle/js/isWin.js");






let canAudio=true
_createAll__WEBPACK_IMPORTED_MODULE_1__.buttonSound.addEventListener('click',function(){
    canAudio= !canAudio
})


async function cardShift(target, ourNumbers){
    if(!target.classList.contains('card')) {
        return false;
    }
    
    let number = +target.innerHTML

    let audioStone= new Audio()
    audioStone.src='audio/stone.mp3'

    if(ourNumbers.indexOf(number) != ourNumbers.length-1 &&
    ourNumbers[ourNumbers.indexOf(number)+1]==ourNumbers.length  &&
    (((ourNumbers.indexOf(number)+1) % (ourNumbers.length**(1/2))) != 0)){

        let promise= new Promise(function(resolve,reject){
            (0,_card_animation__WEBPACK_IMPORTED_MODULE_2__.animationCard)(target,'right')
            if(canAudio) audioStone.autoplay = true;
            setTimeout(()=>{
                ourNumbers[ourNumbers.indexOf(number)+1]=ourNumbers[ourNumbers.indexOf(number)]
                ourNumbers[ourNumbers.indexOf(number)] = ourNumbers.length
                
                resolve('done')
            },500)
        })
        let result= await promise

        _createAll__WEBPACK_IMPORTED_MODULE_1__.playingPlace.replaceChildren();
        (0,_init__WEBPACK_IMPORTED_MODULE_3__.replaceCard)(ourNumbers);
        (0,_isWin__WEBPACK_IMPORTED_MODULE_4__.isWin)(ourNumbers);
        (0,_moves_n_timer__WEBPACK_IMPORTED_MODULE_0__.increaseCount)()
        

    }
    else if(ourNumbers.indexOf(number) != 0 &&
    ourNumbers[ourNumbers.indexOf(number)-1]==ourNumbers.length &&
    (ourNumbers.indexOf(number) % (ourNumbers.length**(1/2))) != 0){
        
        let promise= new Promise(function(resolve,reject){
            if(canAudio) audioStone.autoplay = true;
            setTimeout(()=>{
                ourNumbers[ourNumbers.indexOf(number)-1]=ourNumbers[ourNumbers.indexOf(number)]
                ourNumbers[ourNumbers.indexOf(number)+1] = ourNumbers.length
                resolve('done')
            },500)
            ;(0,_card_animation__WEBPACK_IMPORTED_MODULE_2__.animationCard)(target,'left')
        })
        let result= await promise

        _createAll__WEBPACK_IMPORTED_MODULE_1__.playingPlace.replaceChildren();
        (0,_init__WEBPACK_IMPORTED_MODULE_3__.replaceCard)(ourNumbers);
        (0,_isWin__WEBPACK_IMPORTED_MODULE_4__.isWin)(ourNumbers);
        (0,_moves_n_timer__WEBPACK_IMPORTED_MODULE_0__.increaseCount)()
        

    }
    else if(ourNumbers.indexOf(number)+ourNumbers.length**(1/2) <= ourNumbers.length-1 &&
    ourNumbers[ourNumbers.indexOf(number) + ourNumbers.length**(1/2)]==ourNumbers.length){
        
        let promise= new Promise(function(resolve,reject){
            if(canAudio) audioStone.autoplay = true;
            setTimeout(()=>{
                ourNumbers[ourNumbers.indexOf(number)+ourNumbers.length**(1/2)]=ourNumbers[ourNumbers.indexOf(number)]
                ourNumbers[ourNumbers.indexOf(number)] = ourNumbers.length
                resolve('done')
            },500)
            ;(0,_card_animation__WEBPACK_IMPORTED_MODULE_2__.animationCard)(target,'bottom')
        })
        let result= await promise

        _createAll__WEBPACK_IMPORTED_MODULE_1__.playingPlace.replaceChildren();
        (0,_init__WEBPACK_IMPORTED_MODULE_3__.replaceCard)(ourNumbers);
        (0,_isWin__WEBPACK_IMPORTED_MODULE_4__.isWin)(ourNumbers);
        (0,_moves_n_timer__WEBPACK_IMPORTED_MODULE_0__.increaseCount)()
        

    }
    else if(ourNumbers.indexOf(number)-ourNumbers.length**(1/2) >= 0 &&
    ourNumbers[ourNumbers.indexOf(number) - ourNumbers.length**(1/2)]==ourNumbers.length){
        
        let promise= new Promise(function(resolve,reject){
            if(canAudio) audioStone.autoplay = true;
            setTimeout(()=>{
                ourNumbers[ourNumbers.indexOf(number)-ourNumbers.length**(1/2)]=ourNumbers[ourNumbers.indexOf(number)]
                ourNumbers[ourNumbers.indexOf(number)+ourNumbers.length**(1/2)] = ourNumbers.length
                resolve('done')
            },500)
            ;(0,_card_animation__WEBPACK_IMPORTED_MODULE_2__.animationCard)(target,'top')
        })
        let result= await promise

        _createAll__WEBPACK_IMPORTED_MODULE_1__.playingPlace.replaceChildren();
        (0,_init__WEBPACK_IMPORTED_MODULE_3__.replaceCard)(ourNumbers);
        (0,_isWin__WEBPACK_IMPORTED_MODULE_4__.isWin)(ourNumbers);
        (0,_moves_n_timer__WEBPACK_IMPORTED_MODULE_0__.increaseCount)()
        
    }
}


/***/ }),

/***/ "./Gem_Puzzle/js/init.js":
/*!*******************************!*\
  !*** ./Gem_Puzzle/js/init.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "replaceCard": () => (/* binding */ replaceCard)
/* harmony export */ });
/* harmony import */ var _placeCards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./placeCards */ "./Gem_Puzzle/js/placeCards.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./Gem_Puzzle/js/game.js");
/* harmony import */ var _isWin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isWin */ "./Gem_Puzzle/js/isWin.js");
/* harmony import */ var _createAll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createAll */ "./Gem_Puzzle/js/createAll.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./Gem_Puzzle/js/save.js");
/* harmony import */ var _drag_n_drop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./drag_n_drop */ "./Gem_Puzzle/js/drag_n_drop.js");
/* harmony import */ var _size__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./size */ "./Gem_Puzzle/js/size.js");








let ourNumbers= localStorage.getItem('save') ? localStorage.getItem('save').split(',').map((Element)=> {return +Element}) : (0,_placeCards__WEBPACK_IMPORTED_MODULE_0__.placeCards)();

function replaceCard(ourNumbers){

ourNumbers.forEach((number)=>{
    let numberElement = document.createElement('div')
    if(number != ourNumbers.length){
        numberElement.innerHTML = number
        numberElement.className = `card ${number}`
        numberElement.draggable= true
    }else{
        //numberElement.innerHTML = number
        numberElement.className = `card card_empty`
    }
    _createAll__WEBPACK_IMPORTED_MODULE_3__.playingPlace.append(numberElement)
})
}

replaceCard(ourNumbers)

_createAll__WEBPACK_IMPORTED_MODULE_3__.playingPlace.addEventListener('click',function (event){

    if(!_isWin__WEBPACK_IMPORTED_MODULE_2__.gameStop){
        (0,_game__WEBPACK_IMPORTED_MODULE_1__.cardShift)(event.target, ourNumbers);
    }

})
// playingPlace.addEventListener('mousedown',function(event){
//     event.preventDefault()
//     if(!gameStop){
//         drag(event, ourNumbers);
//         //playingPlace.replaceChildren();
//         //replaceCard(ourNumbers);
//         //isWin(ourNumbers);
//     }

// })
_createAll__WEBPACK_IMPORTED_MODULE_3__.playingPlace.ondragstart = function() {
    return false;
  };

_createAll__WEBPACK_IMPORTED_MODULE_3__.endGame.addEventListener('click',function(){
    location.reload()
})

_createAll__WEBPACK_IMPORTED_MODULE_3__.buttonSave.addEventListener('click', function(){
    ;(0,_save__WEBPACK_IMPORTED_MODULE_4__.saveGame)(ourNumbers);
})

_createAll__WEBPACK_IMPORTED_MODULE_3__.buttonShuffle.addEventListener('click',function(){
    localStorage.removeItem ('save');
    localStorage.removeItem ('sec');
    localStorage.removeItem ('min');
    localStorage.removeItem ('countOfMoves');
    
    location.reload();
})

_createAll__WEBPACK_IMPORTED_MODULE_3__.otherSize.addEventListener('click',function(event){
    event.preventDefault()
    ourNumbers = (0,_size__WEBPACK_IMPORTED_MODULE_6__.chooseSize)(event.target)
    _createAll__WEBPACK_IMPORTED_MODULE_3__.playingPlace.replaceChildren()
    replaceCard(ourNumbers)
})

/***/ }),

/***/ "./Gem_Puzzle/js/isWin.js":
/*!********************************!*\
  !*** ./Gem_Puzzle/js/isWin.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameStop": () => (/* binding */ gameStop),
/* harmony export */   "isWin": () => (/* binding */ isWin)
/* harmony export */ });
/* harmony import */ var _createAll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createAll */ "./Gem_Puzzle/js/createAll.js");
/* harmony import */ var _moves_n_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moves_n_timer */ "./Gem_Puzzle/js/moves_n_timer.js");



let gameStop = false


_createAll__WEBPACK_IMPORTED_MODULE_0__.buttonStop.addEventListener('click',function(){
    gameStop = !gameStop
    if(!gameStop) (0,_moves_n_timer__WEBPACK_IMPORTED_MODULE_1__.timerStart)()
})

function isWin(ourNumbers){

    let done = true;
    
    ourNumbers.forEach((number,index)=>{
        if(index!=0 && number - ourNumbers[index-1] !== 1) done = false
    })

    if(done){

        gameStop=true
        _createAll__WEBPACK_IMPORTED_MODULE_0__.endGame.style.display = 'block';
        _createAll__WEBPACK_IMPORTED_MODULE_0__.endGame.innerHTML = `Hurrah! You have solved the puzzle for ${_moves_n_timer__WEBPACK_IMPORTED_MODULE_1__.min}:${_moves_n_timer__WEBPACK_IMPORTED_MODULE_1__.sec}  and ${_moves_n_timer__WEBPACK_IMPORTED_MODULE_1__.countOfMoves} moves!`
        _createAll__WEBPACK_IMPORTED_MODULE_0__.endGame.append(_createAll__WEBPACK_IMPORTED_MODULE_0__.endGameWrapper)
    }
}

_createAll__WEBPACK_IMPORTED_MODULE_0__.buttonSaveResult.addEventListener('click',function(){
    `Name:${_createAll__WEBPACK_IMPORTED_MODULE_0__.inputSaveResult.value} Time:${_moves_n_timer__WEBPACK_IMPORTED_MODULE_1__.min}:${_moves_n_timer__WEBPACK_IMPORTED_MODULE_1__.sec} Moves:${_moves_n_timer__WEBPACK_IMPORTED_MODULE_1__.countOfMoves}`
    localStorage.setItem('records', localStorage.getItem('records') != null ? localStorage.getItem('records')+`Name:${_createAll__WEBPACK_IMPORTED_MODULE_0__.inputSaveResult.value} Time:${_moves_n_timer__WEBPACK_IMPORTED_MODULE_1__.min}:${_moves_n_timer__WEBPACK_IMPORTED_MODULE_1__.sec} Moves:${_moves_n_timer__WEBPACK_IMPORTED_MODULE_1__.countOfMoves} \n`  : `Name:${_createAll__WEBPACK_IMPORTED_MODULE_0__.inputSaveResult.value} Time:${_moves_n_timer__WEBPACK_IMPORTED_MODULE_1__.min}:${_moves_n_timer__WEBPACK_IMPORTED_MODULE_1__.sec} Moves:${_moves_n_timer__WEBPACK_IMPORTED_MODULE_1__.countOfMoves} \n`)
})

_createAll__WEBPACK_IMPORTED_MODULE_0__.resultsDisplay.addEventListener('click',function(){
    _createAll__WEBPACK_IMPORTED_MODULE_0__.resultsDisplay.style.display= 'none'
})

_createAll__WEBPACK_IMPORTED_MODULE_0__.buttonResult.addEventListener('click',function(event){
    event.stopPropagation()
    _createAll__WEBPACK_IMPORTED_MODULE_0__.resultsDisplay.style.display='block';

    if(localStorage.getItem('records')!=null) {
        _createAll__WEBPACK_IMPORTED_MODULE_0__.resultsDisplay.textContent= 'Results:\n' + localStorage.getItem('records')
    }
})

_createAll__WEBPACK_IMPORTED_MODULE_0__.inputSaveResult.addEventListener('click',function(event){
    event.stopPropagation()
})

/***/ }),

/***/ "./Gem_Puzzle/js/moves_n_timer.js":
/*!****************************************!*\
  !*** ./Gem_Puzzle/js/moves_n_timer.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "countOfMoves": () => (/* binding */ countOfMoves),
/* harmony export */   "increaseCount": () => (/* binding */ increaseCount),
/* harmony export */   "min": () => (/* binding */ min),
/* harmony export */   "sec": () => (/* binding */ sec),
/* harmony export */   "timerStart": () => (/* binding */ timerStart)
/* harmony export */ });
/* harmony import */ var _createAll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createAll */ "./Gem_Puzzle/js/createAll.js");
/* harmony import */ var _isWin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isWin */ "./Gem_Puzzle/js/isWin.js");



let countOfMoves=localStorage.getItem('countOfMoves') || 0;
var sec =localStorage.getItem('sec') || 0;
var min =localStorage.getItem('min') ||0;

if(countOfMoves!=0){
    _createAll__WEBPACK_IMPORTED_MODULE_0__.movesCount.innerHTML= 'Moves:'+countOfMoves;
    _createAll__WEBPACK_IMPORTED_MODULE_0__.timer.innerHTML= 'Time' 
    + (min > 9 ? min : "0" + min)
    + ":" + (sec > 9 ? sec : "0" + sec);
}

function increaseCount(){
    countOfMoves++
    _createAll__WEBPACK_IMPORTED_MODULE_0__.movesCount.innerHTML= 'Moves:'+countOfMoves;
}

function timerStart(){
    if(!_isWin__WEBPACK_IMPORTED_MODULE_1__.gameStop) setTimeout(_place,1000);
}

function _tick(){
    sec++;
    if (sec >= 60) {
        sec = 0;
        min++;
    }
}

function _place(){
    _tick()
    _createAll__WEBPACK_IMPORTED_MODULE_0__.timer.innerHTML= 'Time' 
    + (min > 9 ? min : "0" + min)
    + ":" + (sec > 9 ? sec : "0" + sec);
    timerStart()
}
timerStart()

/***/ }),

/***/ "./Gem_Puzzle/js/placeCards.js":
/*!*************************************!*\
  !*** ./Gem_Puzzle/js/placeCards.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "placeCards": () => (/* binding */ placeCards)
/* harmony export */ });
function placeCards(amount=16){
    let NumbersAll = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,
    32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64]
    
    let Numbers16 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    let Numbers=NumbersAll.slice(0,amount)

    do{
        Numbers = _shuffle(Numbers)
    }while( _try(Numbers)==false)
    
    return Numbers
}

function _shuffle(Numbers){
    var currentIndex = Numbers.length, temporaryValue, randomIndex

  while (currentIndex != 0) {

    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1;

    temporaryValue = Numbers[currentIndex];
    Numbers[currentIndex] = Numbers[randomIndex]
    Numbers[randomIndex] = temporaryValue
  }

  return Numbers;
}

function _try(Numbers){
    let N=0
    let e= Numbers.indexOf(Numbers.length) 
    let k=Numbers.length**(1/2)

    do{
        k--
    }while(e<k*Numbers.length**(1/2))
    
    e=k+1

    Numbers.forEach((number,index)=>{
        let count=0

        for(let i=index+1; i<Numbers.length;i++){
            if(Numbers[i] < number) count++
        }
        N+=count
    })

    N+=e

    if(N%2==0) return true
    return false
}





/***/ }),

/***/ "./Gem_Puzzle/js/save.js":
/*!*******************************!*\
  !*** ./Gem_Puzzle/js/save.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "saveGame": () => (/* binding */ saveGame)
/* harmony export */ });
/* harmony import */ var _createAll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createAll */ "./Gem_Puzzle/js/createAll.js");
/* harmony import */ var _moves_n_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moves_n_timer */ "./Gem_Puzzle/js/moves_n_timer.js");

 


function saveGame(ourNumbers){
    localStorage.setItem('save', ourNumbers)
    localStorage.setItem('sec', _moves_n_timer__WEBPACK_IMPORTED_MODULE_1__.sec)
    localStorage.setItem('min', _moves_n_timer__WEBPACK_IMPORTED_MODULE_1__.min)
    localStorage.setItem('countOfMoves', _moves_n_timer__WEBPACK_IMPORTED_MODULE_1__.countOfMoves)
}

/***/ }),

/***/ "./Gem_Puzzle/js/size.js":
/*!*******************************!*\
  !*** ./Gem_Puzzle/js/size.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "chooseSize": () => (/* binding */ chooseSize)
/* harmony export */ });
/* harmony import */ var _placeCards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./placeCards */ "./Gem_Puzzle/js/placeCards.js");
/* harmony import */ var _createAll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createAll */ "./Gem_Puzzle/js/createAll.js");



function chooseSize(size_feild){
    let sizee= size_feild.innerHTML.split('x')

    switch(sizee[0]*sizee[1]){
        case 9:
            _createAll__WEBPACK_IMPORTED_MODULE_1__.playingPlace.style.gridTemplateColumns = 'repeat(3,1fr)'
            _createAll__WEBPACK_IMPORTED_MODULE_1__.playingPlace.style.gridTemplateRows = 'repeat(3,1fr)'
            _createAll__WEBPACK_IMPORTED_MODULE_1__.nowSize.textContent = 'Frame size: 3x3'
            break;
        case 16:
            _createAll__WEBPACK_IMPORTED_MODULE_1__.playingPlace.style.gridTemplateColumns = 'repeat(4,1fr)'
            _createAll__WEBPACK_IMPORTED_MODULE_1__.playingPlace.style.gridTemplateRows = 'repeat(4,1fr)'
            _createAll__WEBPACK_IMPORTED_MODULE_1__.nowSize.textContent = 'Frame size: 4x4'
            break;
        case 25:
            _createAll__WEBPACK_IMPORTED_MODULE_1__.playingPlace.style.gridTemplateColumns = 'repeat(5,1fr)'
            _createAll__WEBPACK_IMPORTED_MODULE_1__.playingPlace.style.gridTemplateRows = 'repeat(5,1fr)'
            _createAll__WEBPACK_IMPORTED_MODULE_1__.nowSize.textContent = 'Frame size: 5x5'
            break;
        case 36:
            _createAll__WEBPACK_IMPORTED_MODULE_1__.playingPlace.style.gridTemplateColumns = 'repeat(6,1fr)'
            _createAll__WEBPACK_IMPORTED_MODULE_1__.playingPlace.style.gridTemplateRows = 'repeat(6,1fr)'
            _createAll__WEBPACK_IMPORTED_MODULE_1__.nowSize.textContent = 'Frame size: 6x6'
            break;
        case 49:
            _createAll__WEBPACK_IMPORTED_MODULE_1__.playingPlace.style.gridTemplateColumns = 'repeat(7,1fr)'
            _createAll__WEBPACK_IMPORTED_MODULE_1__.playingPlace.style.gridTemplateRows = 'repeat(7,1fr)'
            _createAll__WEBPACK_IMPORTED_MODULE_1__.nowSize.textContent = 'Frame size: 7x7'
            break;
        case 64:
            _createAll__WEBPACK_IMPORTED_MODULE_1__.playingPlace.style.gridTemplateColumns = 'repeat(8,1fr)'
            _createAll__WEBPACK_IMPORTED_MODULE_1__.playingPlace.style.gridTemplateRows = 'repeat(8,1fr)'
            _createAll__WEBPACK_IMPORTED_MODULE_1__.nowSize.textContent = 'Frame size: 8x8'
            break;

            
    }
    return (0,_placeCards__WEBPACK_IMPORTED_MODULE_0__.placeCards)(sizee[0]*sizee[1])
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./Gem_Puzzle/js/init.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map
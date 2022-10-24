export let htmlBodyWrapper =  document.createElement('div');
htmlBodyWrapper.className='wrapper wrapper__body';
export let playingField= document.createElement('div');
playingField.className="wrapper playing-field";
export let buttonPlace= document.createElement('div');
buttonPlace.className="wrapper button-place";
export let timerPlace=document.createElement('div');
timerPlace.className="wrapper timer-place";
export let playingPlace= document.createElement('div');
playingPlace.className='wrapper playing-place'
export let nowSize= document.createElement('div');
nowSize.className='wrapper now_size';
nowSize.textContent='Frame size: 4x4';
export let otherSize= document.createElement('div');
otherSize.className='wrapper other_size';
otherSize.textContent='Other sizes: ';
export let size_three=document.createElement('a');
size_three.className='size-choose 3x3'
size_three.href='#';
size_three.textContent='3x3 '
export let size_four=document.createElement('a');
size_four.className='size-choose 4x4'
size_four.href='#';
size_four.textContent='4x4 '
export let size_five=document.createElement('a');
size_five.className='size-choose 5x5'
size_five.href='#';
size_five.textContent='5x5 '
export let size_six=document.createElement('a');
size_six.className='size-choose 6x6'
size_six.href='#';
size_six.textContent='6x6 '
export let size_seven=document.createElement('a');
size_seven.className='size-choose 7x7'
size_seven.href='#';
size_seven.textContent='7x7 '
export let size_eight=document.createElement('a');
size_eight.className='size-choose 8x8'
size_eight.href='#';
size_eight.textContent='8x8'
export let movesCount=document.createElement('div');
movesCount.className='count-moves';
movesCount.innerHTML='Moves: 0';
export let timer=document.createElement('div');
timer.className='timer';
timer.innerHTML='Time:00:00';
export let endGame= document.createElement('div');
endGame.className='end-game-display';
export let endGameWrapper=document.createElement('div');
endGameWrapper.className='wrapper end-gameWrapper'
export let buttonShuffle= document.createElement('div');
buttonShuffle.className='button button-shuffle'
buttonShuffle.textContent='Shuffle and start'
export let buttonStop= document.createElement('div');
buttonStop.className='button button-stop'
buttonStop.textContent='Stop'
export let buttonSave= document.createElement('div');
buttonSave.className='button button-save'
buttonSave.textContent='Save'
export let buttonResult= document.createElement('div');
buttonResult.className='button button-result'
buttonResult.textContent='Results'
export let buttonSound= document.createElement('div');
buttonSound.className='button button-Sound'
buttonSound.textContent='Sound'
export let buttonSaveResult= document.createElement('div');
buttonSaveResult.className= 'button button-Save_Result';
buttonSaveResult.textContent= 'Save my result';
export let inputSaveResult= document.createElement('input');
inputSaveResult.className= 'input input-Save_Result';
export let resultsDisplay= document.createElement('div')
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
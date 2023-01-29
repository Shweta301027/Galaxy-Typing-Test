const button = document.querySelector(".StartGame");
const gameContent = document.querySelector(".gameContent");
const scoreElement = document.querySelector(".score");
const levelElement= document.querySelector(".level");
const inputElementID = document.getElementById('InputWord');



    const letter = [
        'for','us','and','lie','love','hate','fate','fame','school','college','btc','elon','musk','courses','internet','patience','argentina','motivation','tech','info','send','mate', 'reactjs','game', 'brusca','graphic','copper','boca', 'lie', 'case','expand','absence','football','native', 'demon', 'thread', 'award', 'tycoon', 'riquelme','still','empirical','doll','java','ackerman','dinner','register','proof','script', 'wrist','sulphur','selection','slam','grandmother','assertive','eaux','javascript','admiration','recognize','roll','bank', 'reactor','gradient','ribbon','slayer','pleasant','path','draft','polish','art','hook']

    let array = [];
    let arrWords = [];
    let topVal = 0;
    let score = 0;
    let gameOver = false
    let gameWidth = gameContent.clientWidth;
    const gameHeight = gameContent.clientHeight;


    setInterval(() => {
        const randomIndex = Math.floor(Math.random() * letter.length);
        const randomWord = letter[randomIndex];
        const randomLeft = Math.floor(Math.random() * gameWidth);
        const randomDuration = Math.floor(Math.random() * 5000) + 5000;

        const wordElement = document.createElement("div");
        wordElement.style.position = "absolute";
        wordElement.style.left = `${randomLeft}px`;
        wordElement.style.top = "-90px";
        wordElement.style.color = "white"
        wordElement.style.transition = `top ${randomDuration}ms linear`;
        wordElement.innerText = randomWord;
        gameContent.appendChild(wordElement);
        // console.log(randomWord);

        setTimeout(() => {
          wordElement.style.top = `${gameHeight}px`;
        }, 500);

        setTimeout(() => {
          wordElement.remove();
        }, randomDuration);
      }, 5000);


 
    // setTimeout(()=>{
    //     for(let i=0; i<letter.length; i++){
    //     gameContent.innerHTML = `<p>${letter[i]}</p>`;
    //     gameContent.style.left = (Math.random() * (gameWidth - 150)).toString() + 'px';
    //     }
    // }, 1000)
    
    // console.log(letter[i], i)
    // // console.log(gameContent)
    
    // generateRandomWord()
  
// })
    
    //     DICTIONARY.forEach((word)=>{
    //         // console.log(word)
    //       let wordDiv = document.createElement('div');
    //        wordDiv.innerHTML = `<p>${word}</p>`;
    //        wordDiv.classList.add('word');
    //     //    console.log(wordDiv);
    //     //    console.log(word);
    //        gameContent.append(wordDiv);
    //        wordDiv.style.left = (Math.random() * (gameWidth - 150)).toString() + 'px';
    //        arrWords.push(wordDiv);
    //     //    console.log(arrWords)
    //        gameContent.appendChild(wordDiv);
    // console.log(gameContent.innerText)
    //        })
        

// function generateRandomWord(words) {
//    words[Math.floor(Math.random() * words.length)];
// console.log(words)
// }



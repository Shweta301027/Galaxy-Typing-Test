const button = document.querySelector(".StartGame");
const gameContent = document.querySelector(".gameContent");
const scoreElement = document.querySelector(".score");
const levelElement= document.querySelector(".level");
const inputElementID = document.getElementById('InputWord');




    const letter = [
      'for','us','and','lie','love','hate','fate','fame','school','college','btc','elon','musk','courses','internet','patience','argentina','motivation','tech','info','send','mate', 'reactjs','game', 'brusca','graphic','copper','boca', 'lie', 'case','expand','absence','football','native', 'demon', 'thread', 'award', 'tycoon', 'riquelme','still','empirical','doll','java','ackerman','dinner','register','proof','script', 'wrist','sulphur','selection','slam','grandmother','assertive','eaux','javascript','admiration','recognize','roll','bank', 'reactor','gradient','ribbon','slayer','pleasant','path','draft','polish','art','hook'];

    let array=[] ;
    let arrWords = [];
    let topVal = 0;
    let score = 0;
    let gameOver = false
    let gameWidth = gameContent.clientWidth;

    setInterval(() => {
      const gameHeight = gameContent.clientHeight;
      const randomIndex = Math.floor(Math.random() * letter.length);
      const randomWord = letter[randomIndex];
      const randomLeft = Math.floor(Math.random() * gameWidth);
      const randomDuration = Math.floor(Math.random() * 5000) + 5000;
      
      const wordElement = document.createElement("div");

      const randomWordArr = randomWord.split("");

      randomWordArr.forEach((letter)=>{
        const  wordElementSpan = document.createElement("span");
        wordElementSpan.innerText = letter;
        wordElement.appendChild(wordElementSpan);
      })
        wordElement.style.position = "absolute";
        wordElement.style.left = `${randomLeft}px`;
        wordElement.style.top = "-90px";
        wordElement.style.color = "white"
        wordElement.style.transition = `top ${randomDuration}ms linear`;

        gameContent.appendChild(wordElement);
    
// to compare random word with input field

        inputElementID.addEventListener("input",()=>{
          const finalArr = wordElement.querySelectorAll("span");
          const inputArr = inputElementID.value.split("");
          //  console.log(finalArr);
          // console.log(inputArr);
          finalArr.forEach((charInSpan,index)=>{
            if(charInSpan.innerText==inputArr[index]){
                charInSpan.classList.add("hidden");
            } 
          })
        })
        inputElementID.value="";
        
      
        setTimeout(() => {
          wordElement.style.top = `${gameHeight}px`;
        }, 500);

        setTimeout(() => {
          wordElement.remove();
        }, randomDuration);
      }, 5000)

      function updateScore() {
        score += 10;
        scoreElementID.innerHTML = `<p>Score ${score}</p>`;
      }
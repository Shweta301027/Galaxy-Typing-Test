const button = document.querySelector(".StartGame");
const gameContent = document.querySelector(".gameContent");
const scoreElement = document.querySelector(".score");
const levelElement= document.querySelector(".level")



    const DICTIONARY = [
        'for','us','and','lie','love','hate','fate','fame','school','college','btc','elon','musk','courses','internet','patience','argentina','motivation','tech','info','send','mate', 'reactjs','game', 'brusca','graphic','copper','boca', 'lie', 'case','expand','absence','football','native', 'demon', 'thread', 'award', 'tycoon', 'riquelme','still','empirical','doll','java','ackerman','dinner','register','proof','script', 'wrist','sulphur','selection','slam','grandmother','assertive','eaux','javascript','admiration','recognize','roll','bank', 'reactor','gradient','ribbon','slayer','pleasant','path','draft','polish','art','hook'  
    ]


    let arrWords = [];
    let gameWidth = gameContent.clientWidth;
    const gameHeight = gameContent.clientHeight;

        DICTIONARY.forEach((word)=>{
          let wordDiv = document.createElement('div');
           wordDiv.innerHTML = `<p>${word}</p>`;
           wordDiv.classList.add('word');
           console.log(wordDiv);
           console.log(word);
           gameContent.append(wordDiv);
           wordDiv.style.left = (Math.random() * (gameWidth - 150)).toString() + 'px';
           arrWords.push(wordDiv);
           gameContent[0].appendChild(wordDiv);
          
           })
    


// 
const button = document.querySelector(".StartGame");
const gameContent = document.querySelector(".gameContent");
const scoreElement = document.querySelector(".score");
const levelElement= document.querySelector(".level")



    const DICTIONARY = [
        'for','us','and','lie','love','hate','fate','fame','school','college','btc','elon','musk','courses','internet','patience','argentina','motivation','tech','info','send','mate', 'reactjs','game', 'brusca','graphic','copper','boca', 'lie', 'case','expand','absence','football','native', 'demon', 'thread', 'award', 'tycoon', 'riquelme','still','empirical','doll','java','ackerman','dinner','register','proof','script', 'wrist','sulphur','selection','slam','grandmother','assertive','eaux','javascript','admiration','recognize','roll','bank', 'reactor','gradient','ribbon','slayer','pleasant','path','draft','polish','art','hook'  
    ]
  
//  /     const word = generateRandomWord(DICTIONARY);
//     arrWords.push(word);
//     let wordDiv = document.createElement('div');
//     wordDiv.innerHTML = `<p>${word}</p>`;
//     wordDiv.classList.add('word');
//     wordDiv.style.top = '-2px';
//     wordDiv.style.zIndex = '1';
//     arrWordsDiv.push(wordDiv);
//     gameContent[0].appendChild(wordDiv);
//   }
  
//   // GET RANDOM WORD FROM DICTIONARY
//   function generateRandomWord(words) {
//     return words[Math.floor(Math.random() * words.length)];
//   }
DICTIONARY.forEach(item=> console.log(item))

let arrWords = [];
const word = (DICTIONARY);
    arrWords.push(word);
    let wordDiv = document.createElement('div');
    wordDiv.innerHTML = `<p>${word}</p>`;
    wordDiv.classList.add('word');

    console.log(word)
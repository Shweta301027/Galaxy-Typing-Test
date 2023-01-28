const button = document.querySelector(".StartGame");
const gameContent = document.querySelector(".gameContent");
const inputElement = document.querySelector("#InputWord");
const scoreElement = document.querySelector(".score");
const levelElement= document.querySelector(".level")

//variables
const  currentLevel = LEVEL;
const gameWidth = gameContent.clientWidth;
const gameHeight = gameContent.clientHeight;
let score = 0;
let gameOver = false;
let  arrWords = [];
let arrWordsDiv = [];
let topVal = 0;


    const DICTIONARY = [
        'for','us','and','lie','love','hate','fate','fame','school','college','btc','elon','musk','courses','internet','patience','argentina','motivation','tech','info','send','mate', 'reactjs','game', 'brusca','graphic','copper','boca', 'lie', 'case','expand','absence','football','native', 'demon', 'thread', 'award', 'tycoon', 'riquelme','still','empirical','doll','java','ackerman','dinner','register','proof','script', 'wrist','sulphur','selection','slam','grandmother','assertive','eaux','javascript','admiration','recognize','roll','bank', 'reactor','gradient','ribbon','slayer','pleasant','path','draft','polish','art','hook'  
    ]

   
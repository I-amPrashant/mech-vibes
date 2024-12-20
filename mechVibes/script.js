const soundCategory = document.getElementById("sound-category");
const start = document.getElementById("start");
const refresh = document.getElementById("refresh");
const checkSpeed = document.getElementById("checkSpeed");
const inputField = document.getElementById("inputField");
const theme = document.getElementById("theme");
const textDisplay = document.getElementById("text-display");
const speedElement = document.getElementById("speed");
const accuracyElement = document.querySelector(".accuracy");

let playAudio = null, firstKeyPress = false;
soundCategory.addEventListener("change", (e) => {
  inputField.removeEventListener("keydown", playAudio);
  if(!firstKeyPress){
    firstKeyPress = true
    startTyping();
  }
  if (e.target.value === "off") {
    return;
  }
  playAudio = () => {
    const audio = new Audio(e.target.value);
    audio.play();
  };
  inputField.addEventListener("keydown", playAudio);
});
theme.addEventListener("click", () => {
  document.getElementById("container").classList.toggle("dark");
  if (document.getElementById("container").classList.contains("dark")) {
    theme.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    theme.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
});

let paragraph =
  "The golden rays of the morning sun slowly pierced through the thick canopy of trees, casting dappled light on the forest floor. Birds of every size and color flitted through the branches, their vibrant feathers creating a blur of motion as they sang their cheerful songs. A cool breeze rustled the leaves, sending a cascade of droplets from the recent rain onto the moss-covered rocks below. The air smelled fresh and earthy, filled with the scent of pine, wet soil, and wildflowers. In the distance, a small brook babbled over smooth stones, its clear waters sparkling as it flowed downstream, carving its way through the lush landscape. A family of deer emerged from the woods, cautiously grazing on the tender grass by the river’s edge, their ears twitching at every rustle. Nearby, a group of hikers, clad in sturdy boots and carrying backpacks filled with provisions, trekked along a winding trail, their footsteps muffled by the thick undergrowth. They paused occasionally to catch their breath, admire the scenery, and chat about the journey ahead. Far above, a hawk circled gracefully, its keen eyes scanning the terrain below, searching for prey. The entire ecosystem seemed to hum with life, from the smallest ant scurrying along the path to the towering trees that stood proudly against the sky. It was a place of peace, yet full of potential, where every corner held a new discovery, every moment brought a sense of wonder, and every step forward was a testament to the natural world's resilience and beauty.";

let randomParagraphArray = [];
let correctWordCount = 0;
let startTime = 0;
let endTime = 0;
let isStart = false;
let pArray = [];
let wordCount = 15;

const randomParagraphGenerator = () => {
  pArray = paragraph.split(" ");
  textDisplay.innerHTML = "";
  let index = 0;
  for (let i = 0; i < wordCount; i++) {
    let randomWord = pArray[Math.floor(Math.random() * pArray.length)];
    randomParagraphArray[index++] = randomWord;
    textDisplay.innerHTML += randomWord + " ";
  }
};
randomParagraphGenerator();

checkSpeed.setAttribute("disabled", "true");
document.getElementById("speed-accuracy").style.display = "none";

const startTyping = () => {
    console.log('hit')
  isStart = true;
  inputField.value = "";
  inputField.focus();
  start.setAttribute("disabled", "true");
  checkSpeed.setAttribute("disabled", "true");
  startTime = new Date().getTime();

  const checkComplete = setInterval(() => {
    if (inputField.value.split(" ").length - 1 === wordCount) {
      start.removeAttribute("disabled");
      checkSpeed.removeAttribute("disabled");
      endTime = new Date().getTime();
      clearInterval(checkComplete);
    }
  }, 50);
};

const refreshTyping = () => {
  if (isStart) {
    isStart = false;
    start.removeAttribute("disabled");
    checkSpeed.setAttribute("disabled", "true");
  }
  firstKeyPress = false
  document.getElementById("speed-accuracy").style.display = "none";
  inputField.value = "";
  randomParagraphGenerator();
};

const checkSpeedTYping = () => {
  isStart = false;
  correctWordCount = 0;
  let typedWords = inputField.value.split(" ");
  randomParagraphArray.forEach((word, index) => {
    if (word === typedWords[index]) {
      correctWordCount++;
    }
  });

  console.log(correctWordCount, (endTime-startTime)/1000);
  document.getElementById("speed-accuracy").style.display = "block";
  let speed = (
    (correctWordCount / ((endTime - startTime) / 1000)) *
    60
  ).toFixed(0);
  speedElement.innerHTML = speed + " wpm";
  accuracyElement.innerHTML =
    ((correctWordCount / wordCount) * 100).toFixed(0) + "%";
};

window.addEventListener("keydown", (e) => {
  if (e.key === "Tab") {
    refreshTyping();
  }
  if (e.key === "Enter") {
    startTyping();
  }
});

start.addEventListener("click", startTyping);
refresh.addEventListener("click", refreshTyping);
checkSpeed.addEventListener("click", checkSpeedTYping);

document.addEventListener("DOMContentLoaded", () => {
  //card options
  const cardArray = [
    {
      name: "fries",
      img: "images/fries.png",
    },
    {
      name: "cheeseburger",
      img: "images/cheeseburger.png",
    },
    {
      name: "ice-cream",
      img: "images/ice-cream.png",
    },
    {
      name: "pizza",
      img: "images/pizza.png",
    },
    {
      name: "milkshake",
      img: "images/milkshake.png",
    },
    {
      name: "hotdog",
      img: "images/hotdog.png",
    },
    {
      name: "fries",
      img: "images/fries.png",
    },
    {
      name: "cheeseburger",
      img: "images/cheeseburger.png",
    },
    {
      name: "ice-cream",
      img: "images/ice-cream.png",
    },
    {
      name: "pizza",
      img: "images/pizza.png",
    },
    {
      name: "milkshake",
      img: "images/milkshake.png",
    },
    {
      name: "hotdog",
      img: "images/hotdog.png",
    },
  ];


  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  console.log(cardArray[0].img);
  function makeBord() {
    for (let i = 0; i < cardArray.length; i++) {
      const img = document.createElement("img");
      img.setAttribute("src", "./images/blank.png");
      img.setAttribute("data-id", i);
      img.addEventListener("click", cardClickHandler);
      grid.appendChild(img);
    }
  }
  let dataLength = [];
  let dataName = [];
  let score = 0;

  function cardClickHandler() {
    const card = this.getAttribute("data-id");
    const storeId = card;
    dataLength.push(card);
    dataName.push(cardArray[card].name);
    this.setAttribute("src", cardArray[storeId].img);
    const data_id = this.getAttribute("data-id");
    const data_name = cardArray[storeId].name;
    if (dataLength.length === 2) {
      console.log("yes");
      setTimeout(mathCard, 500);
    }
  }

  function mathCard() {
      const name = dataName;
      const id = dataLength;
      const gridimg = grid.querySelectorAll('img');
    if(name[0]!==name[1]){
        alert('not matched')
        gridimg[id[0]].setAttribute('src','./images/blank.png')
        gridimg[id[1]].setAttribute('src','./images/blank.png')
        
        dataLength=[]
        dataName=[]
    }else{
        alert('matched')

        gridimg[id[0]].setAttribute('src','./images/white.png')
        gridimg[id[1]].setAttribute('src','./images/white.png')
        gridimg[id[0]].removeEventListener('click',cardClickHandler)
        gridimg[id[1]].removeEventListener('click',cardClickHandler)
        score++;
        resultDisplay.textContent = score;
        if(score===6){
          alert('hurrah! you have finished the game score (6)')
          document.write('Game Over You Win')
        }

        dataLength=[]
        dataName=[]
    }
  }

  makeBord();
});

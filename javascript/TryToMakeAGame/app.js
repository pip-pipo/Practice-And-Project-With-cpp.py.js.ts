window.addEventListener("DOMContentLoaded", () => {
  class SnakeGame {
    constructor() {
      this.snake = document.querySelector(".snake");
      this.container = document.querySelector(".container");
      this.body = document.querySelector("body");
      this.food=document.querySelector('.food');
      this.snakeClientWidth = this.snake.clientWidth;
      this.snakeclientHeight = this.snake.clientHeight;
      this.containerClientWidth = this.container.clientWidth;
      this.containerClientHeight = this.container.clientHeight;
      this.snakeInitialWidth = 80;
      this.snakeInitialHeight = 20;
      // this.snakeInitialWidth = 20;
      // this.snakeInitialHeight = 80;
    }

    stopSnake() {
      clearInterval(iterval);
    }

    snakeInitial() {
      this.body.addEventListener("keyup", (e) => {
        // left
        if (e.keyCode === 37) {
        }

        // up
        if (e.keyCode === 38) {
          console.log("38");
          console.log(this.snake.clientWidth);
          console.log(this.container.clientWidth);
          console.log(this.container.clientTop);
          console.log(this.container.ATTRIBUTE_NODE);
          console.log(this.food.offsetParent);
          console.log(this.food.offsetLeft);
          console.log(this.food.offsetTop);
          console.log(this.food.offsetWidth);
          console.log(this.food.offsetHeight);
        }

        // right
        if (e.keyCode === 39) {
          if (
            this.snakeClientWidth === this.snakeInitialWidth &&
            this.snakeclientHeight === this.snakeInitialHeight
          ) {
            let iterval = setInterval(() => {
              this.snake.style = `width:${(this.snakeClientWidth += 10)}px;height:${
                this.snakeClientHeight
              }px`;

              if (this.snakeClientWidth >= this.containerClientWidth) {
                this.snake.style = `width:${(this.snakeClientWidth = 1)}px`;
              }
            }, 300);
          } else {
            let iterval = setInterval(() => {
              this.snake.style = `width:${(this.snakeclientHeight += 10)}px;height:${
                this.snakeClientWidth
              }px`;

              if (this.snakeClientWidth >= this.containerClientWidth) {
                this.snake.style = `width:${(this.snakeClientWidth = 1)}px`;
              }
            }, 300);
          }
        }

        // down
        if (e.keyCode === 40) {

        }

      });


    }
  }

  const game = new SnakeGame();
  game.snakeInitial();

  // end
});

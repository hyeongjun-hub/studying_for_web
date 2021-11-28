const span = document.querySelector("span");
const btn = document.querySelector("button");

const player = {
  hp: 200,
  mp: 300,
  hit: function (damage) {
    this.hp -= damage;
    console.log("player damaged : " + damage);
    return this.isDie(this.hp);
  },
  isDie: function (hp) {
    if (this.hp <= 0) {
      console.log("player is die..");
      return true;
    } else {
      console.log("player's hp is " + hp);
      return false;
    }
  },
};

btn.addEventListener("click", () => {
  player.hit(50);
  span.innerText = player.hp;
});

player.hit(150);
span.innerText = player.hp;

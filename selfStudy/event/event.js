// const title = document.querySelector(".title-js");
// const btn = document.querySelector("button");

// const handlebtn = (e) => {
//   console.log("hi");
// };

// btn.addEventListener("click", handlebtn);

// const COLOR_CN = "color",
//   WHITE_CN = "white";

// function clickhandler() {
//   if (!title.classList.contains(COLOR_CN)) {
//     title.classList.add(COLOR_CN);
//     title.classList.add(WHITE_CN);
//   } else {
//     title.classList.remove(COLOR_CN);
//     title.classList.remove(WHITE_CN);
//   }
// }

// function init() {
//   title.addEventListener("click", clickhandler);
// }

// init();

class ArrayUtilities {
  /* Your magic here */
  static addZeros = (arr) => {
    return arr.map((number) => Number(number + "0"));
  };
  static moreThanFifty = (arr) => {
    return arr.filter((number) => number > 50);
  };
  static removeFirst = (arr) => {
    arr.shift();
    return arr;
  };
  static sumAll = (arr) => {
    const result = arr.reduce((suma, curVal) => {
      return suma + curVal;
    }, 0);
    return result;
  };

  static divide = (num) => {
    const arr = (num + "").split("");
    return arr;
  };
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const addZeros = ArrayUtilities.addZeros(numbers);
console.log(addZeros);

const moreThanFifty = ArrayUtilities.moreThanFifty(addZeros);
console.log(moreThanFifty);

const noFirst = ArrayUtilities.removeFirst(moreThanFifty);
console.log(noFirst);

const sumAll = ArrayUtilities.sumAll(noFirst);
console.log(sumAll);

const divided = ArrayUtilities.divide(sumAll);
console.log(divided);

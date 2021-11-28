// function fetchItems() {
//   return new Promise(function (resolve, reject) {
//     var items = [1, 2, 3];
//     resolve(items);
//   });
// }

async function logItems() {
  try {
    var resultItems = await fetchItems();
    console.log(resultItems);
  } catch (error) {
    console.error();
  }
}

logItems();

function fetchItems() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      var items = [1, 2, 3];
      resolve(items);
    }, 3000);
  });
}

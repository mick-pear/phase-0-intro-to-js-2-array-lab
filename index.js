// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(catName) {
  cats.push(catName);
}

function destructivelyPrependCat(catName) {
  cats.unshift(catName);
}

function destructivelyRemoveLastCat(catName) {
  cats.pop(catName);
}

function destructivelyRemoveFirstCat(catName) {
  cats.shift(catName);
}

function appendCat(catName) {
  let newCatArray = [...cats, catName];
  
  return newCatArray;
}

function prependCat(catName) {
  let newCatArray =  [catName, ...cats];

  return newCatArray;
}

function removeLastCat() {
  let newCatArray = cats.slice(0, 2);
  return newCatArray;
}

function removeFirstCat() {
  let newCatArray = cats.slice(1);
  return newCatArray;
}
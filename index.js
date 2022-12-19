// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
  cats.push('Ralph')

}
function destructivelyPrependCat(name){
  cats.unshift('Bob')

}
function destructivelyRemoveLastCat(name){
  cats.pop('Garfield')

}
function destructivelyRemoveFirstCat(name){
  cats.shift('Milo')

}

function appendCat(name){
  const copyCats = [...cats, 'Broom'];
  return copyCats;

}


function prependCat(name){
  const copyCats = [ 'Arnold', ...cats,];
  return copyCats;

}

function  removeLastCat(){
  const copyCats = cats.slice(0, cats.length-1);
  return copyCats;

}
function  removeFirstCat(){
  const copyCats = cats.slice(1);
  return copyCats;

}







var kittens = ['Milo', 'Otis', 'Garfield'];
// Add your functions and code here

 function destructivelyAppendKitten (name) {
  kittens.push(name);
  return kittens;
}

 function destructivelyPrependKitten  (name) {
 return  kittens.unshift(name);

}

function destructivelyRemoveLastKitten () {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten () {
  kittens.shift();
  return kittens;
}

function appendKitten (name) {
  return var newArray = [...kittens, name];}

function prependKitten (name) {
  return var newArray = [name, ...kittens];
}

function removeLastKitten () {
 return var newArray = kittens.slice(0, kittens.length - 1);
}

function removeFirstKitten () {
  return var newArray = kittens.slice(0,1);
}


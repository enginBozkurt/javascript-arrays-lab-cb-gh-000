var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
};

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(name){
  kittens.pop(name);
  return kittens;
}

function destructivelyRemoveFirstKitten(name){
  kittens.shift(name);
  return kittens;
}

function appendKitten(name){
  const newKittens = [...drivers, name];
  return newKittens;
};

function prependKitten(name){
  const newKittens = [name, ...drivers];
  return newKittens;
}

function removeLastDriver(){
  const newKittens = drivers.slice(0, drivers.length-1)
  return newKittens;
};

function removeFirstDriver(){
  const newKittens = drivers.slice(1);
  return newKittens;
}
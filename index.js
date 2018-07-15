const kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
};

function destructivelyPrependDriver(name){
  kittens.unshift(name);
  return kittens;
}


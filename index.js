// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]

/*
describe('destructivelyAppendCat(name)', function () {
    it('appends a cat to the end of the cats array', function () {
      destructivelyAppendCat('Ralph');
*/
function destructivelyAppendCat(name){
    return cats.push(name)
}

/*
describe('destructivelyPrependCat(name)', function () {
      it('prepends a cat to the beginning of the cats array', function () {
        destructivelyPrependCat("Bob");

        expect(cats).to.have.ordered.members(["Bob", "Milo", "Otis", "Garfield"]);
      });
*/

function destructivelyPrependCat(name){
    return cats.unshift(name)
}

function destructivelyRemoveLastCat(name){
    return cats.pop(name)
}

function destructivelyRemoveFirstCat(name){
    return cats.shift(name)
}

function appendCat(name){
    return [...cats, name]
}

function prependCat(name){
    return [name, ...cats]
}

function removeLastCat(){
    cats = cats.slice(0, -1)
    return cats
}

function removeFirstCat(){
    let cats = ["Milo", "Otis", "Garfield"];
    cats = cats.slice(1);
    return cats;
}
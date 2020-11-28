'use strict'

function* fruts(){
  yield 'Avacado'; 
  yield 'Appale';
  yield 'Apricots';
  yield 'Banana';
  yield 'Blackberries';
  yield 'Blueberries';
  yield 'Breadfruit';
  yield 'Cantaloupe';
  yield 'Carambola';
  yield 'Cherimoya';
  yield 'Date Fruit';
  yield 'Durian';
  yield 'Elderberries';
  yield 'Feijoa';
  yield 'Grapes';
  yield 'Guava';
  yield 'Honeydew Melon';
  yield 'Jackfruit';
  yield 'Java-Plum';
}
console.log('----------Frut List-----------')
const myFrut = fruts()
console.log(myFrut.next())
console.log(myFrut.next())
console.log(myFrut.next())
console.log(myFrut.next())
console.log(myFrut.next())
console.log(myFrut.next())
console.log(myFrut.next())
console.log(myFrut.next())
console.log(myFrut.next())
console.log(myFrut.next())
console.log(myFrut.next())
console.log(myFrut.next())
console.log(myFrut.next())
console.log(myFrut.next())
console.log(myFrut.next())
console.log(myFrut.next())
console.log(myFrut.next())
console.log(myFrut.next())
console.log(myFrut.next())

console.log('----------Count-----------')

//for(let myFrut of fruts()){
  //console.log(myFrut)
//}

function* count(numbers){
  let c = 0
  while (c < numbers) {
    yield console.log(c)
    c++
    
  }
}

const countNumber = count (20)

console.log(countNumber.next())
console.log(countNumber.next())
console.log(countNumber.next())
console.log(countNumber.next())
console.log(countNumber.next())
console.log(countNumber.next())
console.log(countNumber.next())
console.log(countNumber.next())
console.log(countNumber.next())
console.log(countNumber.next())
console.log(countNumber.next())
console.log(countNumber.next())
console.log(countNumber.next())
console.log(countNumber.next())
console.log(countNumber.next())
console.log(countNumber.next())
console.log(countNumber.next())
console.log(countNumber.next())
console.log(countNumber.next())
console.log(countNumber.next())
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
for(let myFrut of fruts()){
  console.log(myFrut)
}
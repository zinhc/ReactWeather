 //var names = ['Yanhi', 'David', 'Ken'];
//
// names.forEach(function (name) {
//     console.log('forEach', name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//
// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Yanzhi'));

// var person = {
//   name: 'Hendrick',
//   greet: function () {//name.forEach(function (name))會變成underfined
//       names.forEach( (name) => {
//         console.log(this.name + 'says hi to ' + name)
//       });
//   }
// };
//
// person.greet();

function add (a, b) {
  return a+b;
}

var addStatement = (a, b) => {
  return a + b;
}
console.log(addStatement(4, 7));


var addExpression = (a, b) => a + b; //自動回傳值
console.log(addExpression(3, -2));

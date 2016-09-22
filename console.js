//levels
//console.log('This is a message');
//console.warn('This is a warning message!');
//console.error('This is an error message!');
//console.info('This is an info message!');
//console.debug('This is a debug message!');

// asserts
//var foo;
//if (!foo) {
//    console.error('foo not defined');
//}
//console.assert( foo, 'foo not defined');
//foo.name;

// count
/*
for (var i = 0; i < 100; i++) {
    var number = Math.random() * 100;

    if (number > 50 ) {
        console.count ('Greater than 50');
    } else {
        console.count ('Less or equal than 50');
    }
}
*/

// grouping and nesting
/*
for (var i = 0; i < 100; i++) {
    var number = Math.random() * 100;

    console.groupCollapsed('Picking a random number...'); // console.groupCollapsed

    console.log('Number greeater than 10', number>10);
    console.log('Number greeater than 20', number>20);
    console.log('Number greeater than 30', number>30);

    console.groupEnd();
}*/

// arguments
//console.log('andoni arroyo');
//console.log('andoni', 'arroyo', 123, { street : { name : 'San Pedro', type: 'via' } , city: 'La linea'});
//console.log('my name is %d, %s years old. My cv is %o', 38, 'andoni', { link : 'linkedin'});
//console.log('hi, %cwelcome', 'color:orange; font-size: 2em');

//timing
/*
var arr = [];
console.time('adding items');
for (var i = 0; i < 1000000; i++) {
   arr.push(i);
}
console.timeEnd('adding items');
*/

// tabular data
/*
var Person = function (name, age, size) {
    this.name = name;
    this.age = age;
    this.size = size;
};

var dev1 = new Person('developer1', 33, 'XL');
var dev2 = new Person('developer2', 34, 'L');
var dev3 = new Person('developer3', 35, 'XS');

var people =[dev1, dev2, dev3];

var peopleObject = {
    dev1 : dev1,
    dev2 : dev2,
    dev3 : dev3
};

//console.log(people);
//console.table(people);
console.table(peopleObject, []);
*/
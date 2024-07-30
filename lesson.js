let options = {
    width: 1024,
    height: 1024,
    name: "test"
};

console.log(options.name);
options.bool = false;
options.colors = {
    border: "black",
    bg: "red"
};

delete options.bool;

console.log(options);

for (let key in options){
    console.log('Сыойства ' + key + ' имеет значение ' + options[key]);
}

let arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

arr.forEach(function(item, i, mass) {
    console.log(i + ': ' + item + " (массив: " + mass + ')');
});

console.log(arr);

let soldier = {
    health: 400,
    armor: 100
}

let john = {
    health: 100
}

john.__proto__ = soldier;
console.log(john);
console.log(john.armor);
console.log(john.health);
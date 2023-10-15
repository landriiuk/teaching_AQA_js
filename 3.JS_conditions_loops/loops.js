for (let index = 0; index <= 10; index++) {
    // if (index === 5) {
    //     console.log('i"m 5');
    //     continue;
    // }
    // if (index === 6) {
    //     break;
    // }
    console.log(index);
}
console.log(index);



for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {

        continue;
    }
    console.log(i);
}


let str = "Hello, World!";
for (let i = 0; i < str.length; i++) {
    console.log(str[i]);  // str[0], [1], [2] .... [last]
}

while (true) {
    console.log('It"s true');
}

let index = 1;
while (index < 5) {
    console.log(`Inside ${index}`);
    index++
}
console.log("Outside", index);


let i = 3;
while (i > 1) {
    console.log('I want to work', i);
    i--
}


do {
    console.log('I want to work', i);
    i--
} while (i > 1);
let obj = {
    1:"user",
    true:"user"
}

let map = new Map({});

map.set("user", "username_123");
map.set(1, "my_status");
map.set(false, "available");
// map.set(false, "available")
console.log(map);

map.set("user", "username_123")
    .set(1, "my_status")
    .set(false, "available")

    console.log(map);

console.log(map.get("1")); //undefined
console.log(map.get(1));  // my_status
console.log(map.has(1)); // true
console.log(map.get("1")); // undefined  ->
console.log(map.has("Liubov"))// false

console.log(map.delete(true)) // false
console.log(map);

console.log(map.size);

console.log(map.clear());
console.log(map);

map.forEach((key, value, map)=>{
console.log("Key: ", key,"Value:", value,"Collection",map );
});

for (const value of map.values()) {
    console.log(value);
}

for (const key of map.keys()) {
    console.log(key);
}

for (const entity of map.entries()) {
    console.log(entity);
}
// // eslint 
// let set = new Set();

// set.add("user", "username_123");
// set.add(1, "my_status");
// set.add(false, "available");

// // set.add(true)
// console.log(set)

// console.log(set.has(1)); // true
// console.log(set.has("Liubov"))// false

// set.forEach((value, value2, set)=>{
// console.log("Key: ", value,"Value:", value2,"Collection",set );
// });

// const array = Array.from(set)

// console.log(array);

let set = new Set(["apple", "apple", "banana"]);
console.log(set);

const myMap = new Map([...set].map(value => [value, value]));
console.log(myMap);

/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays

let ages = [30, 26, 27];
// let john = ages[0];
// let mary = ages[1];
// let joe = ages[2];

let [john, mary, joe] = ages;

console.log(john, mary, joe);

// Destructuring objects

let jobs ={
    mike: "des",
    jill: "dev",
    alicie: "acc",
};

let {mike, jill, alicie} = jobs;
console.log(mike, jill, alicie)
// Destructuring subsets

let languages = [ "english", "franch" , "arabic" , "japanese", " german"];
let[johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary);


let [, marys, ,marj]= languages
console.log(marys, marj);

// object//

let languages2 = {
    firstlanguage:  "english",

    secoundlanguage:  "franch",

    thirdlanguage:  "arabic",

    forthlanguage:  "german"
}

let {firstlanguage, thirdlanguage}= languages2

console.log(firstlanguage, thirdlanguage)

// Using rest p2arameter syntax

let fruits = [ "apple", "orange", "bannana","peach", "cherry"];
let [farvorite, secoundFavorite, ...others] = fruits;
console.log(farvorite);
console.log(secoundFavorite);
console.log(others);

let favorites ={
    brian:"pizza",
    anna: "pasta",
    sarah: "veg",
    andrea: " steak"
};

let {brian , anna,...rest} = favorites
console.log(brian);
console.log(anna);
console.log(rest);


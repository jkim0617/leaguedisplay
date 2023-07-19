let tracker = (str) => {
    let map = {};
    for(let i=0;i < str.length; i++){
        let currLetter = str[i];
        if (map[currLetter]){
            map[currLetter]++;
        }
        else{
            map[currLetter] = 1;
        }
    }
    return map;
}

let z = 0;

let isPermutationBeta = (str1,str2) => {
    if (str1.length !== str2.length){
        return false;
    }
    let map1 = tracker(str1);
    let map2 = tracker(str2);
    let keys1 = Object.keys(map1);
    let keys2 = Object.keys(map2);
    // console.log(`Letter: ${keys1[z]}`)
    // console.log(`# of Letters in mp1: ${map1[keys1[z]]}`)
    // console.log(`# of Letters in mp2: ${map2[keys1[z]]}`)
    for (let i=0; i < keys1.length; i++){
        let currLetter = keys1[i];
        let mpc1 = map1[currLetter];
        let mpc2 = map2[currLetter];
        // console.log(mpc1);
        // console.log(mpc2);
        if (!(mpc1 == mpc2)){
            return false;
        };
    }
    return true;
}

let isPermutation = (str1,str2) => {
    if (str1.length !== str2.length){
        return false;
    }
    let map1 = tracker(str1);
    let map2 = tracker(str2);
    let keys1 = Object.keys(map1);
    for (let i=0; i < keys1.length; i++){
        let currLetter = keys1[i];
        if (map1[currLetter] !== map2[currLetter]){
            return false;
        };
    }
    return true;
}

let isPalindrome = (str) => {
    let map = tracker(str);
    let list = Object.keys(map);
    let counter = 0;
    for (let i = 0; i < list.length; i++){
        let currLetter = list[i];
        if (map[currLetter]%2 !== 0){
            counter++;
        }
        if (counter === 2){
            return false;
        }
    }
    return true;
}

let isValidAnswer = (str1,str2) => {
    if (isPermutation(str1,str2)){
        console.log(`${str1} and ${str2} are valid Permutations`);
        if (isPalindrome(str1)){
            console.log('and can be palindromes')
        } else {
            console.log('but cannot be palindromes')
        }
    } else {
        console.log(`${str1} and ${str2} are not valid permutations`)
    }
}

// let testCase11 = 'ttaacco'
// let testCase12 = 'ocatatc'
// let testCase21 = 'kekekek'
// let testCase22 = 'fdsakew'
// let testCase31 = 'monkeybars'
// let testCase32 = 'srabyeknom'

// console.log('Case 1')
// console.log('Input: ttaacco, ocatatc')
// console.log('Expected: true, true')
// console.log(isValidAnswer(testCase11,testCase12))
// console.log('Case 2')
// console.log('Input: kekekek, fdsakew')
// console.log('Expected: false')
// console.log(isValidAnswer(testCase21,testCase22))
// console.log('Case 3')
// console.log('Input: monkeybars, srabyeknom')
// console.log('Expected: true, false')
// console.log(isValidAnswer(testCase31,testCase32))

//--------------- isUnique Algorithm --------------

// const isUnique = (str) =>{
//     let map = {};
//     for (let i = 0; i < str.length; i++){
//         let currChar = str[i];
//         if (map[currChar]){
//             return false;
//         } else{
//             map[currChar] = 1;
//         }
//     }
//     return true;
// }

// let testCase1 = 'banana'
// let testCase2 = 'coding'
// let testCase3 = '   '

// console.log(isUnique(testCase1)) //expected false
// console.log(isUnique(testCase2)) //expected true
// console.log(isUnique(testCase3)) //expected false
//-----------------------------------------------------

//----------------- Word Repeat ----------------------
const Counter = (arr) => {
    let map = {};
    arr.forEach(word => {
        if (map[word]){
            map[word]++
        } else{
            map[word] = 1;
        }
    });
    return map;
}

console.log(Counter(['billy','mandy','a','henry','a']))
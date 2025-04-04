// // 1-misol 
// let arr = [1, 3, 5, 7, 1, 5]

// function samFirstLast(arr)  {
//     return arr[0] === arr[arr.length-1];
// }

// console.log(samFirstLast(arr));

// // 2-misol 
// let obj = {
//      0: "nol",
//      1: "bir", 
//      2: "ikki",
//      3: "uch",
//      4: "turt",
//      5: "bish",
//      6: "olti",
//      7: "yitti",
//      8: "sakkiz",
//      9: "toqqiz"
// }

// function oneCount(...arr){
//     let s = 0;
//     let obj = {};
//     return {'result': arr.filter((item) => item.includes(1)).length};
// }

// console.log(oneCount([2, 4, 5,1, 6], [1, 2, 3, 2, 4, 5], [4, 5], [5]));

// // 3-misol 
// let arr = [true, true, true, true];
// let arr1 = [true, true, false, true];

// function answerCell(arr) {
//     return arr.filter(el => el == arr[0]).length == arr.length;
// }

// console.log(answerCell(arr));
// console.log(answerCell(arr1));

// // 4-misol 

// function blackjack(...arr){
//     console.log(arr);
//     let obj1 = {
//      0: "nol",
//      1: "bir", 
//      2: "ikki",
//      3: "uch",
//      4: "turt",
//      5: "bish",
//      6: "olti",
//      7: "yitti",
//      8: "sakkiz",
//      9: "toqqiz"
// }   
//     let obj = {};
//     let max_namber = Math.max(...arr);
//     console.log(max_namber);
//     obj['max_number'] = max_namber;
//     let newArr = [...String(max_namber).split("")];
//     newArr = [...newArr, ...newArr.map((el) => obj1[el])];
//     obj["arr"] = newArr;
//     obj['arr_length'] = newArr.length;
//     obj['type'] = "string";
//     return obj;
//  }

// console.log(blackjack(12, 568, 12));

// // 5-misol 
// let arr1 = [1, 2, 3, 4, 3, 2, 1, 2, 3, 45, 6];
// const removeDups = (arr) => [...new Set(arr)];
// console.log(removeDups(arr1));

// // 6-misol 
// let arr1 = [
//     [0, 3, 0],
//     [0, 0, 1],
//     [1, 3, 2]
// ]
// function getSum(arr){
//     let newArr = arr.map(el => el.reduce((acc, num) => acc + num, 0))
//     let summ = newArr.reduce((acc, num) => acc + num, 0);

//     if(summ > 10) return {'sum': summ};
//     return {"sum": 'seven'};
// }

// console.log(getSum(arr1));

// // 7-misol 

// let arr1 = [1, 3, 4, 5, 4, 3, 2, 8];

// const uniqueSort = (arr) => [...new Set(arr)].sort((a, b) => a - b);

// console.log(uniqueSort(arr1));

// // 8-misol
// "Samit qachon tugashi mumkin, aytib yuboring"
// function specialReverse(words, alpha){
//     let newArr = words.split(" ").filter(el => el.includes(alpha));
//     let obj = {};
//     for(let value of newArr){
//         obj[value] = value.split("").reverse().join("");
//     }
//     return obj;
// }
// console.log(specialReverse("Samit qachon tugashi mumkin, aytib yuboring", 'a'));

// // 9-misol 
// let arr = [7, 8, 9, 6, 4, 3, 445, 322, 7];

// console.log(Math.max(...arr));
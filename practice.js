// // 1-misol 
// let arr = ['A', 'B', 'C', 'B', true, true, false];

// function countArrayElements(arr) {
//     let obj = {};
//     let k = 1;
//     for(let i = 1; i <= arr.length; i++){
//         if(i % 2 == 1) obj[arr[i - 1]] = 1;
//         else obj[arr[i - 1]] = 2;
//     }
//     return obj;
// }

// console.log(countArrayElements(arr));

// // 2-misol 
// let arr = [1, 2, 6, 6, 5];

// let res = arr[0] == 6 || arr[arr.length - 1] == 6 ? true : false;

// console.log(res);

// // 3-misol

// let arr = [1, 3, 5, 66, 6, 8];
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

// function fun(arr){
//     let newarr = [];
//     length1 = arr.length;
//     if(length1 % 2 == 0) arr.push(1);
    
//     newarr.push(obj[arr[length1/2 - 1]], obj[arr[length1/2]], obj[arr[length1/2 + 1]]);
//     return newarr;
// }
// console.log(fun(arr))

// // 4-misol 
// let word = "Assalomu alaykum, qalaysan?";

// function reverseWords(word){
//     let result = word.trim().split(" ");
//     return result.reverse(); 
// }

// console.log(reverseWords(word));

// // 5-misol Linza kodni ham linzasi boldi :) 
// let text1 = "Saomllrrrr";

// function duplicateCount(params) {
//     let newArr = params.split("");
//     let newArr1 = [];
//     for(let value of newArr){
//         newArr1.push(newArr.filter(x => x === value).length);
//     }
//     newArr1 = newArr1.filter(x => x !==1)
//     if(newArr1.length == 0)
//     return 0;
//     else return Math.min(...newArr1.filter(x => x !== 1))
// }

// console.log(duplicateCount(text1));

// // 6-misol 
// let number1 = 189;

// function rev(params){
//     return String(params).split("").reverse().join("");
// }

// console.log(rev(number1))
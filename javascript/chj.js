// // console.log('this is a debug message');

// function solution(S, K) {
//     // write your code in JavaScript (Node.js 8.9.4)
//     const s_arr = S.split("")
//     let arr = [];
//     for (let i = 0; i < s_arr.length; i++) {
//         if (arr.indexOf(s_arr[i]) === -1) {
//             arr.push(s_arr[i]);
//         } else {
//             continue;
//         }
//     }
//     let count_arr = [];
//     for (let j = 0; j < arr.length; j++) {
//         count_arr.push(s_arr.filter((x) => x == arr[j]));
//     }
//     let code = count_arr.map((x) => {
//         const len = x.length;
//         const letter = x[0]
//         if (len == 1) {
//             return letter
//         } else {
//             return len + letter

//         }

//     }).join("")
//     console.log(code)
// }

// solution("AAAAABBBBAAAABABABABABABC", 3)


var nthUglyNumber = function(n) {
    const arr = [];
    for (let i = 2; i < 1690; i++) {
        if (i % 2 == 0 || i % 3 == 0 || i % 5 == 0) {
            arr.push(i);
        }
        if (arr.length == n) {
            break;
        } else {
            continue;
        }

    };
    console.log(arr)
    return arr[arr.length - 1];
};

console.log(nthUglyNumber(11))
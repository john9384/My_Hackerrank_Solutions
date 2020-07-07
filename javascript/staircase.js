// Consider a staircase of size : n =4

//    #
//   ##
//  ###
// ####
// Observe that its base and height are both equal to n, and the image is drawn using # symbols and spaces. The last line is not preceded by any spaces.

// Write a program that prints a staircase of size n.
function staircase(n) {
    let arr = [];
    let indent = [];
    for (let i = 1; i <= n; i++) {
        arr.push("#");
        indent.push(" ");
    }
    let string = arr.join("");
    let tab = indent.join("");

    for (let j = 1; j <= string.length; j++) {
        let tab_len = string.length - j;
        console.table(`${tab.slice(0, tab_len)}${string.slice(0,j)}`)
    }

}

staircase(8)
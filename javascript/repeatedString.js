function repeatedString(s, n) {
    if (n > 1000000000000) {
        return null;
    } else {
        const s_arr = s.split("")
        const a_count = s_arr.filter((alph) => alph == "a").length;
        console.log(a_count)
        let str = [];
        // if (s == "a") {
        //     return n;
        // } else {

        //     let i = 0;
        //     while (i < n) {

        //         str.push(s)
        //             // if (str.length > n) {
        //             //     break;
        //             // }
        //         i++
        //     }
        return a_count
            // const sub_str = str.substr(0, n);
            // const sub_arr = sub_str.split("");
            // const str_count = sub_arr.filter((alph) => alph == "a").length;
            // return str_count;
    }
}


console.log(repeatedString("abc", 10))
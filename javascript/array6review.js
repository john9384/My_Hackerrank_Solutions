function evenAndOddIndex(input) {
    const input_arr = input.split(" ");
    const output_arr = []
    let group_index = (str) => {
        if (isNaN(str)) {
            let arr = str.split("");
            let even = [];
            let odd = [];
            for (let i = 0; i < arr.length; i++) {
                if (i == 0 || i % 2 == 0) {
                    even.push(arr[i]);
                }
                if (i == 1 || i % 2 == 1) {
                    odd.push(arr[i]);
                }
            }
            const out_str = `${ even.join("") } ${ odd.join("") }`;
            return out_str;
        } else {
            return;
        }
    }

    for (let j = 0; j < input_arr.length; j++) {
        output_arr.push(group_index(input_arr[j]));
    }

    for (let k = 0; k < output_arr.length; k++) {
        if (output_arr[k] == null) { continue } else {
            console.log(output_arr[k]);
        }

    }
}
evenAndOddIndex("2 hello there");
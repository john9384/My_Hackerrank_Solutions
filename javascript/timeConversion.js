function timeConversion(s) {
    /*
     * Write your code here.
     */
    const str = s.toLowerCase()

    if (str.includes("pm")) {
        let digits = str.replace("pm", "").split(":")
        if (digits[0] == 12) {
            const time = digits.join(":");
            return time;
        } else {
            digits[0] = parseInt(digits[0], 10) + 12;
            const time = digits.join(":");
            return time;
        }
    } else {
        let digits = str.replace("am", "").split(":")
        if (digits[0] == 12) {
            digits[0] = "00"
            const time = digits.join(":")
            return time;
        } else {
            const time = digits.join(":")
            return time;
        }

    }


}
console.log(timeConversion("12:45:54PM"));
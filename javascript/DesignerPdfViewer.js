function designerPdfViewer(arr, text) {
  let height_arr = [];
  for (let i = 0; i < text.length; i++) {
    height_arr.push(arr[text.charCodeAt(i) - 97]);
  }
  let max_num = Math.max(...height_arr);
  let text_length = text.length;
  console.log(max_num * text_length);
}
designerPdfViewer(
  [
    1,
    3,
    1,
    3,
    1,
    4,
    1,
    3,
    2,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
  ],
  "abc"
);

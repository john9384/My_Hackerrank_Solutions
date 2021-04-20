function main(a) {
  // Read input
  a = a.split(" ");
  a = a.map(Number);

  console.log(a);
  // Construct our map
  let map = new Array(100);
  map.fill(0);

  // Populate map
  for (var i = 0; i < a.length; i++) {
    map[a[i]]++;
  }

  // Find the max sum of two values with keys within one of each other
  var max = 0;
  for (var i = 1; i < map.length; i++) {
    if (map[i] + map[i - 1] > max) {
      max = map[i] + map[i - 1];
    }
  }
  console.log(max);
}

main("1 2 2 3 1 2");

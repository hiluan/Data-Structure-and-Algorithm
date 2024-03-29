const largestComponent = (graph) => {
  const visited = new Set();
  let max = 0;
  for (let key in graph) {
    max = Math.max(max, explore(graph, key, visited));
  }

  return max;
};

const explore = (graph, node, visited) => {
  if (visited.has(node)) return 0;
  visited.add(node);

  let count = 0;
  for (let nei of graph[node]) {
    count += explore(graph, nei, visited);
  }
  return count + 1;
};

console.log(
  largestComponent({
    0: ["8", "1", "5"],
    1: ["0"],
    5: ["0", "8"],
    8: ["0", "5"],
    2: ["3", "4"],
    3: ["2", "4"],
    4: ["3", "2"],
  })
); // -> 4)

// // p: obj;
// // r: num;
// //
// //
// // 8
// // | \
// // 0 - 5
// // |
// // 1
// //              4 - 3
// //               \  |
// //                2

// const largestComponent = (graph) => {
//   const visited = new Set();
//   let max = -Infinity;
//   for (let node in graph) {
//     max = Math.max(max, explore(graph, node, visited));
//   }
//   return max === -Infinity ? 0 : max;
// };

// const explore = (graph, node, visited) => {
//   if (visited.has(node)) return 0;
//   visited.add(node);
//   let count = 0;
//   const stack = [node];

//   while (stack.length > 0) {
//     const c = stack.pop();
//     count++;

//     for (let nei of graph[c]) {
//       !visited.has(nei) && visited.add(nei) && stack.push(nei);
//     }
//   }

//   return count;
// };

// // const explore = (graph, node, visited) => {
// //   if (visited.has(node)) return 0;
// //   visited.add(node);
// //   let count = 1;
// //   for (let nei of graph[node]) {
// //     count += explore(graph, nei, visited);
// //   }
// //   return count;
// // }

// module.exports = {
//   largestComponent,
// };

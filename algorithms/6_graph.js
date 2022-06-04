function breadthSearch(graph, start, end) {
  let queue = [];
  queue.push(start);

  while (queue.length > 0) {
    let current = queue.shift();
    
    if (!graph[current]) {
      graph[current] = []
    }

    if (graph[current].includes(end)) {
      return true;
    } else {
      queue = [...queue, ...graph[current]]
    }
  }
}

// Test
const testedGraph = {};

testedGraph.a = ['c', 'b'];
testedGraph.b = ['f'];
testedGraph.c = ['e', 'd'];
testedGraph.d = ['f'];
testedGraph.e = ['f'];
testedGraph.f = ['g'];

console.log(breadthSearch(testedGraph, 'a', 'g')) // => true

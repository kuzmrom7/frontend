const infinity = Infinity

function shortestPath(graph, start, end) {
  const costs = {}
  const passed = []
  let neighbors = {}

  // first: find all path from start node
  Object.keys(graph).forEach((node) => {
    if (node !== start) {
      let value = graph[start][node]
      costs[node] = value || infinity
    }
  })

  // second: find lowest deps
  let node = findNodeLowestPath(costs, passed)

  // third: working with deps
  while (node) {
    const cost = costs[node]
    neighbors = graph[node]

    Object.keys(neighbors).forEach((neighbor) => {
      let newCost = cost + neighbors[neighbor]

      if (newCost < costs[neighbor]) {
        costs[neighbor] = newCost
      }
    })

    passed.push(node)
    node = findNodeLowestPath(costs, passed)
  }

  return costs[end]
}

function findNodeLowestPath(costs, passed) {
  let lowestCost = infinity
  let lowestNode

  Object.keys(costs).forEach((path) => {
    let cost = costs[path]

    if (cost < lowestCost && !passed.includes(path)) {
      lowestCost = cost
      lowestNode = path
    }
  })

  return lowestNode
}

// Test
const testedGraph = {}
testedGraph.a = { b: 2, c: 1 }
testedGraph.b = { f: 7 }
testedGraph.c = { d: 5, e: 2 }
testedGraph.d = { f: 2 }
testedGraph.e = { f: 1 }
testedGraph.f = { g: 1 }
testedGraph.g = {}

console.log(shortestPath(testedGraph, 'a', 'g'))

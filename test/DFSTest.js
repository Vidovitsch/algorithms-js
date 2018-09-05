const { assert } = require('chai');
const { DFS } = require('../index');
const Graph = require('../util/Graph');

describe('DepthFirstSearch', () => {
  it("DFS object should process the graph at initiation)", () => {
    const source = 'A';
    const graph = new Graph();
    graph.addVertex(source);
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addVertex('E');
    graph.addEdge(source, 'B');
    graph.addEdge(source, 'E');
    graph.addEdge('B', 'D');
    const dfs = new DFS(graph, source);

    // Assert
    assert.equal(dfs.hasPathTo('B'), true);
    assert.equal(dfs.hasPathTo('D'), true);
    assert.equal(dfs.hasPathTo('E'), true);
    assert.equal(dfs.hasPathTo('C'), false);
    assert.equal(dfs.edgeTo[source], null);
  });

  it("hasPathTo() should check if any vertex is connected to the source vertex", () => {
    const source = 'A';
    const graph = new Graph();
    graph.addVertex(source);
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addVertex('E');
    graph.addEdge(source, 'B');
    graph.addEdge(source, 'E');
    graph.addEdge('B', 'D');
    const dfs = new DFS(graph, source);

    // Assert
    assert.equal(dfs.hasPathTo('B'), true);
    assert.equal(dfs.hasPathTo('D'), true);
    assert.equal(dfs.hasPathTo('E'), true);
    assert.equal(dfs.hasPathTo('C'), false);
  });

  it("pathTo() should show the path between any vertex and the source vertex", () => {
    const source = 'A';
    const graph = new Graph();
    graph.addVertex(source);
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addVertex('E');
    graph.addEdge(source, 'B');
    graph.addEdge(source, 'E');
    graph.addEdge('B', 'D');
    const dfs = new DFS(graph, source);

    // Assert
    const pathToE = dfs.pathTo('E');
    assert.equal(pathToE[0], source);
    assert.equal(pathToE[1], 'E');

    const pathToD = dfs.pathTo('D');
    assert.equal(pathToD[0], source);
    assert.equal(pathToD[1], 'B');
    assert.equal(pathToD[2], 'D');

    const pathToZ = dfs.pathTo('Z');
    assert.equal(pathToZ.length, 0);
  });

  it("DFS should change the source and the processing", () => {
    const graph = new Graph();
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addVertex('E');
    graph.addEdge('A', 'B');
    graph.addEdge('A', 'E');
    graph.addEdge('B', 'D');
    const dfs = new DFS(graph, 'A');

    let pathToD = dfs.pathTo('D');
    assert.equal(pathToD[0], 'A');
    assert.equal(pathToD[1], 'B');
    assert.equal(pathToD[2], 'D');
    assert.equal(dfs.edgeTo['A'], null);

    dfs.DFS('B');

    pathToD = dfs.pathTo('D');
    assert.equal(pathToD[0], 'B');
    assert.equal(pathToD[1], 'D');
    assert.equal(dfs.edgeTo['B'], null);
  });
});

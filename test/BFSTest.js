const { assert } = require('chai');
const { BFS } = require('../index');
const Graph = require('../util/Graph');

/* eslint-disable no-undef */
describe('BreadthFirstSearch', () => {
  it("BFS object should process the graph at initiation)", () => {
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
    const bfs = new BFS(graph, source);

    // Assert
    assert.equal(bfs.hasPathTo('B'), true);
    assert.equal(bfs.hasPathTo('D'), true);
    assert.equal(bfs.hasPathTo('E'), true);
    assert.equal(bfs.hasPathTo('C'), false);
    assert.equal(bfs.edgeTo[source], null);
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
    const bfs = new BFS(graph, source);

    // Assert
    assert.equal(bfs.hasPathTo('B'), true);
    assert.equal(bfs.hasPathTo('D'), true);
    assert.equal(bfs.hasPathTo('E'), true);
    assert.equal(bfs.hasPathTo('C'), false);
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
    const bfs = new BFS(graph, source);

    // Assert
    const pathToE = bfs.pathTo('E');
    assert.equal(pathToE[0], source);
    assert.equal(pathToE[1], 'E');

    const pathToD = bfs.pathTo('D');
    assert.equal(pathToD[0], source);
    assert.equal(pathToD[1], 'B');
    assert.equal(pathToD[2], 'D');

    const pathToZ = bfs.pathTo('Z');
    assert.equal(pathToZ.length, 0);
  });

  it("BFS should change the source and the processing", () => {
    const graph = new Graph();
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addVertex('E');
    graph.addEdge('A', 'B');
    graph.addEdge('A', 'E');
    graph.addEdge('B', 'D');
    const bfs = new BFS(graph, 'A');

    let pathToD = bfs.pathTo('D');
    assert.equal(pathToD[0], 'A');
    assert.equal(pathToD[1], 'B');
    assert.equal(pathToD[2], 'D');
    assert.equal(bfs.edgeTo['A'], null);

    bfs.BFS('B');

    pathToD = bfs.pathTo('D');
    assert.equal(pathToD[0], 'B');
    assert.equal(pathToD[1], 'D');
    assert.equal(bfs.edgeTo['B'], null);
  });
});
/* eslint-enable no-undef */

/**
 * BFS container.
 *
 * @param       {Graph} graph graph to search
 * @param       {Any} source vertex to search from
 * @constructor
 */
function BreadthFirstObj(graph, source) {
  this.source = source;
  this.graph = graph;
  this.marked = {};
  this.edgeTo = {};
  this.BFS(source);
}

const B = BreadthFirstObj.prototype;

/**
 * Processes the graph with a breadth first search.
 *
 * @param       {Any} source vertex to search from
 * @constructor
 */
B.BFS = function BFS(source) {
  // Reset properties for source change
  this.source = source;
  this.marked = {};
  this.edgeTo = {};

  const queue = [];
  queue.push(source);
  this.marked[source] = true;
  while (queue.length !== 0) {
    let vertex = queue.shift();
    this.graph.adj(vertex).forEach((adj) => {
      if (!this.marked[adj]) {
        queue.push(adj);
        this.marked[adj] = true;
        this.edgeTo[adj] = vertex;
      }
    });
  }
}

/**
 * Return if the given vertex is connected to the source.
 *
 * @param  {Any}  v vertex
 * @return {Boolean}   true if connected, else false
 */
B.hasPathTo = function hasPathTo(v) {
  return this.marked[v] ? true : false;
}

/**
 * Returns the path from the source to the given vertex.
 * If vertex isn't connected to the source, an empty array gets returned.
 *
 * @param  {Any} v vertex
 * @return {Any[]}   List of vertices
 */
B.pathTo = function pathTo(v) {
    const path = [];
    if (!this.hasPathTo(v)) return [];
    for (let i = v; i != this.source; i = this.edgeTo[i]) {
      path.push(i);
    }
    path.push(this.source);
    return path.reverse();
}

module.exports = BreadthFirstObj;

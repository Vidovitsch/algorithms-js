/**
 * DFS container.
 *
 * @param       {Graph} graph graph to search
 * @param       {Any} source vertex to search from
 * @constructor
 */
function DepthFirstObj(graph, source) {
  this.source = source;
  this.graph = graph;
  this.marked = {};
  this.edgeTo = {};
  this.DFS(source);
}

/**
 * Recusively processes the graph.
 *
 * @param       {Graph} graph  graph to be processed
 * @param       {Any} source vertex to search from
 * @param       {Object} marked collection of vertices that have been visited while searching
 * @param       {Object} edgeTo collection of the path that each vertex got accessed by while searching
 * @constructor
 */
function _DFS(graph, source, marked, edgeTo) {
  marked[source] = true;
  graph.adj(source).forEach((adj) => {
    if (!marked[adj]) {
      _DFS(graph, adj, marked, edgeTo);
      edgeTo[adj] = source;
    }
  });
}

const D = DepthFirstObj.prototype;

/**
 * Processes the graph again with a new source.
 *
 * @param       {Any} source vertex to search from
 * @constructor
 */
D.DFS = function DFS(source) {
  this.source = source;
  this.marked = {};
  this.edgeTo = {};
  _DFS(this.graph, this.source, this.marked, this.edgeTo);
}

/**
 * Return if the given vertex is connected to the source.
 *
 * @param  {Any}  v vertex
 * @return {Boolean}   true if connected, else false
 */
D.hasPathTo = function hasPathTo(v) {
  return this.marked[v] ? true : false;
}

/**
 * Returns the path from the source to the given vertex.
 * If vertex isn't connected to the source, an empty array gets returned.
 *
 * @param  {Any} v vertex
 * @return {Any[]}   List of verteces
 */
D.pathTo = function pathTo(v) {
    const path = [];
    if (!this.hasPathTo(v)) return [];
    for (let i = v; i != this.source; i = this.edgeTo[i]) {
      path.push(i);
    }
    path.push(this.source);
    return path.reverse();
}

module.exports = DepthFirstObj;

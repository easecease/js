class Graph {
    constructor() {
        this.AdjacencyMatrix = new Array();
    }
    addVertex(vertex) {
        if (!this.AdjacencyMatrix[vertex]) {
            this.AdjacencyMatrix[vertex] = [];
        } else {
            return '已有此點';
        }
    }
    addEdge(vertex1,vertex2) {
        if (this.AdjacencyMatrix[vertex1]){
            if (this.AdjacencyMatrix[vertex2]) {
                this.AdjacencyMatrix[vertex1].push(vertex2);
                this.AdjacencyMatrix[vertex2].push(vertex1);
            }
        }
    } 
    removeVertex(vertex) {
        if (this.AdjacencyMatrix[vertex]) {
            this.AdjacencyMatrix[vertex].forEach (function(item) {
                this.removeEdge (vertex,item);
                delete this.AdjacencyMatrix[vertex];
            });
        } else {
            return "未有此點";
        }
    }
    removeEdge(vertex1,vertex2) {
        if (this.AdjacencyMatrix[vertex1]) {
            if (this.AdjacencyMatrix[vertex2]) {
                this.AdjacencyMatrix[vertex1] = this.AdjacencyMatrix[vertex1].filter (
                    (vertex) => vertex !== vertex2 
                )
                this.AdjacencyMatrix[vertex2] = this.AdjacencyMatrix[vertex2].filter (
                    (vertex) => vertex !== vertex1
                )
            }
        }
    }
    printGraph(){
        console.log(this.AdjacencyMatrix);
    }  
}

let graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B');
graph.addEdge('A', 'D');
graph.addEdge('A', 'E');
graph.addEdge('B', 'C');
graph.addEdge('D', 'E');
graph.addEdge('E', 'F');
graph.addEdge('E', 'C');
graph.printGraph();


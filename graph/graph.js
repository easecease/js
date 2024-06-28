class Graph {
    constructor() {
        this.adjacencymatrix = {};
    }
    addVertex(vertex) {
        if (!this.adjacencymatrix[vertex]) {
            this.adjacencymatrix[vertex] = [];
        } else {
            return '已有此點';
        }
    }
    addEdge(vertex1,vertex2) {
        if (this.adjacencymatrix[vertex1]){
            if (this.adjacencymatrix[vertex2]) {
                this.adjacencymatrix[vertex1].push(vertex2);
                this.adjacencymatrix[vertex2].push(vertex1);
            }
        }
    } 
    removeVertex(vertex) {
        if (this.adjacencymatrix[vertex]) {
            this.adjacencymatrix[vertex].forEach (function(item) {
                this.removeEdge (vertex,item);
                delete this.adjacencymatrix[vertex];
            });
        } else {
            return "未有此點";
        }
    }
    removeEdge(vertex1,vertex2) {
        if (this.adjacencymatrix[vertex1]) {
            if (this.adjacencymatrix[vertex2]) {
                this.adjacencymatrix[vertex1] = this.adjacencymatrix[vertex1].filter (
                    (vertex) => vertex !== vertex2 
                )
                this.adjacencymatrix[vertex2] = this.adjacencymatrix[vertex2].filter (
                    (vertex) => vertex !== vertex1
                )
            } else {
                return "未有此邊";
            }
        }
    }
    printGraph(){
        console.log(this.adjacencymatrix);
    }
    printVertex(){
        for (let vertex in this.adjacencymatrix){
            let array = this.adjacencymatrix[vertex];
            let x = array.join("' , '");
            let result = vertex + " : " + " [ '" + x + "' ] ";
            console.log(result);
        };
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
graph.printVertex();


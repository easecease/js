class Graph {
    constructor() {
        this.counter = new Array();
        this.AdjacencyMatrix = new Array();
    }
    addVertex(vertex) {
        let point = vertex;
        if (this.counter.includes(point)) {
            return "已有此點";
        } else {
        this.vertex = new Array();
        this.counter.push(point);
        this.AdjacencyMatrix.push(this.vertex);
        this.length++;
        }
    }
    addEdge(vertex1,vertex2) {
        if ( !this.counter.includes(vertex1) | !this.counter.includes(vertex2)) {
            return "該邊不成立";
        } else {
            if (this.vertex1.includes(vertex2)) {
                return "已有此邊";
            } else {
            this.vertex1.push(vertex2);
            }
            if (this.vertex2.includes(vertex1)) {
                return "已有此邊";
            } else {
            this.vertex2.push(vertex1);
            }
        }
    } 
    removeVertex(vertex) {
        if (this.counter.includes(vertex)) {
            this.AdjacencyMatrix.splice(this.counter.indexOf(vertex),1);

            this.length--;
        } else {
            return "未有此點";
        }
    }
    removeEdge(vertex1,vertex2) {
        if ( !this.counter.includes(vertex1) | !this.counter.includes(vertex2)) {
            return "該邊不存在";
        } else {
            if (this.vertex1.includes(vertex2)) {
                this.vertex1.splice(this.counter.indexOf(vertex2),1);
                this.vertex2.splice(this.counter.indexOf(vertex1),1);
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
graph.printGraph();

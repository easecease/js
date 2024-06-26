class Node{
    constructor(data){
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  class BinarySearchTree{
    constructor(){
      this.branch = null;
    }

    insert(data){
      let newNode = new Node(data);
      if(this.branch == null){
        this.branch = newNode;
      }else{
        this.insertNode(this.branch, newNode);
      }
    }

    insertNode(node, newNode){
      if(newNode.data < node.data){
        if(node.left == null)
          node.left = newNode;
        else
          this.insertNode(node.left, newNode);
      }else{
          if(node.right == null) {
            node.right = newNode;
          } else {
            this.insertNode(node.right,newNode);
          }
      }
    }

    delete(data){

    }
}

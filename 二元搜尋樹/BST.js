class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
class BinarySearchTree {
    constructor() {
      this.branch = null;
    }

    insert(data) {
      let newNode = new Node(data);
      if (this.branch === null) {
        this.branch = newNode;
      } else {
        this.insertNode(this.branch, newNode);
      }
    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right,newNode);
            }
        }
    }

    delete(data) {
        this.branch = this.deleteNode(this.branch, data);
    }

    deleteNode(node, data) {
      if (node === null) {
          return null;
      } else if (data < node.data) {
          node.left = this.deleteNode(node.left, data);
          return node;
      } else if (data > node.data) {
          node.right = this.deleteNode(node.right, data);
          return node;
      } else {
          if (node.left === null && node.right === null) {
              node = null;
              return node;
          } else if (node.left === null) {
              node = node.right;
              return node;
          } else if (node.right === null) {
              node = node.left;
              return node;
          }
          let storage = this.max(node.left);
          node.data = storage.data;
          node.left = this.deleteNode(node.left, storage.data);
          return node;
        }
    }
    max (node = this.branch) {
      if (node) {
        while(node && node.right !== null) {
          node = node.right;
        }
        return node.data;
      }
      return null;
    }

    preOrderTraversal() {
        let bar = [];
        let preHelper = (node) => {
          if (node) {
            bar.push(node.data);
            preHelper(node.left);
            preHelper(node.right);
          }
        }   
        preHelper(this.branch);
        return bar;
    }

    inOrderTraversal() {
        let bar = [];
        let inHelper = (node) => {
          if (node) {
            inHelper(node.left);
            bar.push(node.data);
            inHelper(node.right);
          }
        }    
        inHelper(this.branch);
        return bar;
    }
    postOrderTraversal() {
        const bar = [];
        let postHelper = (node) => {
          if (node) {
            postHelper(node.left);
            postHelper(node.right);
            bar.push(node.data);
          }
        }   
        postHelper(this.branch);
        return bar;
    }

    search (data, node=this.branch) {
        if (!node) {
          return "無此資料!";
        }
        if (data < node.data) {
          return this.search(data, node.left)
        } else if (data > node.data) {
          return this.search(data, node.right)
        }
        if (data === node.data) {
          return "二元樹中有此資料!";
        }
    }  
    
      
}

let tree = new BinarySearchTree()

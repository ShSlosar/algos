class BTNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
        }
    }
    class BST {
        constructor() {
            this.root = null;
        }
        add(data) {
            if(this.root) {
                var runner = this.root
                while(runner) {
                    if(data>runner.data){
                        if(runner.right) {
                            var runner = runner.right
                        }
                        else {
                            runner.right = new BTNode(data)
                            return this
                        }
                    }
                    else{
                        if(runner.left) {
                        var runner = runner.left
                        }
                        else{
                            runner.left = new BTNode(data)
                            return this
                        }
                    }
                    
                }
            }
            if(!this.root){
                this.root = new BTNode(data)
                return this
            }
        }
        contains(data){
            if(this.root){
                var runner = this.root;
                while(runner){
                    if(runner.data == data){
                        console.log('yep');
                        return true
                    }
                    if(data>runner.data){
                        if(!runner.right){
                            console.log('nope');
                            return false
                        }
                        runner = runner.right;
                    }
                    else {
                        if(!runner.left){
                            console.log('nope');
                            return false
                        }
                        runner = runner.left;
                    }
                }
            }
                console.log("nope");
                return false;
        }
        min(){
            if(this.root){
                var runner=this.root;
                while(runner){
                    if(!runner.left){
                        console.log('Smallest Found:',runner.data);
                        return runner.data;
                    }
                    else{
                            runner = runner.left;
                    }
                }
            }
            return this.data;
        }
        max(){
            if(this.root){
                var runner=this.root;
                while(runner){
                    if(!runner.right){
                        console.log('Largest Found:',runner.data);
                        return runner.data;
                    }
                    else{
                        runner = runner.right;
                    }
                }
            }
            return this.data;
        }
        isEmpty(){
            if(!this.root){
                console.log('Empty');
            }
            else{
                console.log('Not Empty');
            }
        }
    }


var firstTree = new BST;
firstTree.add(12);
firstTree.add(1);
firstTree.add(44);
firstTree.add(50);
firstTree.add(55);
firstTree.add(5);
console.log(firstTree);
// console.log(firstTree.add(12));
firstTree.contains(44);
firstTree.min();
firstTree.max();

// else {
//     if(runner.left) {
//         var runner = runner.left
//     }
//     else {
//         runner.left = BTNode(value)
//         return this
//     }
// }
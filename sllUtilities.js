
class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
//Class
class SLL {
    constructor() {
        this.head = null;
    }
    //Method
    addFront(data){
        var new_node= new Node(data);
        if(!this.head){
            this.head=new_node ;
            return this;
        }
        new_node.next=this.head;
        this.head=new_node;
        return this;
    }
    addNodeToFront(data){
        if(!this.head){
            this.head=data ;
            return this;
        }
        data.next=this.head;
        this.head=data;
        return this;
    }
    front(){
        //var head_node = this.head;
        if(!this.head){
            console.log("Headless =>", this.head)
            return this;
        }
        //var headData = head_node.data;
        console.log("first Node =>",this.head.data);
        return this;
    }
    removeFront() {
        if (!this.head) {
            console.log("There is nothing to remove.");
            return this;
        }
        this.head = this.head.next;
        return this;
    }
    contains(data){
        var containsVal = false
        var runner = this.head;
        while(runner){
            if(runner.data == data){
                containsVal = true;
                console.log(`The data: ${data}, is present in the list`);
                return containsVal;
            }
            runner = runner.next
        }
        console.log('No one here but us chimps');
        return containsVal;
    }
    len(){
        var nodeCount = 0;
        if(!this.head){
            console.log(`There are ${nodeCount} nodes in the list.`);
            return nodeCount;
        }
        var runner = this.head;
        while(runner){
            nodeCount++;
            runner = runner.next;
        }
        console.log(`There are ${nodeCount} nodes in the list.`);
        return nodeCount;
    }
    display(){
        var nodeCount = 0;
        if(!this.head){
            console.log(`there are ${nodeCount} values to speak of...`);
            return this;
        }
        var runner = this.head;
        while(runner){
            nodeCount++;
            console.log(`Node #${nodeCount} has the value of ${runner.data}.`);
            if(runner.next == null ){
                console.log('End of the line bub...')
            }
            runner = runner.next
        }
        console.log(`I have displayed the information for ${nodeCount} nodes.`)
        return this;
    }
}







//Instence:
var firstList = new SLL();
var secondList = new SLL();
firstList.addFront(33).front().addFront(20).front().addFront(23).front().addFront(66).front().addFront(99).front();
secondList.front();
firstList.contains("Pizza");
firstList.contains("cheese");
firstList.len();
secondList.len();
firstList.display();
secondList.display();
minToFront(firstList);
firstList.display();
// console.log(firstList.head.data);
// console.log(firstList.head.next.data);
// console.log(firstList.head.next.next.data);
// console.log(firstList.head.next.next.next.data);
// console.log(firstList.head.next.next.next.next.data);


// console.log(LinkedList.m);

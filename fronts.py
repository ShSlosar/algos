


class Node: 
    def __init__(self,data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def addFront(self, val):
        new_node =  Node(val) 
        new_node.next = self.head
        self.head = new_node
        print(self.head)
        return self
        
    def front(self):
        if not self.head:
            print('===========')   
            print('Headless')
            return self.head
        print('===========')   
        print('Head')
        print(self.head.data)
        print("next:", self.head.next.data)
        return self.head.data
    
    def remove_front(self):
        if self.head == None:
            return self.head
        removed_node = self.head
        self.head = removed_node.next
        removed_node.next = None
        print("remove_head:",self.head)
        return self.head
    

lis = LinkedList()
doge = Node("whoopa")
print(doge.data)
cc = Node(11)
print(cc.data)
dog = Node(12)
print(dog.data)
lis.addFront(12)
print("_________________")
print(lis.head.next)
print(lis.head.data)
lis.addFront(11)
print("_________________")
print(lis.head.next.data)
print(lis.head.data)
lis.addFront(10)
print("_________________")
print(lis.head.next.data)
print(lis.head.data)
print('Doge _______________________')
lis.addFront(doge.data)
lis.front()
lis.remove_front()
lis.front()

# doge = LinkedList()
# doge.head = Node(5)
# doge.
# print(doge.head.data)
# front_test = LinkedList()
# print(front_test.front())
# front_test.head = Node(6)
# print(front_test.front())
# doge.remove_front()
# print(doge.head.data)
# print(doge)
# doge.addFront(front_test)
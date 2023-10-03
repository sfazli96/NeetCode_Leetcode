class MinStack:

    def __init__(self):
        self.stack = [] # store the elements of the stack
        self.min_stack = [] # store minimum values we see so far

    def push(self, val: int) -> None:
        self.stack.append(val) # push the val onto the stack
        if not self.min_stack or val <= self.min_stack[-1]: # if its NOT min stack or the val is less than min stack
            self.min_stack.append(val) # push the min values we see so far on stack

    def pop(self) -> None:
        if self.stack.pop() == self.min_stack[-1]: # if the stack pop equal to min values we see so far
            self.min_stack.pop() # remove the element on top of the stack

    def top(self) -> int:
        return self.stack[-1] # gets the top of element of stack

    def getMin(self) -> int:
        return self.min_stack[-1] # retrieves min element in stack


## Overall, all the operations (push, pop, top, getMin) have constant time complexity O(1) and constant space complexity O(1). The space used by the two stacks (stack and min_stack) is directly related to the number of elements pushed onto the stack, so it does not depend on the size of the input.

# Your MinStack object will be instantiated and called as such:
# obj = MinStack()
# obj.push(val)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.getMin()

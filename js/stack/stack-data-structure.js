class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    return this.stackControl.length < this.MAX_SIZE;
  }

  isEmpty() {
    return this.stackControl.isEmpty();
  }

  push(item) {
    if (this.canPush()) {
      this.stackControl.push(item);
    } else {
      throw new Error('STACK_OVERFLOW');
    }
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error('STACK_UNDERFLOW');
    } else {
      this.stackControl.pop();
    }
  }

  display() {
    return this.stackControl;
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;

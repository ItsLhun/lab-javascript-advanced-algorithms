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
    // ... your code goes here
  }

  display() {
    // ... your code goes here
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;

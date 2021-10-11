const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector(
  '#stack-container .warning-bottom'
);
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const newStack = new Stack();

const clearStackInput = () => {
  // ... your code goes here
};

const renderListStack = () => {
  // ... your code goes here
};

renderListStack();

const generateWarningStack = (type) => {
  if (type === 'underflow') {
    // ... your code goes here
  } else if (type === 'overflow') {
    // ... your code goes here
  }
};

const addToStack = () => {
  try {
    warningBottomStack.style.display = 'none';
    newStack.push(stackInput.value);
  } catch (error) {
    warningTopStack.style.display = 'block';
  }
};

const removeFromStack = () => {
  try {
    warningTopStack.style.display = 'none';
    newStack.pop()
  } catch (error) {
    warningBottomStack.style.display = 'block';
  }
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);

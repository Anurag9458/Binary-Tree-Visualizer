let input;

function reset() {
  d3.selectAll('svg').remove();
}

//Here is the code of method tree and array

function treeAndArray() {
  reset();
  let inputText = document.getElementById("array-input")
  document.querySelector('#visual-title').innerHTML = "Binary Tree And Array";
  document.querySelector('#instructions').innerHTML = "Click a value in the binary tree or array to highlight its corresponding location in the data structure.";
  if (inputText.value !== '') {
      input = inputText.value.trim().split(/\s+|\,+/g).map((num) => parseInt(num));
      createBinaryTreeAndArr(input)
  }
}

//Here is the code of method heapify

function heapify() {
  reset();
  let inputText = document.getElementById("array-input")
  if (inputText.value !== '') {
    input = inputText.value.trim().split(/\s+|\,+/g).map((num) => parseInt(num));
    makeHeap(input, input.length);
    createBinaryTreeAndArr(input);
    document.getElementById('instructions').innerHTML = "<p> Parent's value is always greater than or equal to the values of its children.</p>";
    document.getElementById('visual-title').innerHTML = "Max-Heap Binary Tree And Array";
  }
}

//Here is the code of Create binary tree and arr

function createBinaryTreeAndArr(arr) {
  arrayContainer = createContainer("array-visual", arr, arr.length * 60, 100);
  let tree = new Tree()
  tree.createBinaryTree(input)
  createArray(arr, 2, 30, 50, 50);
}

//Here is the code of Create binary search tree
function createBinarySearchTree() {
  let inputText = document.getElementById("array-input")
  if (inputText.value !== '') {
    reset();
    input = inputText.value.trim().split(/\s+|\,+/g).map((num) => parseInt(num));
    input.sort((a, b) => a - b);
    createBinaryTreeAndArr(input);
    document.querySelector('#visual-title').innerHTML = "Binary Search Tree";
    document.querySelector('#instructions').innerHTML = "The input data sorted and arranged into a Binary Search Tree.";
  }
}

//default values
input = [10, 20, 60, 30, 70, 40, 50];
let inputTest = document.getElementById("array-input")
inputTest.value = input;
createBinaryTreeAndArr(input);

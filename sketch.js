let cols; //number of columns
let rows; //number of rows
let w; //width of a box
let h; //height of a box
let grid; //grid containing all nodes (a 2D array)
let start, end;
let stack;
let queue;
var sketch1;
var sketch2;

function setup() {
  cols = 40;
  rows = 40;
  w = 400/cols;
  h = 400/rows;
  grid = new Array(rows);
  
  for(let i = 0; i < rows; i++){
    grid[i] = new Array(cols);
  }
  
  for(let i = 0; i < rows; i++){
    for(let j = 0; j < cols; j++){
      grid[i][j] = new Node();
      grid[i][j].i = i;
      grid[i][j].j = j;
      grid[i][j].x = i*w;
      grid[i][j].y = j*h;
    }
  }
  
  for(let i = 0; i < rows; i++){
    for(let j = 0; j < cols; j++){
      grid[i][j].addNeighbours();
    }
  }
  
  start = grid[floor(random(0, rows-1))][floor(random(0, rows-1))];
  start.start = true;
  end = grid[floor(random(0, rows-1))][floor(random(0, rows-1))];
  end.goal = true;
  
  stack = new Stack();
  stack.push(start);
  
  queue = new Queue();
  queue.push(start);
  
  for(let i = 0; i < cols; i++){
    for(let j = 0; j < rows; j++){
      if(random()<0.3 && grid[i][j]!=start && grid[i][j]!=end){
        grid[i][j].block = true;
      }
    }
  }
  
  // var dfsp5 = new p5(sketch1);
  // var bfsp5 = new p5(sketch2);
}

contains = function(arr, element){
  for(let i = 0; i<arr.length; i++){
    if(arr[i] == element){
      return true;
    }
  }
  return false;
}
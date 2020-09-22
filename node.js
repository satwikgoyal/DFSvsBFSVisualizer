let Node = function(){
  this.start = false;
  this.goal = false; 
  this.block = false;

  this.i = -1;
  this.j = -1;
  this.x = this.i*w;
  this.y = this.j*h;
  this.parent1 = null;
  this.parent2 = null;
  this.neighbours = [];
  
  this.draw = function(inputColor) {
  //   if(this.start){
  //     // fill(22, 205,11); //green
  //     fill(51, 51, 255);
  //     stroke(300);
  // strokeWeight(1);
  //     rect(this.x, this.y, w, h);
  //   }
  //   else if(this.goal){ //red
  //     // fill(139,0,0);
  //     fill(255, 71, 26);
  //     stroke(300);
  // strokeWeight(1);
  //     rect(this.x, this.y, w, h);
  //   }
  //   else if(this.block){
  //     fill(50); //black
  //     // fill(179, 0, 0);
  //     stroke(300);
  // strokeWeight(1);
  //     rect(this.x, this.y, w, h);
  //   } 
  //   else if(inputColor){
  //     fill(inputColor);
  //     stroke(300);
  // strokeWeight(1);
  //     rect(this.x, this.y, w, h);
  //   }
  //   else{
  //     // fill(200);
  //     // fill(102, 217, 255);
  //     fill(300);
  //     stroke(300);
  // strokeWeight(1);
  //     rect(this.x, this.y, w, h);
  //   }
  }
  
  this.addNeighbours = function(){
    if(this.i>0){
      this.neighbours.push(grid[this.i-1][this.j]);
      if(this.j>0){
        this.neighbours.push(grid[this.i-1][this.j-1]);
      }
      if(this.j<cols-1){
        this.neighbours.push(grid[this.i-1][this.j+1]);
      }
    }
    if(this.i<rows-1){
      this.neighbours.push(grid[this.i+1][this.j]);
      if(this.j>0){
        this.neighbours.push(grid[this.i+1][this.j-1]);
      }
      if(this.j<cols-1){
        this.neighbours.push(grid[this.i+1][this.j+1]);
      }
    }
    if(this.j>0){
      this.neighbours.push(grid[this.i][this.j-1]);
    }
    if(this.j<cols-1){
      this.neighbours.push(grid[this.i][this.j+1]);
    }
  }
}
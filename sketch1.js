sketch1 = function(dfs){
  dfs.visited = [];
  
  dfs.setup = function(){
    canvas1 = dfs.createCanvas(400, 400);
    // canvas1.elt.style.position = 'left';
    dfs.background(220);
    
    dfs.grid = grid;
    
    for(let i = 0; i<rows; i++){
      for(let j = 0; j<cols; j++){
        // dfs.grid[i][j].draw();
        dfs.nodeDraw(dfs.grid[i][j], false);
      }
    }
  }
  
  dfs.draw = function(){
    if(!stack.isEmpty()){
      let current = stack.pop();
      if(current == end){
        dfs.noLoop();
      }
      else {
        if(!contains(dfs.visited, current)){
          dfs.visited.push(current);
          for(let i = 0; i < current.neighbours.length; i++){
            if(!contains(dfs.visited, current.neighbours[i]) && !current.neighbours[i].block){
              current.neighbours[i].parent1 = current;
              stack.push(current.neighbours[i]);
            }   
          }
        }
      }
      for(let i = 0; i < dfs.visited.length; i++){
        // dfs.visited[i].draw(color(179, 255, 179));
        dfs.nodeDraw(dfs.visited[i], color(179, 255, 179));
      }

      let path = [];
      let p = current;
      while(p){
        // p.draw(color(148,0,211));
        // p = p.parent;
        path.push(p);
        p = p.parent1;
      }

    dfs.noFill();
    dfs.stroke(0, 77, 0);
    dfs.strokeWeight(w / 4);
    dfs.beginShape();
    for (var i = 0; i < path.length; i++) {
      dfs.vertex(path[i].i * w + w / 2, path[i].j * h + h / 2);
    }
    dfs.endShape();

    }
  }
  
  dfs.nodeDraw = function(node, inputColor){
    if(node.start){
      // fill(22, 205,11); //green
      dfs.fill(51, 51, 255);
      dfs.stroke(300);
	  dfs.strokeWeight(1);
      dfs.rect(node.x, node.y, w, h);
    }
    else if(node.goal){ //red
      // fill(139,0,0);
      dfs.fill(255, 71, 26);
      dfs.stroke(300);
	  dfs.strokeWeight(1);
      dfs.rect(node.x, node.y, w, h);
    }
    else if(node.block){
      dfs.fill(50); //black
      // fill(179, 0, 0);
      dfs.stroke(300);
	  dfs.strokeWeight(1);
      dfs.rect(node.x, node.y, w, h);
    } 
    else if(inputColor){
      dfs.fill(inputColor);
      dfs.stroke(300);
	  dfs.strokeWeight(1);
      dfs.rect(node.x, node.y, w, h);
    }
    else{
      // fill(200);
      // fill(102, 217, 255);
      dfs.fill(200);
      dfs.stroke(300);
	  dfs.strokeWeight(1);
      dfs.rect(node.x, node.y, w, h);
    }
  }
}

var dfsp5 = new p5(sketch1);
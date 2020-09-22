sketch2 = function(bfs){
  bfs.visited = [];
  
  bfs.setup = function(){
    canvas2 = bfs.createCanvas(400, 400);
    // canvas2.elt.style.position = 'right';
    bfs.background(220);
    
    bfs.grid = grid;
    
    for(let i = 0; i<rows; i++){
      for(let j = 0; j<cols; j++){
        // bfs.grid[i][j].draw();
        bfs.nodeDraw(bfs.grid[i][j], false);
      }
    }
  }
  
  bfs.draw = function(){
    if(!queue.isEmpty()){
      let current = queue.pop();
      if(current == end){
        bfs.noLoop();
      }
      else {
        if(!contains(bfs.visited, current)){
          bfs.visited.push(current);
          for(let i = 0; i < current.neighbours.length; i++){
            if(!contains(bfs.visited, current.neighbours[i]) && !current.neighbours[i].block){
              current.neighbours[i].parent2 = current;
              queue.push(current.neighbours[i]);
            }   
          }
        }
      }
      for(let i = 0; i < bfs.visited.length; i++){
        // bfs.visited[i].draw(color(179, 255, 179));
        bfs.nodeDraw(bfs.visited[i], color(180, 230, 255));
      }

      let path = [];
      let p = current;
      while(p){
        // p.draw(color(148,0,211));
        // p = p.parent2;
        path.push(p);
        p = p.parent2;
      }

    bfs.noFill();
    bfs.stroke(0, 77, 0);
    bfs.strokeWeight(w / 4);
    bfs.beginShape();
    for (var i = 0; i < path.length; i++) {
      bfs.vertex(path[i].i * w + w / 2, path[i].j * h + h / 2);
    }
    bfs.endShape();

    }
  }
  
  bfs.nodeDraw = function(node, inputColor){
    if(node.start){
      // fill(22, 205,11); //green
      bfs.fill(51, 51, 255);
      bfs.stroke(300);
	  bfs.strokeWeight(1);
      bfs.rect(node.x, node.y, w, h);
    }
    else if(node.goal){ //red
      // fill(139,0,0);
      bfs.fill(255, 71, 26);
      bfs.stroke(300);
	  bfs.strokeWeight(1);
      bfs.rect(node.x, node.y, w, h);
    }
    else if(node.block){
      bfs.fill(50); //black
      // fill(179, 0, 0);
      bfs.stroke(300);
	  bfs.strokeWeight(1);
      bfs.rect(node.x, node.y, w, h);
    } 
    else if(inputColor){
      bfs.fill(inputColor);
      bfs.stroke(300);
	  bfs.strokeWeight(1);
      bfs.rect(node.x, node.y, w, h);
    }
    else{
      // fill(200);
      // fill(102, 217, 255);
      bfs.fill(200);
      bfs.stroke(300);
	  bfs.strokeWeight(1);
      bfs.rect(node.x, node.y, w, h);
    }
  }
}

var dfsp5 = new p5(sketch2);
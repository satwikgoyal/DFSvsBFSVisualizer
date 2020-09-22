function Stack (){
    this.top = -1;
    this.a = [];
  
  this.isEmpty = function(){
    //no elements in the stack
    if(this.top < 0){
      return true;
    }
    //more than 1 element in the stack
    else{
      return false;
    }
    
  }

  this.push = function(node) {
    this.top += 1;
    this.a.push(node);
  }

  this.pop = function() {
    let node = this.a[this.top];
    this.remove(node);
    this.top -= 1;
    return node;
  }
  
  this.remove = function(node){
    let temp = [];
    let removed = false;
    for(let i = this.a.length-1; i>=0; i--){
      if(this.a[i] === node && !removed){
        removed = true;
      }
      else{
        temp.push(this.a[i]);
      }
    }
    this.a = temp;
  }
}
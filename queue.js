function Queue (){
    this.a = [];
  
  this.isEmpty = function(){
    return (this.a.length == 0);
    
  }

  this.push = function(node) {
    this.a.push(node);
  }

  this.pop = function() {
    let node = this.a[0];
    this.remove(node);
    return node;
  }
  
  this.remove = function(node){
    let temp = [];
    let removed = false;
    for(let i = 0; i<this.a.length; i++){
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
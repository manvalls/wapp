
void function(){
  var i = Symbol(),
      object = Symbol();

  function Iterator(obj){
    this[i] = 0;
    this[object] = obj;
  }

  Iterator.prototype.next = function(){
    var ret = {};

    if(this[i] < this[object].length){
      ret.done = false;
      ret.value = this[object][this[i]++];
      return ret;
    }

    ret.done = true;
    return ret;
  };

  Object.defineProperty(Object.prototype,Symbol.iterator,{
    value: function(){ return new Iterator(this); },
    writable: true,
    configurable: true
  });

}();

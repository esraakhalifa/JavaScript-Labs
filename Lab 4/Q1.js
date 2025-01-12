Array.prototype.average = function() {
    
    for(var i = 0; i < this.length; i++)
    {
        if ( (typeof this[i] !== 'number' && isNaN(this[i]) )|| this[i] =='')
        {
            return "The array is not all numeric.";
        }
    }
    var sum = 0;
    var count = 0;
    this.forEach(num => sum += num);
    this.forEach(() => count++)
    return (sum/count) ;
    //return this[0];
  };

  console.log([1, 2, 3].average());
  console.log([1, 'esraa', 3].average());
  console.log([1, "", 3].average());
  console.log([1, "", true].average());
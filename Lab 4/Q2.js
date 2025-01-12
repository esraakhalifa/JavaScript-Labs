var user = {
    username: "alice",
    profile: {
      email: "alice@example.com",
      age: 25
    }
  };
  
  Object.prototype.toString = function()
  {
    if(this.hasOwnProperty("message")) return this.message;
    else return "This is an object";
  }
  var obj = { message: 'This is a message' };
  console.log(String(user));
  console.log(String(obj));


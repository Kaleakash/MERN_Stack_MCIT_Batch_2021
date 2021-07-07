let chai = require("chai").assert;
var n = 100;
var fname="Ramesh";
var abc = true;
let num = [10,20,30,40,50];
function dis() {

}

chai.isTrue(abc);
chai.isArray(num);
chai.isFunction(dis);

chai.typeOf(n,"number");
chai.typeOf(fname,"string");
chai.typeOf(abc,"boolean")

chai.lengthOf(fname,"6")
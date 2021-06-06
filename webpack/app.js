import {dis1,fname} from './a';           //ES6 style included 
var obj2 = require("./b.js");       //ES5 style included 
dis1();
obj2.dis2();
console.log(obj2.a);
console.log(fname);
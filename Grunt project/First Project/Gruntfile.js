var grunt = require("grunt");

grunt.registerTask("default",()=> {
    console.log("This is grunt default task");
})

grunt.registerTask("first",()=> {
    console.log("This is first task");
})

grunt.registerTask("second",()=> {
    console.log("This is grunt second task");
})
var grunt = require("grunt");

grunt.initConfig({
    pkg:grunt.file.readJSON("package.json"),
    uglify:{
        build:{
            src:"src/demo.js",
            dest:"dist/demo.min.js"
        }
    }
});

grunt.loadNpmTasks("grunt-contrib-uglify");

grunt.registerTask("default",["uglify"])
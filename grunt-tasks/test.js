/*jshint node:true */
// TODO Replace this with CB configuration
module.exports = function (grunt) {

    grunt.registerTask('test', 'Run tests on singleRun karma server', function () {
        //this task can be executed in 3 different environments: local, Travis-CI and Jenkins-CI
        //we need to take settings for each one into account
        // if (process.env.TRAVIS) {
        //     grunt.task.run('karma:travis');
        // } else {
        //     grunt.task.run(this.args.length ? 'karma:jenkins' : 'karma:continuous');
        // }
        grunt.task.run('karma:continuous');
    });
};
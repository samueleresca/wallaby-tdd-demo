module.exports = function (wallaby) {
    return {
        files: [
            // PhantomJs Function.bind polyfill
            { pattern: 'node_modules/phantomjs-polyfill/bind-polyfill.js', instrument: false },
            { pattern: 'node_modules/chai/chai.js', instrument: false },
            { pattern: 'node_modules/jquery/dist/jquery.js', instrument: false },
            { pattern: 'src/**/*.js' },
            { pattern: 'specs/*.html' },
            { pattern: 'specs/mockHTML/*.html' },
        ],

        tests: [
            { pattern: 'test/**/*.spec.js' }
        ],
        preprocessors: {
            'test/**/*.html': ['html2js'],
            'test/*.html': ['html2js'],
            

        },
        testFramework: "mocha",

        bootstrap: function () {
            window.expect = chai.expect;
            var should = chai.should();
        }
    };
};

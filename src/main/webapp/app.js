Application.run(function ($rootScope) {
    "use strict";
    /* perform any action with the variables inside this block(on-page-load) */
    $rootScope.onAppVariablesReady = function () {
        /*
         * variables can be accessed through 'Variables' service here
         * e.g. Variables.staticVariable1.getData()
         */
    };
});
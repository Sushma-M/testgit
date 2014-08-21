Application.$controller("CommonPageController", ['$scope', 'Widgets', 'Variables',
    function ($scope, Widgets, Variables) {
        "use strict";

        /* perform any action with the variables inside this block(on-page-load) */
        $scope.onPageVariablesReady = function() {
            /*
             * variables can be accessed through 'Variables' service here
             * e.g. Variables.staticVariable1.getData()
             */
        };
        /* perform any action with widgets inside this block */
        $scope.onPageReady = function () {
            /*
             * widgets can be accessed through 'Widgets' service here
             * e.g. Widgets.byId(), Widgets.byName()or access widgets by Widgets.widgetName
             */
        };

    }
    ]);

Application.$controller("CommonLoginDialogController", ["$scope", "DialogService",
    function ($scope, DialogService) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.CommonLoginDialogError = function ($event, $isolateScope) {
            /*
             * Error message can be accessed from the property $isolateScope.loginMessage.caption
             */
        };

        $scope.CommonLoginDialogSuccess = function ($event, $isolateScope) {
            DialogService.hideDialog("CommonLoginDialog");
        };
    }
    ]);
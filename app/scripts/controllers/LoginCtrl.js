(function() {
    function LoginCtrl($cookies, $uibModalInstance) {
        var login = this;

          login.setUsername = function() {

              $uibModalInstance.close()
        };

    }

    angular
        .module('blocChat')
        .controller('LoginCtrl', ['$cookies', '$uibModalInstance', LoginCtrl]);
})();

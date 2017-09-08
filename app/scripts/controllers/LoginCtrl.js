(function() {
    function LoginCtrl($cookies, $uibModalInstance) {
        var login = this;

          login.setUsername = function() {
              if (login.username) {
                  $cookies.put('blocChatCurrentUser', login.username);
                  $uibModalInstance.close()
                  window.location.reload(true);
              } else {
                alert("Set a username");
              }

        };

    }

    angular
        .module('blocChat')
        .controller('LoginCtrl', ['$cookies', '$uibModalInstance', LoginCtrl]);
})();

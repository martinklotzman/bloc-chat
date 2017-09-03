(function() {
    function LoginCtrl($cookies, $uibModalInstance) {
        var login = this;

          login.setUsername = function() {
              if (login.name) {
                  $cookies.put('blocChatCurrentUser', login.name);
                  var username = $cookies.get('blocChatCurrentUser');
                  console.log(username);
                  $uibModalInstance.close()
              } else {
                alert("Set a username");
              }

        };

    }

    angular
        .module('blocChat')
        .controller('LoginCtrl', ['$cookies', '$uibModalInstance', LoginCtrl]);
})();

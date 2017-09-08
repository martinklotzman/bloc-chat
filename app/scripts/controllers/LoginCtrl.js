(function() {
    function LoginCtrl($cookies, $uibModalInstance) {
        var login = this;

          login.setUsername = function() {
              if (login.username) {
                  var username = $cookies.get('blocChatCurrentUser');
                  $cookies.put('blocChatCurrentUser', login.username);

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

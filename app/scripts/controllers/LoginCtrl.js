(function() {
    function LoginCtrl(BlocChatCookies, $uibModalInstance) {
        var cookie = this;

          cookie.setUsername = function() {
            console.log("CookiesCtrl");
          // do something to set user name
        };

    }

    angular
        .module('blocChat')
        .controller('LoginCtrl', ['BlocChatCookies', '$uibModalInstance', LoginCtrl]);
})();

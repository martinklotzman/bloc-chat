(function() {
    function CookiesCtrl(BlocChatCookies, $uibModalInstance) {
        var cookie = this;

    }

    angular
        .module('blocChat')
        .controller('CookiesCtrl', ['BlocChatCookies', '$uibModalInstance', CookiesCtrl]);
})();

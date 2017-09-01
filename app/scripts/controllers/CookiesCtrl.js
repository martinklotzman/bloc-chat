(function() {
    function ModalCtrl(Room, $uibModalInstance) {
        var cookie = this;

    }

    angular
        .module('blocChat')
        .controller('CookiesCtrl', ['Room', '$uibModalInstance', CookiesCtrl]);
})();

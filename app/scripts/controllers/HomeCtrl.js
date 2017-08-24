(function() {
    function HomeCtrl(Room, $uiModal) {
        var home = this;
        home.rooms = Room.all;
        home.newRoom = Room.add;

        home.addRoom = function() {
            $uibModal.open({
                templateUrl: '/templates/modal.html',
                size: 'sm',
                controllerAs: 'ModalCtrl as modal'
            });
        }
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uiModal', HomeCtrl]);
})();

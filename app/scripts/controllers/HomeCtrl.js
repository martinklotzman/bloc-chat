(function() {
    function HomeCtrl(Room, $uibModal) {
        var home = this;
        home.rooms = Room.all;

        home.addRoom = function() {
            console.log("test");
            $uibModal.open({
                templateUrl: '/templates/modal.html',
                size: 'sm',
                controller: 'ModalCtrl as modal'
            });
        }
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();

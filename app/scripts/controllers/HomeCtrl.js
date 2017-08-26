(function() {
    function HomeCtrl(Room, $uibModal) {
        var home = this;
        home.rooms = Room.all;
        home.currentRoom = null;

        home.addRoom = function() {
            console.log("opened");
            $uibModal.open({
                templateUrl: '/templates/modal.html',
                size: 'sm',
                controller: 'ModalCtrl',
                controllerAs: 'modal'
            });
        }

        home.selectRoom = function(room) {
            console.log("selected");
            home.currentRoom = room.$value;
      }
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();

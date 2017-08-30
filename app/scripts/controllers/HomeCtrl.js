(function() {
    function HomeCtrl(Room, $uibModal, Message) {
        var home = this;
        home.rooms = Room.all;
        home.currentRoom = null;
        home.messages = Message.all;

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
            home.messages = Message.getByRoomId(room.$id);
      }
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', 'Message', HomeCtrl]);
})();

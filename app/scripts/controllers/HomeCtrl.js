(function() {
    function HomeCtrl(Room, $uibModal, Message) {
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

        home.getMessageInfo = function() {
            //associate message.getByRoomId with currentRoom?
        }
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', 'Message', HomeCtrl]);
})();

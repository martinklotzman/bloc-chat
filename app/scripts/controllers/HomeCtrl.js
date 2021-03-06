(function() {
    function HomeCtrl(Room, $uibModal, Message, $cookies) {
        var home = this;
        home.rooms = Room.all;
        home.currentRoom = null;
        home.currentUser = $cookies.get('blocChatCurrentUser')
        home.newMessage = {};


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

            home.currentRoom = room.$value;
            home.messages = Message.getByRoomId(room.$id);
            home.newMessage.roomID = room.$id;
      }

        home.sendMessage = function() {

                home.newMessage.username = home.currentUser;
                home.newMessage.timestamp = firebase.database.ServerValue.TIMESTAMP;
                Message.send(home.newMessage);
                console.log(home.newMessage);

      }

    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', 'Message', '$cookies', HomeCtrl]);
})();

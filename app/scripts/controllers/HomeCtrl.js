(function() {
    function HomeCtrl(Room, $uibModal, Message, $cookies) {
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
            home.messages = Message.getByRoomId(room.$id);
      }

        home.sendMessage = function(newMessage) {
            if(newMessage) {
                //get username
                //get roomID
                //get message
                home.username = $cookies.get('blocChatCurrentUser');
                Message.send(newMessage);
                console.log(home.username);
            } else {
                alert('Enter a message');
            }

      }

    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', 'Message', '$cookies', HomeCtrl]);
})();

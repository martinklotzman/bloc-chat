(function() {
    function Message($firebaseArray) {
        var Message = {};
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);

        Message.getByRoomId = function(roomID) {
            console.log("get messages");
            messages.orderByChild("roomID").equalTo("user-message");
        };

        return Message;
    }

    angular
        .module('blocChat')
        .factory('Message', ['firebaseArray', Message]);
})();

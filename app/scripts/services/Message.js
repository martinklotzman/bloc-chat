(function() {
    function Message($firebaseArray) {
        var Message = {};
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);

        Message.all = messages;

        Message.getByRoomId = function(roomId) {
            console.log("get messages");
            messages.orderByChild("messages").equalTo(roomId);
        };

        return Message;
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();

(function() {
    function Message($firebaseArray) {
        var Message = {};
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);

        Message.all = messages;

        Message.getByRoomId = function(roomID) {
            console.log("get message");
            return $firebaseArray(ref.orderByChild("roomID").equalTo(roomID));
        };

        Message.send = function(newMessage) {
            //firebaseRef.set({Title: title, Content: post, Date: date});
            messages.$add(newMessage);
            console.log(newMessage);

        };

        return Message;

    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();

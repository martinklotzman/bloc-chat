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
            //take message object as argument and submit to firebase
            //send message... username & time?
            //firebaseRef.set({Title: title, Content: post, Date: date});
            var date = Date.now();
            messages.$add(newMessage);
            //messages.$add(Firebase.ServerValue.TIMESTAMP);
            console.log(newMessage);
            console.log(date);

        };

        return Message;

    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();

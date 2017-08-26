(function() {
    function Message($firebaseArray) {
        var Message = {};
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);

        Message.getByRoomId = function(roomID) {

        };

        return Message;
    }

    angular
        .module('blocChat')
        .factory('Message', ['firebaseArray', Message]);
})();

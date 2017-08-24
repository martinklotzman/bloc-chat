(function() {
    function HomeCtrl(Room) {
        var home = this;
        home.rooms = Room.all;
        home.newRoom = Room.add;
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();

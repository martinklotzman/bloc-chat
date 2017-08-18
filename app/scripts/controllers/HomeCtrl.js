(function() {
    function HomeCtrl(Room) {
        this.rooms = Room.all;
        this.newRoom = Room.add;
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();

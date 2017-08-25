(function() {
    function ModalCtrl(Room, $uibModalInstance) {
        var modal= this;

        modal.createRoom = function() {
          Room.add(modal.input);
          $uibModalInstance.close()
        };

        modal.cancel = function() {
          $uibModalInstance.dismiss();
        };
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl]);
})();

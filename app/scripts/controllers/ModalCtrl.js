(function() {
    function ModalCtrl(Room, $uibModalInstance) {
        var modal= this;

        modal.newRoom = function() {

          $uibModalInstance.close()
        };

        modal.cancel = function() {
          $uibModalInstance.dismiss('cancel');
        };
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl]);
})();

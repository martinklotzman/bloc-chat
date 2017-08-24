(function() {
    function ModalCtrl(Room, $uibModalInstance) {
      var $ctrl = this;
      $ctrl.items = items;
      $ctrl.selected = {
      item: $ctrl.items[0]
      };

      $ctrl.ok = function () {
      $uibModalInstance.close($ctrl.selected.item);
      };

      $ctrl.cancel = function () {
      $uibModalInstance.dismiss('cancel');
      };

        /*modal.newRoom = function() {

          $uibModalInstance.close()
        };

        modal.cancel = function() {
          $uibModalInstance.dismiss('cancel');
        };*/
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl]);
})();

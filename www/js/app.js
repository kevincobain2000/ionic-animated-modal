angular.module('ionicApp', ['ionic'])

.controller('AppCtrl', function($scope, $ionicModal) {
  
  $scope.modalAnimations = ['bounceIn'
                              , 'bounceInDown'
                              , 'bounceInLeft'
                              , 'bounceInRight'
                              , 'bounceInUp'
                              , 'fadeIn'
                              , 'fadeInDown'
                              , 'fadeInDownBig'
                              , 'fadeInLeft'
                              , 'fadeInLeftBig'
                              , 'fadeInRight'
                              , 'fadeInRightBig'
                              , 'fadeInUp'
                              , 'fadeInUpBig'
                              , 'flipInX'
                              , 'flipInY'
                              , 'lightSpeedIn'
                              , 'rotateIn'
                              , 'rotateInDownLeft'
                              , 'rotateInDownRight'
                              , 'rotateInUpLeft'
                              , 'rotateInUpRight'
                              , 'slideInUp'
                              , 'slideInDown'
                              , 'slideInLeft'
                              , 'slideInRight'
                              , 'zoomIn'
                              , 'zoomInDown'
                              , 'zoomInLeft'
                              , 'zoomInRight'
                              , 'zoomInUp'
                              , 'rollIn'
                              ]
  
  $scope.showModal = function(animation) {        
    console.log(animation);
    $ionicModal.fromTemplateUrl('templates/modal.html', {
      scope: $scope,
      animation: 'animated ' + animation,
      hideDelay:1020
    }).then(function(modal) {
      $scope.modal = modal;
      $scope.modal.show();
      $scope.hideModal = function(){
        $scope.modal.hide();
        // Note that $scope.$on('destroy') isn't called in new ionic builds where cache is used
        // It is important to remove the modal to avoid memory leaks
        $scope.modal.remove();
      }
    });
  };

});
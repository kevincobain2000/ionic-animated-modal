### DEMO


http://codepen.io/kevincobain2000/pen/EjJzjx

### Add Animate css

https://daneden.github.io/animate.css/

```
<link href="//cdnjs.cloudflare.com/ajax/libs/animate.css/3.4.0/animate.min.css" rel="stylesheet">
```

### Copy Style.css

https://github.com/kevincobain2000/ionic-animated-modal/tree/master/www/css

### Using a Modal


#### HTML

```
<button type="" class="button" ng-click="showModal('bounceIn')">showModal bounceIn</button>
```

#### In your controller

```
  $scope.showModal = function(animation) {
    console.log(animation);
    $ionicModal.fromTemplateUrl('templates/modal.html', {
      scope: $scope,
      animation: 'animated ' + animation,
      hideDelay:920
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
```


#### List of Animations

bounceIn
bounceInDown

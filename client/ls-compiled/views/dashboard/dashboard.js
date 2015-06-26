// Generated by LiveScript 1.3.1
angular.module('parliva').controller('DashboardController', ['$scope', '$meteor', '$state', 'plCategories'].concat(function($scope, $meteor, $state, plCategories){
  $scope.categories = plCategories.get();
  $scope.categoryLabel = function(categoryKey){
    var category;
    category = _.find($scope.categories, function(c){
      return c.key === categoryKey;
    });
    if (category) {
      return category.label;
    }
  };
  $scope.users = $meteor.collection(function(){
    return Meteor.users.find({
      _id: {
        $ne: Meteor.userId()
      }
    });
  }, false).subscribe('consultors');
  return $scope.chat = function(user){
    return $state.go('chat', {
      userId: user._id
    });
  };
}));
// Generated by LiveScript 1.4.0
angular.module('angularMeteor').filter('fsUrl', function(){
  return function(fileId, collection){
    if (fileId) {
      return window[collection].findOne(fileId).url({
        brokenIsFine: true
      });
    } else {
      return fileId;
    }
  };
});
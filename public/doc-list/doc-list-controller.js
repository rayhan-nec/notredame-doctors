angular.module('notredemian-doc-list.controllers')

.controller( 'DocListController', function($scope, Doctors) {

  $scope.randomizeDoctorList = function(inputArray){
    for(var i = 0; i < inputArray.length; i++){
      const j = Math.floor(Math.random() * inputArray.length)
      const temp = inputArray[i]
      if(j==i){
        continue;
      }
      inputArray[i] = inputArray[j]
      inputArray[j] = temp
    };
    return inputArray;
  };

  $scope.allDoctors = $scope.randomizeDoctorList(Doctors);

  
});

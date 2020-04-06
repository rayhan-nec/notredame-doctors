angular.module('notredemian-doc-list.controllers')

.controller( 'DocListController', function($scope, Doctors) {

  $scope.getUniqueLocations = function(){
    let allLocations = [];
    allLocations.push('All');
    Doctors.forEach(doctor => {
      allLocations.push(doctor.location);
    })
    let uniqueLocations = [...new Set(allLocations)];
    //let uniqueLocationsWithID = [];
    //uniqueLocationsWithID.push({location: "All", id: 0});
    //uniqueLocations.forEach((location, idx)=>{
    //  uniqueLocationsWithID.push({location: location, id: idx+1});
    //})
    return uniqueLocations;
  };

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
  $scope.uniqueLocations = $scope.getUniqueLocations();
  $scope.doctorLocation = $scope.uniqueLocations[0];
  
});

'use strict';

angular.module('JSApp')
  .controller('MainCtrl', function ($scope) {

    // the notes
    $scope.notes = [{
    	title: 'Here is a example title',
    	body: 'Some text here'
    }]

    // save notes
    $scope.save = function() {
    	if( !$scope.title ) {
    		alert("The title shold not be empty :)");
    	}
    	else {
	    	$scope.notes.push({
	    		title: $scope.title,
	    		body: $scope.body
	    	})

	    	$scope.title = ''
	    	$scope.body = ''
	    };
    };

    // delete notes
    $scope.delete = function(index) {
    	$scope.notes.splice(index, 1);
    }

  });

'use strict';

angular.module('JSApp')
	.controller('MainCtrl', function ($scope) {

		$scope.index = '';

		// the notes
		$scope.notes = [{
			title: 'Here is an example title',
			body: 'Some text here'
		}];

		// save notes
		$scope.save = function(index) {
			if(!index) {
				if( !$scope.title ) {
					return false;
				} else {
					$scope.notes.push({
						title: $scope.title,
						body: $scope.body
					});

					$scope.title = '';
					$scope.body = '';
				}
			} else {
				$scope.notes.splice(index, 1, {
					title: $scope.title,
					body: $scope.body
				});

				$scope.index = '';
			}
		};

		// delete notes
		$scope.delete = function(index) {
			$scope.notes.splice(index, 1);
		};

		// edit notes
		$scope.edit = function(index) {
			$scope.title = $scope.notes[index].title;
			$scope.body = $scope.notes[index].body;
			$scope.index = index;
		};

	});

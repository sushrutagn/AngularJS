var app = angular.module('listapp', []);
app.controller('listcntroller', function ($scope) {
    var self = this;
    self.list = [];
    self.addTask = function () {
        if ($scope.task == undefined || $scope.task ==" ") {
            alert('Please enter a task');
        }
        else {
            document.getElementById('list1').value = " ";
            self.list.push($scope.task);
            $scope.task = null;            
        }
    };
});
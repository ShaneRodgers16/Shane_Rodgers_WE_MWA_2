var app = angular.module("todoApp", []);

app.controller("todoCtrl", function($scope) {
  $scope.tasks = [];
  $scope.empty = true;
  // Add a new task in to do list
  $scope.add = function() {
    if (
      $scope.titleOfToDo === undefined ||
      $scope.titleOfToDo === null ||
      $scope.titleOfToDo === ""
    ) {
      // If addable task hasn't title, return from function
      return;
    }
    $scope.tasks.push({
      title: $scope.titleOfToDo,
      status: false,
      editing: false
    });
    $scope.titleOfToDo = "";
    $scope.empty = false;
  };
  // Deleting selected task
  $scope.delete = function() {
    $scope.tasks.splice(this.$index, 1);
    if ($scope.tasks.length === 0) {
      $scope.empty = true;
    }
  };
  // Editing selected task
  $scope.edit = function() {
    if ($scope.tasks[this.$index].status) return; // If selected task has status "true" return from function
    $scope.tasks[this.$index].editing = true;
  };
  // Saving changes after editing
  $scope.save = function() {
    if ($scope.tasks[this.$index].title === "") {
      $scope.tasks[this.$index].title =
        "Empty space. Please re-enter title of a task.";
    }
    $scope.tasks[this.$index].editing = false;
  };
});

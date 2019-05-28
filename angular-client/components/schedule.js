angular
  .module("app")
  .controller("fnSchedule", [
    "$scope",
    function($scope) {
      $scope.day = "Sunday";
      $scope.startHour = "";
      $scope.endHour = "";
      $scope.message = "";
      $scope.schedules = [];
      $scope.entry = false;

      $scope.addSchedule = () => {
        const { day, startHour, endHour } = this.$scope;
        const temp = this.$scope.schedules;
        if (
          startHour >= endHour ||
          _.pluck(this.props.schedules, "day").includes(day)
        ) {
          // console.log(startHour, endHour);
        }
      };
    }
  ])

  .component("schedule", {
    controller: "fnSchedule",
    templateUrl: "angular-client/templates/schedule.html"
  });

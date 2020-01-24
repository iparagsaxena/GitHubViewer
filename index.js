(function() {
  const app = angular.module("gitHubViewer", []);

  //Controller
  const MainController = ($scope, github) => {
    //Model
    const onUserComplete = data => {
      $scope.user = data;
      github.getRepos($scope.user).then(onRepos, onError);
    };

    const onRepos = data => {
      $scope.repos = data;
    };

    const onError = () => {
      $scope.error = "Could not fetch the data";
    };

    $scope.search = username => {
      github
        .getUser(username)
        .then(onUserComplete)
        .catch(err => {
          console.log(err);
          $scope.errorUser = err.data.message;
        });
    };
    $scope.head = "MyGitHuB Viewer";
    $scope.repoSortOrder = "-stargazers_count";
  };

  app.controller("MainController", MainController);
})();

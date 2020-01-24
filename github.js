(function(){
    const github = $http => {
        const getUser = username => {
            return $http
            .get("https://api.github.com/users/" + username, {
              params: {
                client_id: "6559ec077def9f836c91",
                client_secret: "9b5585827deda9f0a604319898fec0794471b01c"
              }
            })
            .then(response => {return response.data})
            .catch(err => {
              console.log(err);
              $scope.errorUser = err.data.message;
            });
        };
        const getRepos = user => {
            return $http.get(user.repos_url)
            .then(response => {return response.data});
        }

    return {getUser, getRepos};
    };

    const module = angular.module('gitHubViewer');
    module.factory("github", github);
}())
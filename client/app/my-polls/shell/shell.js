(function() {
  'use strict';
  
  angular
    .module('app.myPolls')
    .controller('ShellController', ShellController);
      
  ShellController.$inject = [
    '$log', 
    '$state', 
    '$mdDialog',
    '$mdSidenav',
    'auth',
    'shell',
    'myPollsService'
  ];
    
  function ShellController(
      $log,
      $state, 
      $mdDialog,
      $mdSidenav, 
      auth, 
      shell, 
      myPollsService
    ) {
    $log = $log.getInstance('ShellController');
    
    /* jshint validthis: true */
    var vm = this;
    
    vm.action = null;
    vm.addCollection = addCollection;
    vm.collections = null;
    vm.goBack = goBack;
    vm.goToState = goToState;
    vm.logout = logout;
    vm.openLeftMenu = openLeftMenu;
    vm.shell = shell;
    
    activate();
    
    function activate() {
      auth.isAuthenticated().then(function(user) {
        if (user.group !== 'poller')
          return $state.go('auth.forbidden');
        
        // Jump to myPolls.upcoming if arriving here directly
        // (by URL or back button)
        if ($state.current.name === 'myPolls')
          $state.go('myPolls.upcoming');
        
        vm.action = 'Loading';
        myPollsService.getCollections().then(function(collections) {
          vm.action = null;
          vm.collections = collections;
        });
        
      }, function(err) {
        $state.go('auth.login');
      })
    }
    
    function addCollection() {
      $mdDialog.show({
        templateUrl: 'app/my-polls/shell/add-collection.html',
        controller: 'AddCollectionController as vm'
      });
    }
    
    function goBack() {
      $state.go(vm.shell.back.state, vm.shell.back.stateParams);
    }
    
    function goToState(state, params) {
      $state.go(state, params);
      $mdSidenav('left').close();
    }
    
    function logout() {
      auth.logout();
    }
    
    function openLeftMenu() {
      $mdSidenav('left').toggle();
    }
    
  }
  
})();
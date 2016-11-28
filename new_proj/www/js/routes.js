angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('welcome', {
    url: '/page1',
    templateUrl: 'templates/welcome.html',
    controller: 'welcomeCtrl'
  })

  .state('login', {
    url: '/page2',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/page3',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('userAccount', {
    url: '/page4',
    templateUrl: 'templates/userAccount.html',
    controller: 'userAccountCtrl'
  })

  .state('scanABill', {
    url: '/page5',
    templateUrl: 'templates/scanABill.html',
    controller: 'scanABillCtrl'
  })

  .state('myInventory', {
    url: '/page6',
    templateUrl: 'templates/myInventory.html',
    controller: 'myInventoryCtrl'
  })

  .state('foodNearMe', {
    url: '/page7',
    templateUrl: 'templates/foodNearMe.html',
    controller: 'foodNearMeCtrl'
  })

  .state('expiringSoon', {
    url: '/page8',
    templateUrl: 'templates/expiringSoon.html',
    controller: 'expiringSoonCtrl'
  })

  .state('transactions', {
    url: '/page9',
    templateUrl: 'templates/transactions.html',
    controller: 'transactionsCtrl'
  })

$urlRouterProvider.otherwise('/page1')

  

});
	// create the module and name it unixApp
	var unixApp = angular.module('unixApp', ['ngRoute']);

	// configure our routes
	unixApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.htm',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'pages/about.htm',
				controller  : 'aboutController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'pages/contact.htm',
				controller  : 'contactController'
			})
			.when('/sed', {
				templateUrl : 'pages/sed.htm',
				controller  : 'contactController'
			})
			.when('/grep', {
				templateUrl : 'pages/grep.htm',
				controller  : 'contactController'
			})
			.when('/awk', {
				templateUrl : 'pages/awk.htm',
				controller  : 'contactController'
			})
			.when('/utility', {
				templateUrl : 'pages/utility.htm',
				controller  : 'contactController'
			})
			.when('/diskmgmt', {
				templateUrl : 'pages/diskmgmt.htm',
				controller  : 'contactController'
			})
			.when('/basic_structure', {
				templateUrl : 'pages/basic_structure.htm',
				controller  : 'contactController'
			})
			.when('/decision_making', {
				templateUrl : 'pages/decision_making.htm',
				controller  : 'contactController'
			})
			.when('/loops', {
				templateUrl : 'pages/loops.htm',
				controller  : 'contactController'
			})
			.when('/bash_prog', {
				templateUrl : 'pages/bash_prog.htm',
				controller  : 'contactController'
			}).when('/ksh_prog', {
				templateUrl : 'pages/ksh_prog.htm',
				controller  : 'contactController'
			})
			.when('/c_prog', {
				templateUrl : 'pages/c_prog.htm',
				controller  : 'contactController'
			})
			.when('/bash_add', {
				templateUrl : 'pages/bash_add.htm',
				controller  : 'contactController'
			})
			.when('/bash_mul', {
				templateUrl : 'pages/bash_mul.htm',
				controller  : 'contactController'
			})
			.when('/bash_if', {
				templateUrl : 'pages/bash_if.htm',
				controller  : 'contactController'
			})
			.when('/bash_for', {
				templateUrl : 'pages/bash_for.htm',
				controller  : 'contactController'
			})
			.when('/bash_while', {
				templateUrl : 'pages/bash_while.htm',
				controller  : 'contactController'
			})
			.when('/bash_dowhile', {
				templateUrl : 'pages/bash_dowhile.htm',
				controller  : 'contactController'
			})
			.when('/bash_filehandle', {
				templateUrl : 'pages/bash_filehandle.htm',
				controller  : 'contactController'
			})



		
	});

	// create the controller and inject Angular's $scope
	unixApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
	});

	unixApp.controller('aboutController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});

	unixApp.controller('contactController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});


	unixApp.controller('use',function($scope){
	
	$scope.list = ["#add","Harish","RollNo","123","Address","KORBA"]
	});

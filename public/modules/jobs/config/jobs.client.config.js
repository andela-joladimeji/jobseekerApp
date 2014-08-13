'use strict';

// Configuring the Articles module
angular.module('jobs').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Jobs', 'jobs', 'dropdown', '/jobs(/create)?');
		Menus.addSubMenuItem('topbar', 'jobs', 'List Jobs', 'jobs');
		Menus.addSubMenuItem('topbar', 'jobs', 'New Job', 'jobs/create');
	}
]);





// <ul class="nav navbar-nav navbar-right" data-ng-hide="authentication.user">
// 			<li ui-route="/signup" ng-class="{active: $uiRoute}">
				
// 				<a href="#" class="dropdown-toggle" data-toggle="dropdown">
// 					<span data-ng-bind="authentication.user"></span> <a href="#">JobSeekers<a><b class="caret"></b>
// 				</a>
// 			</li>
// 			<li ui-route="/signup" ng-class="{active: $uiRoute}">
// 				<a href="/#!/employer_signup">Employers Signup</a>
// 			</li>
// 			<li class="divider-vertical"></li>
// 			<li ui-route="/signin" ng-class="{active: $uiRoute}">
// 				<a href="/#!/signin">Signin</a>
// 			</li>
// 		</ul>





























// <div class="container" data-ng-controller="HeaderController">
// 	<div class="navbar-header">
// 		<button class="navbar-toggle" type="button" data-ng-click="toggleCollapsibleMenu()">
// 			<span class="sr-only">Toggle navigation</span>
// 			<span class="icon-bar"></span>
// 			<span class="icon-bar"></span>
// 			<span class="icon-bar"></span>
// 		</button>
// 		<a href="/#!/" class="navbar-brand">jobseekerApp</a>
// 	</div>
// 	<nav class="collapse navbar-collapse" collapse="!isCollapsed" role="navigation">
// 		<ul class="nav navbar-nav" data-ng-if="menu.shouldRender(authentication.user);">
// 			<li data-ng-repeat="item in menu.items" data-ng-if="item.shouldRender(authentication.user);" ng-switch="item.menuItemType" ui-route="{{item.uiRoute}}" class="{{item.menuItemClass}}" ng-class="{active: ($uiRoute)}" dropdown="item.menuItemType === 'dropdown'">
// 				<a ng-switch-when="dropdown" class="dropdown-toggle">
// 					<span data-ng-bind="item.title"></span>
// 					<b class="caret"></b>
// 				</a>
// 				<ul ng-switch-when="dropdown" class="dropdown-menu">
// 					<li data-ng-repeat="subitem in item.items" data-ng-if="subitem.shouldRender(authentication.user);" ui-route="{{subitem.uiRoute}}" ng-class="{active: $uiRoute}">
// 						<a href="/#!/{{subitem.link}}" data-ng-bind="subitem.title"></a>
// 					</li>
// 				</ul>
// 				<a ng-switch-default href="/#!/{{item.link}}" data-ng-bind="item.title"></a>
// 			</li>
// 		</ul>
// 		<ul class="nav navbar-nav navbar-right" data-ng-hide="authentication.user">
// 			<li ui-route="/signup" ng-class="{active: $uiRoute}">
// 				<a href="#">JobSeekers<a>
// 				<a href="#" class="dropdown-toggle" data-toggle="dropdown">
// 					<span></span> <b class="caret"></b>
// 				</a>
// 			</li>
// 			<li ui-route="/signup" ng-class="{active: $uiRoute}">
// 				<a href="/#!/employer_signup">Employers Signup</a>
// 			</li>
// 			<li class="divider-vertical"></li>
// 			<li ui-route="/signin" ng-class="{active: $uiRoute}">
// 				<a href="/#!/signin">Signin</a>
// 			</li>
// 		</ul>

// 		<!-- <ul class="nav navbar-nav navbar-right" data-ng-hide="authentication.user">
// 			<li class="dropdown">
// 				<a href="#" class="dropdown-toggle" data-toggle="dropdown">
// 					<span data-ng-bind="authentication.user"></span> <b class="caret"></b>
// 				</a>
// 				<ul class="dropdown-menu">
// 					<li>
// 						<a href="/#!/settings/profile">Edit Profile</a>
// 					</li>
// 					<li>
// 						<a href="/#!/settings/accounts">Manage Social Accounts</a>
// 					</li>
// 					<li data-ng-show="authentication.user.provider === 'local'">
// 						<a href="/#!/settings/password">Change Password</a>
// 					</li>
// 					<li class="divider"></li>
// 					<li>
// 						<a href="/auth/signout">Signout</a>
// 					</li>
// 				</ul>
// 			</li>
// 		</ul> -->
// 		<ul class="nav navbar-nav navbar-right" data-ng-show="authentication.user">
// 			<li class="dropdown">
// 				<a href="#" class="dropdown-toggle" data-toggle="dropdown">
// 					<span data-ng-bind="authentication.user.displayName"></span> <b class="caret"></b>
// 				</a>
// 				<ul class="dropdown-menu">
// 					<li>
// 						<a href="/#!/settings/profile">Edit Profile</a>
// 					</li>
// 					<li>
// 						<a href="/#!/settings/accounts">Manage Social Accounts</a>
// 					</li>
// 					<li data-ng-show="authentication.user.provider === 'local'">
// 						<a href="/#!/settings/password">Change Password</a>
// 					</li>
// 					<li class="divider"></li>
// 					<li>
// 						<a href="/auth/signout">Signout</a>
// 					</li>
// 				</ul>
// 			</li>
// 		</ul>
// 	</nav>
// </div>
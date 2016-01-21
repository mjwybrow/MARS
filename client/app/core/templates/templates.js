angular.module("app.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("app/auth/login.html","<md-dialog aria-label=\"MARS Login\" ng-cloak><form name=\"loginForm\"><md-toolbar><div class=\"md-toolbar-tools\"><h2>MARS Login</h2></div></md-toolbar><md-dialog-content style=\"max-width:650px; min-width: 480px\"><div class=\"md-dialog-content\"><md-input-container class=\"md-block\"><label>Username</label><md-icon class=\"material_icons\">person</md-icon><input name=\"username\" required md-autofocus ng-model=\"vm.user.username\"><div ng-messages=\"loginForm.username.$error\"><div ng-message=\"required\">You must enter a username</div></div></md-input-container><md-input-container class=\"md-block\"><label>Password</label><md-icon class=\"material_icons\">vpn_key</md-icon><input name=\"password\" type=\"password\" required ng-model=\"vm.user.password\"><div ng-messages=\"loginForm.password.$error\"><div ng-message=\"required\">You must enter a password</div></div><div ng-messages=\"vm.serverErrors\" ng-show=\"vm.serverErrors\"><div ng-message=\"401\">The username or password was incorrect.</div></div></md-input-container></div></md-dialog-content><md-dialog-actions layout=\"column\" layout-align=\"center center\"><md-button class=\"md-primary\" type=\"submit\" ng-disabled=\"loginForm.$invalid\" ng-click=\"vm.login()\">Login</md-button></md-dialog-actions></form></md-dialog>");
$templateCache.put("app/poll/poll.html","<div flex layout=\"column\"><md-toolbar class=\"md-whiteframe-1dp\" ng-class=\"{ \'bg-blue-grey\': vm.isPreview }\"><div class=\"md-toolbar-tools\"><h2><span>Mars</span></h2><span flex></span><md-button class=\"md-icon-button\" aria-label=\"Join Feed\" ng-hide=\"vm.isPreview\" ng-click=\"vm.showSubscribeDialog($event)\"><md-tooltip>Join feed</md-tooltip><md-icon class=\"material-icons\">add</md-icon></md-button><md-button class=\"md-icon-button\" aria-label=\"Close preview\" ng-show=\"vm.isPreview\" ng-click=\"vm.closePreview()\"><md-tooltip>Close preview</md-tooltip><md-icon class=\"material-icons\">visibility_off</md-icon></md-button><md-menu md-position-mode=\"target-right target\"><md-button class=\"md-icon-button\" aria-label=\"Account\" ng-click=\"$mdOpenMenu($event)\"><md-icon class=\"material-icons\">account_circle</md-icon></md-button><md-menu-content width=\"3\"><!-- <md-menu-item ng-show=\"vm.isPreview\">\r\n            <md-button ng-click=\"vm.closePreview()\">\r\n              My Polls\r\n            </md-button>\r\n          </md-menu-item> --><!-- <md-menu-divider></md-menu-divider> --><md-menu-item><md-button ng-click=\"vm.logout()\">Sign out</md-button></md-menu-item></md-menu-content></md-menu></div></md-toolbar><!-- Polls go here --><md-content flex layout-padding class=\"md-hue-1\"><div ui-view class=\"max-width-960\"></div></md-content><!-- Button to change polls (if more than 1 exists) --><md-button class=\"md-fab md-fab-bottom-right\" aria-label=\"Switch Questions\" ng-show=\"vm.multiplePollsActive\" ng-click=\"vm.nextPoll()\"><md-icon class=\"material-icons\">queue</md-icon></md-button></div>");
$templateCache.put("app/poll/poll.none.html","<div layout-align=\"center center\" layout-fill layout=\"column\"><div class=\"background-message\">There are no polls at the moment</div></div>");
$templateCache.put("app/poll/poll.subscribe.html","<md-dialog aria-label=\"Join a question feed\"><form name=\"subscribeForm\"><md-dialog-content><div class=\"md-dialog-content\"><h2 class=\"md-title\">Join a feed</h2><md-input-container class=\"md-icon-float\"><label>Enter Code</label><md-icon class=\"material-icons\">lock</md-icon><input name=\"collectionToken\" required md-autofocus ng-model=\"vm.collectionToken\"><div ng-messages=\"subscribeForm.collectionToken.$errors\" ng-show=\"vm.serverErrors\"><div ng-message=\"required\">This is required</div></div><div ng-messages=\"vm.serverErrors\" ng-show=\"vm.serverErrors\"><div ng-message=\"404\">The code was incorrect</div></div></md-input-container></div></md-dialog-content><md-dialog-actions><mars-action-progress action=\"vm.action\"><md-button type=\"button\" ng-click=\"vm.cancel()\">Cancel</md-button><md-button style=\"margin-right:20px\" type=\"submit\" ng-click=\"vm.subscribe()\" ng-disabled=\"subscribeForm.$invalid\">Join</md-button></mars-action-progress></md-dialog-actions></form></md-dialog>");
$templateCache.put("app/poll/poll.view.html","<mars-plugin mars-plugin-name=\"vm.poll.type\" mars-plugin-view=\"poll.view\" poll=\"vm.poll\" result=\"vm.result\"></mars-plugin>");
$templateCache.put("app/result/result.html","<div flex layout=\"column\"><md-toolbar class=\"md-whiteframe-1dp\"><div class=\"md-toolbar-tools\"><h2><span>Mars</span></h2><span flex></span><md-menu><md-button aria-label=\"Resume result\" ng-click=\"$mdOpenMenu($event)\" ng-hide=\"vm.result.active && (!vm.pastResults || vm.pastResults.length === 0)\">Resume</md-button><md-menu-content width=\"10\"><md-menu-item ng-show=\"!vm.result.active\"><md-button ng-click=\"vm.resume(vm.result)\"><md-icon class=\"material-icons\">restore</md-icon>This result</md-button></md-menu-item><md-menu-divider ng-show=\"!vm.result.active && vm.pastResults.length\"></md-menu-divider><md-menu-item ng-repeat=\"pastResult in vm.pastResults\"><md-button ng-click=\"vm.resumePast(pastResult)\">{{pastResult.start | date:\'EEEE, dd MMMM yyyy, hh:mma\'}} - {{ pastResult.responsesCount }} Responses</md-button></md-menu-item></md-menu-content></md-menu><md-button class=\"md-icon-button\" aria-label=\"Close result\" ng-show=\"vm.isOwner\" ng-click=\"vm.close()\"><md-icon class=\"material-icons\">close</md-icon></md-button></div></md-toolbar><md-content flex layout-padding class=\"md-hue-1\"><div class=\"max-width-960\"><mars-plugin mars-plugin-name=\"vm.result.type\" mars-plugin-view=\"result.view\" poll=\"vm.poll\" result=\"vm.result\"></mars-plugin></div></md-content><md-toolbar style=\"background: rgba(0,0,0,0.54)\" ng-show=\"vm.result.active\"><div class=\"md-toolbar-tools\"><span>To respond to this poll, join the feed: <span class=\"md-accent\">{{vm.result.token}}</span></span></div></md-toolbar><md-toolbar class=\"md-warn\" ng-show=\"vm.result && !vm.result.active\"><div class=\"md-toolbar-tools\"><span>The poll is inactive</span> <span flex></span></div></md-toolbar></div>");
$templateCache.put("app/my-polls/collections/add-group.html","<md-dialog aria-label=\"Add New Group\" ng-cloak><form name=\"addGroupForm\"><md-dialog-content style=\"max-width:650px; min-width: 480px; min-height:500px\"><div class=\"md-dialog-content\"><h2>Add New Group</h2><md-input-container class=\"md-block\"><label>Name</label><input name=\"name\" required md-autofocus ng-disabled=\"vm.action\" ng-model=\"vm.group.name\"><div ng-messages=\"addGroupForm.name.$error\"><div ng-message=\"required\">This is required.</div></div></md-input-container><h4>Color</h4><md-grid-list md-cols-sm=\"6\" md-cols-md=\"6\" md-cols-gt-md=\"6\" md-row-height-gt-md=\"1:1\" md-row-height=\"2:2\" md-gutter=\"12px\" md-gutter-gt-sm=\"8px\"><md-grid-tile class=\"bg-{{color}}\" ng-repeat=\"color in vm.colors\" ng-class=\"{\'md-whiteframe-2dp\': vm.group.color === color}\" ng-click=\"vm.action || (vm.group.color = color)\"><md-grid-tile-footer ng-show=\"vm.group.color === color\"><h3 style=\"margin: 0 4px; text-align: center\">{{vm.inflector.humanize(color)}}</h3></md-grid-tile-footer></md-grid-tile></md-grid-list></div></md-dialog-content><md-dialog-actions><mars-action-progress action=\"vm.action\"><md-button type=\"button\" ng-click=\"vm.cancel()\">Cancel</md-button><md-button type=\"submit\" ng-click=\"vm.save()\" style=\"margin-right:20px\">Save</md-button></mars-action-progress></md-dialog-actions></form></md-dialog>");
$templateCache.put("app/my-polls/collections/add-poll.html","<md-dialog aria-label=\"Create poll\" ng-cloak><form name=\"addPollForm\"><md-dialog-content style=\"max-width: 650px; min-width: 480px\"><div class=\"md-dialog-content\"><h2>Create New Poll</h2><md-input-container class=\"md-block\"><label>Type</label><md-select ng-model=\"vm.poll.type\"><md-option ng-repeat=\"plugin in vm.pollTypes\" ng-value=\"plugin.name\">{{vm.inflector.humanize(plugin.name)}}</md-option></md-select><div ng-messages=\"addPollForm.collectionName.$error\"><div ng-message=\"required\">This is required</div></div><div ng-messages=\"vm.serverErrors\" ng-show=\"vm.serverErrors\"><div ng-message=\"403\">You do not have permission to modify this collection</div></div></md-input-container></div></md-dialog-content><md-dialog-actions><mars-action-progress action=\"vm.action\"><md-button type=\"button\" ng-click=\"vm.cancel()\">Cancel</md-button><md-button style=\"margin-right:20px\" type=\"submit\" ng-click=\"vm.create()\" ng-disabled=\"addPollForm.$invalid\">Create</md-button></mars-action-progress></md-dialog-actions></form></md-dialog>");
$templateCache.put("app/my-polls/collections/edit-collection.html","<md-dialog aria-label=\"Edit collection\" class=\"edit-collection\" ng-cloak><form name=\"editCollectionForm\"><md-dialog-content style=\"max-width:650px; min-width: 480px\"><div class=\"md-dialog-content\"><h2>Edit Collection</h2><md-input-container class=\"md-block\"><label>Name</label><input name=\"collectionName\" required md-autofocus ng-model=\"vm.collection.name\"><div ng-messages=\"editCollectionForm.collectionName.$error\"><div ng-message=\"required\">This is required</div></div><div ng-messages=\"vm.serverErrors\" ng-show=\"vm.serverErrors\"><div ng-message=\"403\">You do not have permission to modify this collection</div></div></md-input-container><h4>Owners</h4><md-list><md-list-item ng-repeat=\"owner in vm.collection.owners\"><md-icon aria-label=\"Remove owner\" ng-click=\"vm.removeOwner(owner)\">person</md-icon><p>{{ owner.name.first }} {{ owner.name.last }} ({{ owner.username }})</p><md-icon aria-label=\"Remove owner\" class=\"md-secondary\" ng-click=\"vm.removeOwner(owner)\" ng-hide=\"owner._id === vm.user._id\">clear</md-icon></md-list-item></md-list><div class=\"icon-autocomplete\" layout=\"row\"><md-icon>add</md-icon><md-autocomplete flex required md-floating-label=\"Add owner\" md-items=\"item in vm.searchUsers(vm.addOwnerText)\" md-min-length=\"3\" md-no-cache=\"true\" md-search-text=\"vm.addOwnerText\" md-selected-item=\"vm.addOwnerSelectedUser\" md-selected-item-change=\"vm.addOwner(vm.addOwnerSelectedUser)\"><md-item-template><span md-highlight-text=\"vm.addOwnerText\">{{item.name.first}} {{item.name.last}} ({{item.username}})</span></md-item-template></md-autocomplete></div></div></md-dialog-content><md-dialog-actions layout=\"row\" layout-align=\"end center\"><mars-action-progress action=\"vm.action\"><md-button type=\"button\" ng-click=\"vm.cancel()\">Cancel</md-button><md-button style=\"margin-right:20px\" type=\"submit\" ng-click=\"vm.save()\" ng-disabled=\"editCollectionForm.$invalid\">Save</md-button></mars-action-progress></md-dialog-actions></form></md-dialog>");
$templateCache.put("app/my-polls/collections/edit-group.html","<md-dialog aria-label=\"Edit group\" ng-cloak><form name=\"editGroupForm\"><md-dialog-content style=\"max-width:650px; min-width: 480px; min-height:500px\"><div class=\"md-dialog-content\"><h2>Edit Group</h2><md-input-container class=\"md-block\"><label>Name</label><input name=\"groupName\" required md-autofocus ng-disabled=\"vm.action\" ng-model=\"vm.group.name\"><div ng-messages=\"editGroupForm.groupName.$error\"><div ng-message=\"required\">This is required</div></div><div ng-messages=\"vm.serverErrors\" ng-show=\"vm.serverErrors\"><div ng-message=\"403\">You do not have permission to modify this group</div></div></md-input-container><h4>Color</h4><md-grid-list md-cols-sm=\"6\" md-cols-md=\"6\" md-cols-gt-md=\"6\" md-row-height-gt-md=\"1:1\" md-row-height=\"2:2\" md-gutter=\"12px\" md-gutter-gt-sm=\"8px\"><md-grid-tile class=\"bg-{{color}}\" ng-repeat=\"color in vm.colors\" ng-class=\"{\'md-whiteframe-2dp\': vm.group.color === color}\" ng-click=\"vm.action || (vm.group.color = color)\"><md-grid-tile-footer ng-show=\"vm.group.color === color\"><h3 style=\"margin: 0 4px; text-align: center\">{{vm.inflector.humanize(color)}}</h3></md-grid-tile-footer></md-grid-tile></md-grid-list></div></md-dialog-content><md-dialog-actions><mars-action-progress action=\"vm.action\"><md-button type=\"button\" ng-click=\"vm.cancel()\">Cancel</md-button><md-button style=\"margin-right:20px\" type=\"submit\" ng-click=\"vm.save()\" ng-disabled=\"editGroupForm.$invalid\">Save</md-button></mars-action-progress></md-dialog-actions></form></md-dialog>");
$templateCache.put("app/my-polls/collections/edit-polls.html","<div layout=\"column\" layout-fill layout-align=\"center center\" class=\"background-message\" ng-show=\"vm.polls.length == 0\"><div>There are no polls in this group</div><div>Try clicking the plus icon to add a new poll</div></div><div class=\"edit-poll\" ng-repeat=\"poll in vm.polls\" mars-scroll-to=\"poll-{{$index}}\" mars-scroll-when=\"poll._isNew\"><a id=\"poll-{{$index}}\"></a><div class=\"tools\" layout=\"row\" layout-align=\"start center\"><div class=\"md-title md-primary\">Poll {{$index + 1}}: {{vm.inflector.humanize(poll.type)}}</div><span flex></span><mars-action-progress action=\"poll._action ? poll._action : (poll._isSaving ? \'Saving\' : null)\" md-diameter=\"36px\"></mars-action-progress><md-button class=\"md-icon-button\" aria-label=\"Reorder: move up\" ng-disabled=\"$first\" ng-click=\"vm.reorderPoll($index, $index - 1)\"><md-tooltip>Move up</md-tooltip><md-icon class=\"material-icons\">arrow_upward</md-icon></md-button><md-button class=\"md-icon-button\" aria-label=\"Reorder: move down\" ng-disabled=\"$last\" ng-click=\"vm.reorderPoll($index, $index + 1)\"><md-tooltip>Move down</md-tooltip><md-icon class=\"material-icons\">arrow_downward</md-icon></md-button><md-button class=\"md-icon-button\" aria-label=\"Delete poll\" ng-click=\"vm.deletePoll($index)\" ng-disabled=\"poll._isSaving\"><md-tooltip>Delete</md-tooltip><md-icon class=\"material-icons\">delete</md-icon></md-button></div><!-- <div mars-focus-when=\"poll._isNew\"> --><!-- \r\n      mars-focus-when isn\'t working with mars-plugin. For the time being\r\n      stick with ng-include\r\n    \r\n    <mars-plugin mars-plugin-name=\"poll.type\"\r\n                 mars-plugin-view=\"poll.edit\"\r\n                 poll=\"poll\"></mars-plugin>\r\n    --><ng-include mars-focus-when=\"poll._isNew\" src=\"vm.pollEditTemplate(poll)\"></ng-include><!-- </div> --><md-divider ng-show=\"!$last\"></md-divider></div><div layout=\"column\" layout-align=\"center center\"><md-button aria-label=\"New Group\" style=\"color: rgba(0,0,0,0.54)\" ng-click=\"vm.addPoll()\"><md-icon class=\"material-icons\">add</md-icon>New Poll</md-button></div>");
$templateCache.put("app/my-polls/collections/export-result.html","<md-dialog aria-label=\"Create poll\" ng-cloak><form name=\"exportResultForm\"><md-dialog-content style=\"max-width: 650px; min-width: 480px\"><div class=\"md-dialog-content\"><h2>Export Result</h2><md-input-container class=\"md-block\"><label>Poll</label><md-select required ng-change=\"vm.selectedPollChanged()\" ng-model=\"vm.selectedPoll\" ng-model-options=\"{trackBy: \'$value._id\'}\"><md-option ng-repeat=\"poll in vm.polls\" ng-value=\"poll\">{{poll.name}}</md-option></md-select></md-input-container><md-input-container class=\"md-block\"><label>Result</label><md-select required ng-change=\"vm.selectedResultChanged()\" ng-disabled=\"!vm.results || vm.results.length === 0\" ng-model=\"vm.selectedResult\" ng-model-options=\"{trackBy: \'$value._id\'}\"><md-option ng-repeat=\"result in vm.results\" ng-value=\"result\">{{result.lastActivation.start | date:vm.resultDateFormat}} - {{result.responsesCount}} Responses</md-option></md-select></md-input-container><md-input-container class=\"md-block\"><label>Export Format</label><md-select required ng-change=\"vm.selectedExporterChanged()\" ng-disabled=\"!vm.exporters || vm.exporters.length === 0\" ng-model=\"vm.selectedExporter\" ng-model-options=\"{trackBy: \'$value.name\'}\"><md-option ng-repeat=\"exporter in vm.exporters\" ng-value=\"exporter\">{{exporter.name}} ({{exporter.extension}})</md-option></md-select></md-input-container></div></md-dialog-content><md-dialog-actions><mars-action-progress action=\"vm.action\"><md-button type=\"button\" ng-click=\"vm.cancel()\">Cancel</md-button><md-button style=\"margin-right:20px\" type=\"submit\" ng-click=\"vm.export()\" ng-disabled=\"exportResultForm.$invalid\">Export</md-button></mars-action-progress></md-dialog-actions></form></md-dialog>");
$templateCache.put("app/my-polls/collections/view-collection.html","<div layout=\"column\" layout-fill layout-align=\"center center\" class=\"background-message\" ng-show=\"vm.groups.length == 0\"><div>It\'s looking pretty empty in here</div><div>Try clicking the plus icon to add a group</div></div><div ng-repeat=\"group in vm.filteredGroups\" mars-scroll-to=\"group-{{$index}}\" mars-scroll-trigger=\"group._scrollTo\"><a id=\"group-{{$index}}\"></a><md-card><md-toolbar class=\"bg-{{group.color}}\"><div class=\"md-toolbar-tools\"><h2 class=\"md-title\" md-highlight-flags=\"i\" md-highlight-text=\"vm.shell.search.phrase\">{{ group.collection.name }} - {{ group.name }}</h2><span flex></span><md-button aria-label=\"Reorder: move up\" class=\"md-icon-button\" ng-disabled=\"$first\" ng-hide=\"vm.shell.search.show\" ng-click=\"vm.reorderGroup($index, $index - 1)\"><md-tooltip>Move up</md-tooltip><md-icon md-menu-origin class=\"material-icons\">arrow_upward</md-icon></md-button><md-button aria-label=\"Reorder: move down\" class=\"md-icon-button\" ng-disabled=\"$last\" ng-hide=\"vm.shell.search.show\" ng-click=\"vm.reorderGroup($index, $index + 1)\"><md-tooltip>Move down</md-tooltip><md-icon md-menu-origin class=\"material-icons\">arrow_downward</md-icon></md-button><md-button aria-label=\"{{ vm.isUpcoming(group) ? \'Mark as done\' : \'Mark as upcoming\' }}\" class=\"md-icon-button\" ng-click=\"vm.toggleUpcoming(group)\"><md-tooltip>{{ vm.isUpcoming(group) ? \'Mark as done\' : \'Mark as upcoming\' }}</md-tooltip><md-icon md-menu-origin class=\"material-icons\">{{ vm.isUpcoming(group) ? \'done\' : \'autorenew\' }}</md-icon></md-button><md-menu md-position-mode=\"target-right target\"><!-- Trigger element is a md-button with an icon --><md-button aria-label=\"Open collection menu\" class=\"md-icon-button\" ng-click=\"$mdOpenMenu()\"><md-icon md-menu-origin class=\"material-icons\">more_vert</md-icon></md-button><md-menu-content width=\"4\"><md-menu-item><md-button ng-click=\"\"><md-icon md-menu-align-target class=\"material-icons\">timeline</md-icon>Analytics (TODO)</md-button></md-menu-item><md-menu-item><md-button ng-click=\"vm.exportResults(group)\"><md-icon md-menu-align-target class=\"material-icons\">file_download</md-icon>Export Results</md-button></md-menu-item><!-- <md-menu-item><md-button ng-click=\"\">Copy (TODO)</md-button></md-menu-item> --><md-divider><md-menu-item><md-button ng-click=\"vm.editGroup(group)\"><md-icon md-menu-align-target class=\"material-icons\">edit</md-icon>Edit Group</md-button></md-menu-item><md-menu-item><md-button ng-click=\"vm.deleteGroup(group)\"><md-icon md-menu-align-target class=\"material-icons\">delete</md-icon>Delete Group</md-button></md-menu-item></md-menu-content></md-menu></div></md-toolbar><md-list><md-list-item ng-class=\"{ \'background-message\': !poll.name }\" ng-click=\"vm.activatePoll(poll)\" ng-repeat=\"poll in shownPolls = (group.polls | filter:{deleted:\'!\'})\"><p md-highlight-flags=\"i\" md-highlight-text=\"vm.shell.search.phrase\">{{ poll.name || \'[Unamed poll]\' }}</p></md-list-item><md-list-item class=\"background-message\" ng-show=\"shownPolls.length === 0\"><p>There are no polls in this group</p></md-list-item></md-list><div class=\"md-actions\" layout=\"row\" layout-align=\"end center\"><div ng-show=\"!group._id\" layout=\"row\" layout-align=\"end center\"><div>Saving</div><div class=\"progress-wrapper\"><md-progress-circular md-mode=\"indeterminate\" md-diameter=\"20px\"></md-progress-circular></div></div><md-button class=\"md-primary\" ng-show=\"group._id\" ng-click=\"vm.editPolls(group, shownPolls.length === 0)\">{{shownPolls.length > 0 ? \'Edit Polls\' : \'Create Polls\'}}</md-button></div></md-card></div><div layout=\"column\" layout-align=\"center center\"><md-button aria-label=\"New Group\" style=\"color: rgba(0,0,0,0.54)\" ng-click=\"vm.addGroup()\" ng-hide=\"vm.shell.search.show\"><md-icon class=\"material-icons\">add</md-icon>New Group</md-button></div>");
$templateCache.put("app/my-polls/help/getting-started.html","<div class=\"getting-started\"><h2>Getting Started</h2><p>MARS is an audience response system that allows you to run different types of polls. People in the audience respond to polls using their phones. You can view the results in real time to get immediate feedback, or later for more detailed analysis. Getting started is easy:</p><h3><span class=\"title-number\">1.</span>Create a Collection</h3><img class=\"md-whiteframe-1dp\" src=\"./assets/img/create-collection.gif\"><h3><span class=\"title-number\">2.</span>Create a Group</h3><img class=\"md-whiteframe-1dp\" src=\"./assets/img/create-group.gif\"><h3><span class=\"title-number\">3.</span>Create a Poll</h3><img class=\"md-whiteframe-1dp\" src=\"./assets/img/create-poll.gif\"><h3>Ready to Go!</h3><p>That\'s all there is to it. Your poll is now ready to run. To learn more about what MARS can do, check out <a ui-sref=\"myPolls.help.default\">Help and Support</a>.</p></div>");
$templateCache.put("app/my-polls/help/help.html","<div class=\"max-width-960\"><md-card><md-card-content><h2>Help and Support</h2><p>TODO...</p></md-card-content></md-card></div>");
$templateCache.put("app/my-polls/shell/action-progress.directive.html","<div ng-hide=\"action\" ng-transclude></div><div class=\"action-progress\" layout=\"{{orientation === \'vertical\' ? \'column\' : \'row\'}}\" layout--align=\"center center\" ng-show=\"action\"><md-progress-circular md-diameter=\"{{mdDiameter || \'24px\'}}\" md-mode=\"indeterminate\"></md-progress-circular>{{action | uppercase}}</div>");
$templateCache.put("app/my-polls/shell/add-collection.html","<md-dialog aria-label=\"Add Collection\" ng-cloak><form name=\"addCollectionForm\"><md-dialog-content style=\"max-width:650px; min-width: 480px\"><div class=\"md-dialog-content\"><h2>Create New Collection</h2><md-input-container class=\"md-block\"><label>Name</label><input name=\"collectionName\" required md-autofocus ng-model=\"vm.collection.name\"><div ng-messages=\"addCollectionForm.collectionName.$error\"><div ng-message=\"required\">This is required</div></div><div ng-messages=\"vm.serverErrors\" ng-show=\"vm.serverErrors\"><!-- <div ng-message=\"404\">The code was incorrect.</div> --></div></md-input-container></div></md-dialog-content><md-dialog-actions layout=\"row\" layout-align=\"end center\"><mars-action-progress action=\"vm.action\"><md-button type=\"button\" ng-click=\"vm.cancel()\">Cancel</md-button><md-button style=\"margin-right:20px\" type=\"submit\" ng-click=\"vm.create()\" ng-disabled=\"addCollectionForm.$invalid\">Create</md-button></mars-action-progress></md-dialog-actions></form></md-dialog>");
$templateCache.put("app/my-polls/shell/shell.html","<md-sidenav layout=\"column\" class=\"md-sidenav-left md-whiteframe-z2\" md-component-id=\"left\" md-is-locked-open=\"$mdMedia(\'gt-md\')\" ng-include=\"\'app/my-polls/shell/side-nav.html\'\"></md-sidenav><div flex layout=\"column\"><md-toolbar class=\"md-whiteframe-1dp\" ng-hide=\"vm.shell.search.show\"><div class=\"md-toolbar-tools\"><md-button aria-label=\"Settings\" class=\"md-icon-button md-secondary\" hide-gt-md ng-click=\"vm.openLeftMenu()\"><md-icon class=\"material-icons\">menu</md-icon></md-button><md-button aria-label=\"Go back\" class=\"md-icon-button\" ng-click=\"vm.goBack()\" ng-show=\"vm.shell.back.state\"><md-tooltip>Back</md-tooltip><md-icon class=\"material-icons\">arrow_back</md-icon></md-button><h3>{{ vm.shell.title }}</h3><span flex></span><md-button aria-label=\"Search\" class=\"md-icon-button\" ng-click=\"vm.shell.showSearch()\" ng-show=\"vm.shell.search.callback\"><md-tooltip>Search</md-tooltip><md-icon class=\"material-icons\">search</md-icon></md-button><md-button aria-label=\"Preview polls\" class=\"md-icon-button\" ng-click=\"vm.goToState(\'poll\', { preview: true })\"><md-tooltip>Preview polls</md-tooltip><md-icon class=\"material-icons\">visibility</md-icon></md-button><md-menu md-position-mode=\"target-right target\"><md-button aria-label=\"Account\" class=\"md-icon-button\" ng-click=\"$mdOpenMenu($event)\"><md-icon class=\"material-icons\">account_circle</md-icon></md-button><md-menu-content width=\"3\"><md-menu-item><md-button ng-click=\"vm.logout()\">Sign out</md-button></md-menu-item></md-menu-content></md-menu><md-menu md-position-mode=\"target-right target\"><!-- Trigger element is a md-button with an icon --><md-button aria-label=\"Open menu\" class=\"md-icon-button\" ng-show=\"vm.shell.menu.show\" ng-click=\"$mdOpenMenu()\"><md-icon md-menu-origin class=\"material-icons\">more_vert</md-icon></md-button><md-menu-content width=\"4\"><md-menu-item ng-repeat=\"item in vm.shell.menu.items\"><md-button ng-click=\"item.callback()\"><md-icon md-menu-align-target class=\"material-icons\" ng-show=\"item.icon\">{{item.icon}}</md-icon>{{item.label}}</md-button></md-menu-item></md-menu-content></md-menu></div></md-toolbar><md-toolbar class=\"md-hue-1 md-whiteframe-2dp\" mars-focus-when=\"vm.shell.search.show\" md-theme=\"search\" ng-show=\"vm.shell.search.show\"><div class=\"md-toolbar-tools\"><md-button aria-label=\"Close search\" class=\"md-icon-button\" ng-click=\"vm.shell.hideSearch()\"><md-icon class=\"material-icons\">arrow_back</md-icon></md-button><md-input-container flex><label>&nbsp;</label><input placeholder=\"Search...\" mars-autofocus ng-model=\"vm.shell.search.phrase\" ng-change=\"vm.shell.searchPhraseChanged()\"></md-input-container><md-button aria-label=\"Close search\" class=\"md-icon-button\" ng-click=\"vm.shell.hideSearch()\"><md-icon class=\"material-icons\">close</md-icon></md-button></div></md-toolbar><md-content flex layout=\"column\" class=\"md-hue-1\"><a id=\"top\"></a><mars-action-progress action=\"vm.action\" class=\"shell\" orientation=\"vertical\" md-diameter=\"50px\"><div ui-view layout-fill layout=\"row\"></div></mars-action-progress></md-content></div>");
$templateCache.put("app/my-polls/shell/side-nav.html","<md-toolbar class=\"md-hue-2\"><div class=\"md-toolbar-tools\">Mars</div></md-toolbar><md-content><md-list><md-list-item ng-click=\"vm.goToState(\'myPolls.upcoming\')\"><md-icon class=\"material-icons\">insert_chart</md-icon><p>Upcoming Polls</p></md-list-item><md-divider></md-divider><md-subheader>Collections</md-subheader><md-list-item ng-repeat=\"collection in vm.collections | filter: { deleted: \'!\' }\" ng-click=\"vm.goToState(\'myPolls.collections.viewCollection\', { collectionId: collection._id })\"><md-icon class=\"material-icons\">keyboard_arrow_right</md-icon><p>{{ collection.name }}</p></md-list-item><md-list-item ng-click=\"vm.addCollection()\"><md-icon class=\"material-icons\">add</md-icon><p>Add New</p></md-list-item><md-divider></md-divider><md-subheader>Management</md-subheader><md-list-item ng-click=\"vm.goToState(\'myPolls.trash\')\"><md-icon class=\"material-icons\">delete</md-icon><p>Trash</p></md-list-item><md-list-item ng-click=\"goToState(\'myPolls.settings\')\"><md-icon class=\"material-icons\">settings</md-icon><p>Settings</p></md-list-item><md-list-item ng-click=\"vm.goToState(\'myPolls.help.gettingStarted\')\"><md-icon class=\"material-icons\">help</md-icon><p>Help and Support</p></md-list-item></md-list></md-content>");
$templateCache.put("app/my-polls/trash/trash.html","<div ng-show=\"vm.groups.length == 0\" class=\"background-message\"><div>There is nothing in your trash</div></div><div ng-show=\"vm.filteredGroups.length > 0\" class=\"max-width-960\"><div ng-repeat=\"group in vm.filteredGroups\"><md-card><md-toolbar class=\"bg-{{group.color}}\"><div class=\"md-toolbar-tools\"><h2 class=\"md-title\" md-highlight-flags=\"i\" md-highlight-text=\"vm.shell.search.phrase\">{{ group.collection.name }} - {{ group.name }}</h2><span flex></span><md-menu md-position-mode=\"target-right target\"><!-- Trigger element is a md-button with an icon --><md-button ng-click=\"$mdOpenMenu()\" class=\"md-icon-button\" aria-label=\"Open collection menu\"><md-icon md-menu-origin class=\"material-icons\">more_vert</md-icon></md-button><md-menu-content width=\"4\"><md-menu-item><md-button ng-click=\"vm.restoreAllGroupsInCollection(group.collection)\"><md-icon class=\"material-icons\">reply_all</md-icon>Restore All In Collection (TODO)</md-button></md-menu-item><md-menu-item><md-button ng-click=\"vm.deleteGroupPermanently(group)\"><md-icon class=\"material-icons\">clear</md-icon>Delete Permanently</md-button></md-menu-item></md-menu-content></md-menu></div></md-toolbar><md-list><md-list-item ng-class=\"{ \'background-message\': !poll.name }\" ng-repeat=\"poll in group.polls\" ng-show=\"group.deleted || poll.deleted\"><p md-highlight-flags=\"i\" md-highlight-text=\"vm.shell.search.phrase\">{{ poll.name || \'[Unamed poll]\' }}</p><mars-action-progress action=\"poll._action\"><!-- \r\n              .md-secondary causes the button to be created at the end \r\n              of the md-list-item. This means it is no longer wrapped by \r\n              mars-action-progress, and as such won\'t  be shown/hidden\r\n              properly. Adding !poll._action to ng-show is a work around \r\n              to get the correct behaviour.\r\n            --><md-button class=\"md-secondary\" ng-click=\"vm.restorePoll(group, poll)\" ng-show=\"poll.deleted && !poll._action\">Restore Poll</md-button></mars-action-progress></md-list-item><md-list-item class=\"background-message\" ng-show=\"group.polls.length === 0\"><p>There are no polls in this group</p></md-list-item></md-list><div class=\"md-actions\" layout=\"row\" layout-align=\"end center\" ng-show=\"group.deleted\"><mars-action-progress action=\"group._action\"><md-button class=\"md-primary\" ng-click=\"vm.restoreGroup(group)\">Restore Group</md-button></mars-action-progress></div></md-card></div></div>");
$templateCache.put("app/my-polls/upcoming/upcoming.html","<div layout=\"column\" layout-fill layout-align=\"center center\" class=\"background-message\" ng-show=\"upcomingVm.groups.length == 0\"><div>You have no upcoming polls</div><div>Mark polls as upcoming by clicking the<md-icon class=\"material-icons\">autorenew</md-icon>button</div></div><div ng-show=\"upcomingVm.groups.length > 0\" class=\"max-width-960\"><div ng-repeat=\"group in upcomingVm.filteredGroups\"><md-card><md-toolbar class=\"bg-{{group.color}}\"><div class=\"md-toolbar-tools\"><h2 class=\"md-title\" md-highlight-flags=\"i\" md-highlight-text=\"vm.shell.search.phrase\">{{ group.collection.name }} - {{ group.name }}</h2><span flex></span><md-button class=\"md-icon-button md-secondary\" aria-label=\"Finished Group\" ng-click=\"upcomingVm.markGroupAsDone($index)\"><md-icon class=\"material-icons\">check</md-icon></md-button></div></md-toolbar><md-list><md-list-item ng-class=\"{ \'background-message\': !poll.name }\" ng-click=\"upcomingVm.activatePoll(poll)\" ng-repeat=\"poll in shownPolls = (group.polls | filter:{deleted:\'!\'})\"><p md-highlight-flags=\"i\" md-highlight-text=\"vm.shell.search.phrase\">{{ poll.name || \'[Unamed poll]\' }}</p></md-list-item><md-list-item class=\"background-message\" ng-show=\"shownPolls.length === 0\"><p>There are no polls in this group</p></md-list-item></md-list></md-card></div></div>");
$templateCache.put("app/multiple-choice/multiple-choice.poll.edit.html","<form name=\"editPollForm\" ng-controller=\"MultipleChoicePollEditController as vm\"><md-card><md-card-content layout=\"row\" layout-align=\"start center\"><md-input-container style=\"font-size: larger\" flex><label>Question</label><textarea name=\"question\" required mars-autofocus ng-model=\"poll.data.question\" ng-change=\"vm.questionChanged(poll)\">\r\n        </textarea><div ng-messages=\"editPollForm.question.$error\"><div ng-message=\"required\">This is required</div></div></md-input-container></md-card-content></md-card><md-whiteframe class=\"md-whiteframe-2dp mc-choice\" layout=\"row\" layout-align=\"start center\" ng-class=\"{ blank: choice.blank }\" ng-repeat=\"choice in poll.data.choices track by $index\"><h2>{{choice.label}}</h2><md-input-container flex><label>{{ choice.blank ? \'Start typing to create choice\' : \'Text\' }}</label><input ng-model=\"choice.text\" ng-change=\"vm.choiceValueChanged($index, choice.text)\"></md-input-container><md-button aria-label=\"Delete Choice\" class=\"md-icon-button\" tabindex=\"-1\" ng-click=\"vm.removeChoice($index)\" ng-show=\"!choice.blank\"><md-icon class=\"material-icons\">close</md-icon><md-tooltip>Delete choice</md-tooltip></md-button></md-whiteframe></form>");
$templateCache.put("app/multiple-choice/multiple-choice.poll.view.html","<div ng-controller=\"MultipleChoicePollViewController as vm\"><md-card><md-card-content><h2 class=\"md-title text-select-disabled\">{{ poll.data.question }}</h2></md-card-content></md-card><md-whiteframe layout=\"row\" layout-align=\"start center\" class=\"md-whiteframe-2dp mc-choice text-select-disabled\" md-ink-ripple=\"#2196F3\" ng-repeat=\"choice in poll.data.choices\" ng-class=\"{\'bg-selected\': choice == vm.selectedChoice}\" ng-click=\"vm.submitResponse(choice)\"><h2>{{ choice.label }}</h2><span flex>{{ choice.text }}</span></md-whiteframe></div>");
$templateCache.put("app/multiple-choice/multiple-choice.result.view.html","<div ng-controller=\"MultipleChoiceResultViewController as vm\"><md-card><md-card-content><h2 class=\"md-title\">{{ poll.data.question }}</h2></md-card-content></md-card><md-card><md-card-content><bar-chart data=\"result.data[\'multiple-choice\']\" bar-height=\"52px\" bar-padding=\"8px\" font-size=\"24px\" label-margin=\"48px\"></bar-chart></md-card-content></md-card></div>");
$templateCache.put("app/word-cloud/word-cloud.poll.edit.html","<form name=\"editPollForm\" ng-controller=\"WordCloudPollEditController as vm\"><md-card><md-card-content layout=\"row\" layout-align=\"start center\"><md-input-container style=\"font-size: larger\" flex><label>Question</label><textarea name=\"question\" required mars-autofocus ng-model=\"poll.data.question\" ng-change=\"vm.questionChanged(poll)\">\r\n        </textarea><div ng-messages=\"editPollForm.question.$error\"><div ng-message=\"required\">This is required</div></div></md-input-container></md-card-content></md-card></form>");
$templateCache.put("app/word-cloud/word-cloud.poll.view.html","<form name=\"responseForm\" ng-controller=\"WordCloudPollViewController as vm\"><md-card><md-card-content><h2 class=\"md-title text-select-disabled\">{{ poll.data.question }}</h2></md-card-content></md-card><md-whiteframe class=\"md-whiteframe-2dp wc-response\" layout=\"row\" layout-align=\"start center\" mars-focus-when=\"!vm.hasSubmitted\"><md-input-container flex><label>Answer</label><input name=\"response\" required mars-autofocus ng-disabled=\"vm.hasSubmitted\" ng-model=\"vm.response\"><div ng-messages=\"responseForm.response.$error\"><div ng-message=\"required\">This is required</div></div></md-input-container><md-button aria-label=\"Submit response\" class=\"md-icon-button\" type=\"submit\" ng-click=\"vm.submitResponse(vm.response)\" ng-disabled=\"responseForm.$invalid\" ng-hide=\"vm.hasSubmitted\"><md-icon class=\"material-icons\">done</md-icon><md-tooltip>Submit response</md-tooltip></md-button><md-button aria-label=\"Clear response\" class=\"md-icon-button\" ng-click=\"vm.clearResponse()\" ng-disabled=\"!vm.hasSubmitted\" ng-show=\"vm.hasSubmitted\"><md-icon class=\"material-icons\">close</md-icon><md-tooltip>Clear response</md-tooltip></md-button></md-whiteframe></form>");
$templateCache.put("app/word-cloud/word-cloud.result.view.html","<div ng-controller=\"WordCloudResultViewController as vm\"><md-card><md-card-content><h2 class=\"md-title\">{{ poll.data.question }}</h2></md-card-content></md-card><md-card><md-card-content><word-cloud words=\"result.data[\'word-cloud\']\"></word-cloud></md-card-content></md-card></div>");}]);
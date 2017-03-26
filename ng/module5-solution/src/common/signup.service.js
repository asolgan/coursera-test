(function () {
"use strict";

angular.module('common')
.service('SignUpService', SignUpService);

function SignUpService () {
  var service = this;
  service.user = null;

  service.setUser = function (user) {
    service.user = user;
  };

  service.getUser = function () {
    return service.user;
  };
}

})();

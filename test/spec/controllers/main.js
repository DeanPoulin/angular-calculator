'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('angularCalculatorApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('calculator should start in the off state', function () {
    expect(scope.state).toBe('off');
  });
});

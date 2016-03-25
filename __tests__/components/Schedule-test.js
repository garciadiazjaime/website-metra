'use strict';

var srcFolder = '../../src/components/';

describe('Render Schedule Component', function() {
  var React = require('react/addons');
  var TestUtils = React.addons.TestUtils;

  describe('Render Schedule Component', function() {
    var Schedule = require(srcFolder + 'Schedule.react');
    Schedule.contextTypes = {};
    var component = TestUtils.renderIntoDocument(<Schedule />);

    it('Ensure component renders minimum elements', function () {
      expect(component).toBeDefined();
    });
  });
});
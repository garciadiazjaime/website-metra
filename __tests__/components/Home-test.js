'use strict';

var srcFolder = '../../src/components/';

describe('Render Home Component', function() {
  var React = require('react/addons');
  var TestUtils = React.addons.TestUtils;

  describe('Render Home Component', function() {
    var Home = require(srcFolder + 'Home.react');
    Home.contextTypes = {};
    var component = TestUtils.renderIntoDocument(<Home />);

    it('Ensure component renders minimum elements', function () {
      expect(component).toBeDefined();
    });
  });
});
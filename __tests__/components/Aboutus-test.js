'use strict';

var srcFolder = '../../src/components/';
jest.dontMock(srcFolder + 'Aboutus.react');


describe('Render Aboutus Component', function() {
  var React = require('react/addons');
  var TestUtils = React.addons.TestUtils;

  describe('Render Aboutus Component', function() {
      var Aboutus = require(srcFolder + 'Aboutus.react');
      Aboutus.contextTypes = {};
      var component = TestUtils.renderIntoDocument(<Aboutus />);

      it('Ensure component renders minimum elements', function () {
        expect(component).toBeDefined();

        var button = TestUtils.findRenderedDOMComponentWithTag(component, 'Button');
        expect(React.findDOMNode(button).textContent).toEqual('Back to home')
      });
    });
});
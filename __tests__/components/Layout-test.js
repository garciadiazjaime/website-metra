'use strict';

var srcFolder = '../../src/components/';
jest.dontMock(srcFolder + 'Header.react');
jest.dontMock(srcFolder + 'Footer.react');


describe('Render Layout Component', function() {
  var React = require('react/addons');
  var TestUtils = React.addons.TestUtils;

  describe('Render Header Component', function() {
      var Header = require(srcFolder + 'Header.react');
      Header.contextTypes = {};
      var component = TestUtils.renderIntoDocument(<Header />);

      it('Ensure component renders minimum elements', function () {
        expect(component).toBeDefined();

        var anchor = TestUtils.findRenderedDOMComponentWithTag(component, 'a');
        expect(React.findDOMNode(anchor).textContent.length).toBeTruthy();

        var button = TestUtils.findRenderedDOMComponentWithTag(component, 'Button');
        expect(React.findDOMNode(button).textContent).toEqual('i')
      });
    });

  describe('Render Footer Component', function() {
      var Footer = require(srcFolder + 'Footer.react');
      var component = TestUtils.renderIntoDocument(<Footer />);

      it('Ensure component renders minimum elements', function () {
        expect(component).toBeDefined();

        var anchor = TestUtils.findRenderedDOMComponentWithTag(component, 'a');
        expect(React.findDOMNode(anchor).textContent).toEqual('Mint');
      });
    });
});
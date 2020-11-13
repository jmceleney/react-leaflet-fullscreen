'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var PropTypes = _interopDefault(require('prop-types'));
var L = require('leaflet');
require('leaflet.fullscreen');
var core = require('@react-leaflet/core');

var FullscreenControl = core.createControlComponent(function (props) {
  return L.control.fullscreen(props);
});
FullscreenControl.propTypes = {
  position: PropTypes.string,
  title: PropTypes.string,
  titleCancel: PropTypes.string,
  content: PropTypes.node,
  forceSeparateButton: PropTypes.bool,
  forcePseudoFullscreen: PropTypes.bool,
  fullscreenElement: PropTypes.bool
};

module.exports = FullscreenControl;

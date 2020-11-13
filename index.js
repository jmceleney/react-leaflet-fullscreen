import PropTypes from 'prop-types';
import * as L from "leaflet";
import 'leaflet.fullscreen';
import { createControlComponent } from '@react-leaflet/core'

const FullscreenControl = createControlComponent(
  (props) => L.control.fullscreen(props)
)

FullscreenControl.propTypes = {
  position: PropTypes.string,
  title: PropTypes.string,
  titleCancel: PropTypes.string,
  content: PropTypes.node,
  forceSeparateButton: PropTypes.bool,
  forcePseudoFullscreen: PropTypes.bool,
  fullscreenElement: PropTypes.bool
};

export default FullscreenControl;

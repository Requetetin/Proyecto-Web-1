import React from 'react'
import PropTypes from 'prop-types'
import '../Styles/Image.css'

const Image = ({
  src, alt, width, height,
}) => (
  <img className="Image" src={src} alt={alt} width={width} height={height} />
)

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
}

Image.defaultProps = {
  alt: 'Image not loading',
  width: 50,
  height: 50,
}

export default Image

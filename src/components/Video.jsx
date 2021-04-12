import React from 'react'
import PropTypes from 'prop-types'

const Video = ({ title, src }) => (
  <iframe title={title} src={src} width="90%" height="90%" />
)

Video.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Video

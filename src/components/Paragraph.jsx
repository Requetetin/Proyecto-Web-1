import React from 'react'
import PropTypes from 'prop-types'

const Paragraph = ({ text }) => (
  <p style={{ color: 'white' }}>{text}</p>
)

Paragraph.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Paragraph

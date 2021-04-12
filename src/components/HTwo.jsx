import React from 'react'
import PropTypes from 'prop-types'
import '../Styles/Subtitles.css'

const HTwo = ({ text, clase }) => (
  <h2 className={clase}>{text}</h2>
)

HTwo.propTypes = {
  text: PropTypes.string.isRequired,
  clase: PropTypes.string.isRequired,
}

export default HTwo

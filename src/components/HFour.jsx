import React from 'react'
import PropTypes from 'prop-types'
import '../Styles/Subtitles.css'

const HFour = ({ text, clase }) => (
  <h4 className={clase}>{text}</h4>
)

HFour.propTypes = {
  text: PropTypes.string.isRequired,
  clase: PropTypes.string.isRequired,
}

export default HFour

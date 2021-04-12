import React from 'react'
import PropTypes from 'prop-types'
import '../Styles/Subtitles.css'

const HThree = ({ text, clase }) => (
  <h3 className={clase}>{text}</h3>
)

HThree.propTypes = {
  text: PropTypes.string.isRequired,
  clase: PropTypes.string.isRequired,
}

export default HThree

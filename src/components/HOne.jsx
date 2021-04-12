import React from 'react'
import PropTypes from 'prop-types'
import '../Styles/Subtitles.css'

const HOne = ({ text, clase }) => (
  <h1 className={clase}>{text}</h1>
)

HOne.propTypes = {
  text: PropTypes.string.isRequired,
  clase: PropTypes.string.isRequired,
}

export default HOne

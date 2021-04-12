import React from 'react'
import PropTypes from 'prop-types'
import '../Styles/Parallax.css'

const Parallax = ({ image }) => (
  <div className="parallax" style={{ backgroundImage: `url("${image}")` }} />
)

Parallax.propTypes = {
  image: PropTypes.string.isRequired,
}

export default Parallax

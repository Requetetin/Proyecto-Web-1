import React from 'react'
import PropTypes from 'prop-types'
import '../Styles/Button.css'

const Button = ({ title, onClick }) => (
  <button className="round" type="button" onClick={onClick}>{title}</button>
)

Button.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func.isRequired,
}

Button.defaultProps = {
  title: 'Hello World',
}

export default Button

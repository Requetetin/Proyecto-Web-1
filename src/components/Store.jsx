import React from 'react'
import PropTypes from 'prop-types'
import Image from './Image'

const Store = ({ href, src }) => (
  <a href={href}>
    <Image src={src} />
  </a>
)

Store.propTypes = {
  href: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
}

export default Store

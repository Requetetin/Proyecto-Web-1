import React from 'react'
import PropTypes from 'prop-types'
import HTwo from './HTwo'
import Paragraph from './Paragraph'
import Image from './Image'
import '../Styles/Subtitles.css'

const Dlc = ({ title, text, src }) => (
  <div style={{ width: '25%' }}>
    <HTwo clase="third" text={title} />
    <Image src={src} />
    <Paragraph text={text} />
  </div>
)

Dlc.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
}

export default Dlc

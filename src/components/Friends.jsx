import React from 'react'
import PropTypes from 'prop-types'
import Paragraph from './Paragraph'
import Image from './Image'
import Button from './Button'

const Friends = ({
  src,
  text,
  title,
  link,
}) => (
  <div>
    <Image src={src} />
    <Paragraph text={text} />
    <a href={link}>
      <Button title={title} />
    </a>
  </div>
)

Friends.propTypes = {
  src: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

export default Friends
